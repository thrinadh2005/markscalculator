// Offline Mode Manager for GMRIT Academic Calculator
class OfflineManager {
    constructor() {
        this.isOnline = navigator.onLine;
        this.dbName = 'GMRT_Academic_DB';
        this.dbVersion = 1;
        this.db = null;
        this.syncQueue = [];
        
        this.init();
        this.setupEventListeners();
    }

    async init() {
        try {
            await this.initDatabase();
            await this.checkAndSync();
        } catch (error) {
            console.error('Offline Manager initialization failed:', error);
        }
    }

    // Initialize IndexedDB for offline storage
    async initDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // Create object stores for different data types
                if (!db.objectStoreNames.contains('marks')) {
                    db.createObjectStore('marks', { keyPath: 'id', autoIncrement: true });
                }
                
                if (!db.objectStoreNames.contains('subjects')) {
                    db.createObjectStore('subjects', { keyPath: 'id', autoIncrement: true });
                }
                
                if (!db.objectStoreNames.contains('exam_schedule')) {
                    db.createObjectStore('exam_schedule', { keyPath: 'id', autoIncrement: true });
                }
                
                if (!db.objectStoreNames.contains('study_planner')) {
                    db.createObjectStore('study_planner', { keyPath: 'id', autoIncrement: true });
                }
                
                if (!db.objectStoreNames.contains('sync_queue')) {
                    db.createObjectStore('sync_queue', { keyPath: 'id', autoIncrement: true });
                }
                
                if (!db.objectStoreNames.contains('app_cache')) {
                    db.createObjectStore('app_cache', { keyPath: 'key' });
                }
            };
        });
    }

    // Setup event listeners for online/offline status
    setupEventListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.showStatus('Back online! Syncing data...', 'success');
            this.syncWhenOnline();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.showStatus('Offline mode activated', 'warning');
        });
    }

    // Show status messages to user
    showStatus(message, type = 'info') {
        const statusDiv = document.createElement('div');
        statusDiv.className = `offline-status ${type}`;
        statusDiv.textContent = message;
        statusDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        `;
        
        document.body.appendChild(statusDiv);
        
        setTimeout(() => {
            statusDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => statusDiv.remove(), 300);
        }, 3000);
    }

    // Save data to IndexedDB
    async saveData(storeName, data) {
        try {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            if (Array.isArray(data)) {
                for (const item of data) {
                    await store.add(item);
                }
            } else {
                await store.add(data);
            }
            
            return true;
        } catch (error) {
            console.error(`Failed to save data to ${storeName}:`, error);
            return false;
        }
    }

    // Get data from IndexedDB
    async getData(storeName, key = null) {
        try {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            
            if (key) {
                return await store.get(key);
            } else {
                return await store.getAll();
            }
        } catch (error) {
            console.error(`Failed to get data from ${storeName}:`, error);
            return null;
        }
    }

    // Clear data from IndexedDB
    async clearData(storeName) {
        try {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            await store.clear();
            return true;
        } catch (error) {
            console.error(`Failed to clear data from ${storeName}:`, error);
            return false;
        }
    }

    // Add action to sync queue
    addToSyncQueue(action, data) {
        const syncItem = {
            id: Date.now(),
            action,
            data,
            timestamp: new Date().toISOString()
        };
        
        this.syncQueue.push(syncItem);
        this.saveData('sync_queue', syncItem);
        
        if (this.isOnline) {
            this.syncWhenOnline();
        }
    }

    // Sync data when online
    async syncWhenOnline() {
        if (!this.isOnline || this.syncQueue.length === 0) return;
        
        this.showStatus('Syncing data...', 'info');
        
        try {
            const queueItems = await this.getData('sync_queue');
            
            for (const item of queueItems) {
                try {
                    await this.executeSyncAction(item);
                    await this.removeFromSyncQueue(item.id);
                } catch (error) {
                    console.error('Failed to sync item:', item, error);
                }
            }
            
            this.showStatus('Sync completed!', 'success');
        } catch (error) {
            console.error('Sync failed:', error);
            this.showStatus('Sync failed. Will retry later.', 'warning');
        }
    }

    // Execute sync action
    async executeSyncAction(item) {
        switch (item.action) {
            case 'save_marks':
                await this.syncMarks(item.data);
                break;
            case 'save_exam_schedule':
                await this.syncExamSchedule(item.data);
                break;
            case 'save_study_planner':
                await this.syncStudyPlanner(item.data);
                break;
            default:
                console.warn('Unknown sync action:', item.action);
        }
    }

    // Remove item from sync queue
    async removeFromSyncQueue(id) {
        try {
            const transaction = this.db.transaction(['sync_queue'], 'readwrite');
            const store = transaction.objectStore('sync_queue');
            await store.delete(id);
            
            this.syncQueue = this.syncQueue.filter(item => item.id !== id);
        } catch (error) {
            console.error('Failed to remove from sync queue:', error);
        }
    }

    // Sync marks to server
    async syncMarks(marksData) {
        if (!this.isOnline) return false;
        
        try {
            const response = await fetch('/api/marks/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(marksData)
            });
            
            return response.ok;
        } catch (error) {
            console.error('Failed to sync marks:', error);
            return false;
        }
    }

    // Sync exam schedule to server
    async syncExamSchedule(scheduleData) {
        if (!this.isOnline) return false;
        
        try {
            const response = await fetch('/api/exam-schedule/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(scheduleData)
            });
            
            return response.ok;
        } catch (error) {
            console.error('Failed to sync exam schedule:', error);
            return false;
        }
    }

    // Sync study planner to server
    async syncStudyPlanner(plannerData) {
        if (!this.isOnline) return false;
        
        try {
            const response = await fetch('/api/study-planner/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(plannerData)
            });
            
            return response.ok;
        } catch (error) {
            console.error('Failed to sync study planner:', error);
            return false;
        }
    }

    // Check and sync on initialization
    async checkAndSync() {
        if (this.isOnline) {
            await this.syncWhenOnline();
        }
    }

    // Get storage usage
    async getStorageUsage() {
        if ('storage' in navigator && 'estimate' in navigator.storage) {
            const estimate = await navigator.storage.estimate();
            return {
                used: estimate.usage,
                available: estimate.quota,
                percentage: (estimate.usage / estimate.quota) * 100
            };
        }
        return null;
    }

    // Clear all cached data
    async clearAllData() {
        try {
            const stores = ['marks', 'subjects', 'exam_schedule', 'study_planner', 'sync_queue', 'app_cache'];
            
            for (const store of stores) {
                await this.clearData(store);
            }
            
            this.showStatus('All offline data cleared', 'success');
            return true;
        } catch (error) {
            console.error('Failed to clear all data:', error);
            return false;
        }
    }

    // Export data for backup
    async exportData() {
        try {
            const stores = ['marks', 'subjects', 'exam_schedule', 'study_planner'];
            const exportData = {};
            
            for (const store of stores) {
                exportData[store] = await this.getData(store);
            }
            
            const blob = new Blob([JSON.stringify(exportData, null, 2)], {
                type: 'application/json'
            });
            
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `gmrit-academic-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            
            URL.revokeObjectURL(url);
            this.showStatus('Data exported successfully', 'success');
        } catch (error) {
            console.error('Failed to export data:', error);
            this.showStatus('Export failed', 'warning');
        }
    }

    // Import data from backup
    async importData(file) {
        try {
            const text = await file.text();
            const importData = JSON.parse(text);
            
            for (const [storeName, data] of Object.entries(importData)) {
                await this.clearData(storeName);
                if (Array.isArray(data) && data.length > 0) {
                    await this.saveData(storeName, data);
                }
            }
            
            this.showStatus('Data imported successfully', 'success');
            return true;
        } catch (error) {
            console.error('Failed to import data:', error);
            this.showStatus('Import failed', 'warning');
            return false;
        }
    }
}

// Initialize offline manager
let offlineManager = null;

try {
    offlineManager = new OfflineManager();
} catch (error) {
    console.warn('Offline Manager initialization failed:', error);
}

// Export for use in other modules
window.OfflineManager = OfflineManager;
window.offlineManager = offlineManager;
