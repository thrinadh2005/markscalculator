/**
 * GMRIT Academic Calculator - Web Push Notification Manager
 * Handles client subscriptions, VAPID registration, pop-up modal, and Admin Broadcasts
 */

const PushManagerHelper = {
    VAPID_PUBLIC_KEY: 'BIP3cUVnS-KEqF_pw-Ff8LTWLz5LPAYcxVdJnVz9NBu4_fJ_nbHnlyyHYpWhL6F0YRGUqH8HUcvXlomKdmJlkS0',
    
    // Check if push notifications are supported
    isSupported() {
        return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
    },

    // Convert Base64 URL string to Uint8Array for VAPID applicationServerKey
    urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    },

    // Initialize and check current status
    async init() {
        if (!this.isSupported()) {
            console.log('[Push] Push notifications not supported by browser.');
            const notifBtn = document.getElementById('navbar-notif-btn');
            if (notifBtn) notifBtn.style.display = 'none';
            return;
        }

        this.updateUiState();

        // If permission is already granted, ensure subscription is synced with MongoDB
        if (Notification.permission === 'granted') {
            this.ensureSubscribed();
        } else if (Notification.permission === 'default') {
            // Show the pop-up modal after 2.5 seconds if not previously dismissed
            setTimeout(() => {
                const isDismissed = sessionStorage.getItem('gmrit_notif_modal_dismissed');
                if (!isDismissed) {
                    this.showNotificationModal();
                }
            }, 2500);
        }
    },

    // Show the interactive pop-up modal
    showNotificationModal() {
        const overlay = document.getElementById('notif-permission-overlay');
        if (overlay) {
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
            lucide.createIcons();
        }
    },

    // Close the pop-up modal
    closeNotificationModal() {
        const overlay = document.getElementById('notif-permission-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 400);
        }
        sessionStorage.setItem('gmrit_notif_modal_dismissed', 'true');
    },

    // Called when student clicks "Allow & Enable Notifications" from modal
    async subscribeFromModal() {
        const modalBtn = document.getElementById('modal-subscribe-btn');
        if (modalBtn) {
            modalBtn.disabled = true;
            modalBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Enabling...`;
        }

        const success = await this.subscribeUser();
        
        if (modalBtn) {
            modalBtn.disabled = false;
            modalBtn.innerHTML = `<i data-lucide="bell" style="width: 16px;"></i> Allow &amp; Enable Notifications`;
            lucide.createIcons();
        }

        if (success) {
            this.closeNotificationModal();
        }
    },

    // Triggered when user clicks the "Alerts" button in navbar
    handleNavbarAlertsClick() {
        if (Notification.permission === 'granted') {
            alert('🔔 Instant Alerts are ACTIVE on this device!\n\nYou will automatically receive push notifications whenever new exam schedules, internal marks, or results are released.');
        } else if (Notification.permission === 'denied') {
            alert('⚠️ Notifications are currently blocked in your browser settings.\n\nPlease tap the lock/tune icon near your browser address bar and switch Notifications to "Allow".');
        } else {
            this.showNotificationModal();
        }
    },

    // Update UI buttons based on permission
    updateUiState() {
        const notifBtn = document.getElementById('navbar-notif-btn');
        const notifBadge = document.getElementById('notif-status-badge');
        
        if (!notifBtn) return;

        if (Notification.permission === 'granted') {
            notifBtn.setAttribute('title', 'Notifications Enabled (Tap to Manage)');
            if (notifBadge) {
                notifBadge.className = 'badge bg-success';
                notifBadge.textContent = 'Active';
            }
        } else if (Notification.permission === 'denied') {
            notifBtn.setAttribute('title', 'Notifications Blocked in Browser Settings');
            if (notifBadge) {
                notifBadge.className = 'badge bg-danger';
                notifBadge.textContent = 'Blocked';
            }
        } else {
            notifBtn.setAttribute('title', 'Enable Push Notifications');
            if (notifBadge) {
                notifBadge.className = 'badge bg-primary';
                notifBadge.textContent = 'Enable';
            }
        }
    },

    // Request permission and subscribe
    async subscribeUser() {
        if (!this.isSupported()) {
            alert('Push notifications are not supported by your browser or device.');
            return false;
        }

        try {
            const permission = await Notification.requestPermission();
            this.updateUiState();

            if (permission !== 'granted') {
                console.log('[Push] Notification permission was:', permission);
                if (permission === 'denied') {
                    alert('Notifications were blocked. Please enable them in your browser site settings to receive instant alerts.');
                }
                return false;
            }

            // Get active service worker registration
            const registration = await navigator.serviceWorker.ready;
            
            // Check existing subscription
            let subscription = await registration.pushManager.getSubscription();

            if (!subscription) {
                const convertedVapidKey = this.urlBase64ToUint8Array(this.VAPID_PUBLIC_KEY);
                subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                });
                console.log('[Push] New subscription created:', subscription);
            }

            // Send subscription to backend database
            const userName = localStorage.getItem('calculator_user_name') || 'GMRIT Student';
            await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subscription: subscription.toJSON(),
                    userName: userName,
                    device: navigator.userAgent
                })
            });

            this.updateUiState();
            alert('🎉 Alerts Enabled! You will now receive instant push notifications for GMRIT results and exam updates.');
            return true;
        } catch (error) {
            console.error('[Push] Failed to subscribe user:', error);
            alert('Could not enable notifications: ' + error.message);
            return false;
        }
    },

    // Sync existing subscription
    async ensureSubscribed() {
        try {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.getSubscription();
            if (subscription) {
                const userName = localStorage.getItem('calculator_user_name') || 'GMRIT Student';
                fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        subscription: subscription.toJSON(),
                        userName: userName,
                        device: navigator.userAgent
                    })
                }).catch(err => console.warn('[Push] Background sync error:', err));
            }
        } catch (err) {
            console.warn('[Push] Sync error:', err);
        }
    },

    // Fast 1-click notification template loader
    applyTemplate(type) {
        const titleInput = document.getElementById('broadcast-title');
        const bodyInput = document.getElementById('broadcast-body');
        const urlInput = document.getElementById('broadcast-url');

        if (type === 'mid2') {
            if (titleInput) titleInput.value = '🎯 Mid-2 Results Declared!';
            if (bodyInput) bodyInput.value = 'Mid-2 examination results are now live. Check your updated internal scores and standing!';
            if (urlInput) urlInput.value = '/';
        } else if (type === 'exam') {
            if (titleInput) titleInput.value = '📅 Semester Exam Timetable Released';
            if (bodyInput) bodyInput.value = 'The official SEE exam timetable has been announced. Open the Study Planner to prepare your schedule.';
            if (urlInput) urlInput.value = '/#study-planner';
        } else if (type === 'sgpa') {
            if (titleInput) titleInput.value = '📊 Semester SGPA Results Published!';
            if (bodyInput) bodyInput.value = 'Semester end grade results are available on the results portal. Check your CGPA and grade cards.';
            if (urlInput) urlInput.value = '/#results';
        } else if (type === 'welcome') {
            if (titleInput) titleInput.value = '👋 Welcome to GMRIT Academic Calculator!';
            if (bodyInput) bodyInput.value = 'You are now set up to receive instant push alerts for all GMRIT examinations and results.';
            if (urlInput) urlInput.value = '/';
        }
        this.updatePreview();
    },

    // Test notification on this device
    async sendTestNotificationToSelf() {
        if (Notification.permission !== 'granted') {
            const allow = confirm('Notifications are not enabled on this browser yet. Would you like to enable them now to test?');
            if (allow) {
                await this.subscribeUser();
            }
            return;
        }

        try {
            const registration = await navigator.serviceWorker.ready;
            registration.showNotification('🧪 Test Push Notification', {
                body: 'Push notifications are working perfectly on this device! 🚀',
                icon: '/icons/icon-512.png',
                badge: '/icons/icon-512.png',
                vibrate: [200, 100, 200],
                data: { url: '/' }
            });
        } catch (e) {
            alert('Could not show test notification: ' + e.message);
        }
    },

    // --- ADMIN BROADCAST FUNCTIONS ---
    async loadSubscriberStats() {
        try {
            const countEl = document.getElementById('admin-subscriber-count');
            const listEl = document.getElementById('broadcast-subscribers-list');
            if (countEl) countEl.textContent = '...';

            const res = await fetch('/api/subscribe');
            if (!res.ok) throw new Error('Failed to load stats');
            const data = await res.json();

            if (countEl) {
                countEl.textContent = data.totalSubscribers || 0;
            }

            if (listEl) {
                if (!data.recentSubscribers || data.recentSubscribers.length === 0) {
                    listEl.innerHTML = '<p class="text-center text-muted small py-3">No registered devices yet. Tap "Enable Alerts" on your phone to register your first device!</p>';
                } else {
                    let html = '<div class="list-group list-group-flush">';
                    data.recentSubscribers.forEach(sub => {
                        const isMobile = (sub.device || '').toLowerCase().includes('mobile') || (sub.device || '').toLowerCase().includes('android') || (sub.device || '').toLowerCase().includes('iphone');
                        const iconName = isMobile ? 'smartphone' : 'laptop';
                        const dateStr = sub.updatedAt ? new Date(sub.updatedAt).toLocaleString() : 'Recently';
                        const devName = isMobile ? 'Mobile Device' : 'Desktop / Laptop';
                        
                        html += `
                            <div class="list-group-item bg-transparent border-primary border-opacity-10 py-2 px-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="pwa-icon" style="width: 28px; height: 28px; background: rgba(56, 189, 248, 0.12); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                                            <i data-lucide="${iconName}" style="width: 14px; color: var(--primary);"></i>
                                        </div>
                                        <div>
                                            <div class="fw-bold small" style="color: var(--text);">${sub.userName || 'Student'}</div>
                                            <div class="text-muted extra-small" style="font-size: 0.65rem;">${devName} &bull; ${sub.ip || 'Local'}</div>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <span class="badge bg-success bg-opacity-20 text-success" style="font-size: 0.6rem;">Active</span>
                                        <div class="text-muted extra-small" style="font-size: 0.62rem;">${dateStr}</div>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    html += '</div>';
                    listEl.innerHTML = html;
                    lucide.createIcons();
                }
            }
            return data;
        } catch (e) {
            console.error('[Push Admin] Error loading subscriber stats:', e);
            const countEl = document.getElementById('admin-subscriber-count');
            const listEl = document.getElementById('broadcast-subscribers-list');
            if (countEl) countEl.textContent = '0';
            if (listEl) listEl.innerHTML = '<p class="text-center text-muted small py-2">Tap "Refresh" to load device logs.</p>';
        }
    },

    async sendBroadcast() {
        const titleInput = document.getElementById('broadcast-title');
        const bodyInput = document.getElementById('broadcast-body');
        const urlInput = document.getElementById('broadcast-url');
        const btn = document.getElementById('broadcast-submit-btn');
        const resultDiv = document.getElementById('broadcast-result');

        const title = titleInput?.value.trim();
        const body = bodyInput?.value.trim();
        const url = urlInput?.value.trim() || '/';

        if (!title || !body) {
            alert('Please enter both a Notification Title and Message Body.');
            return;
        }

        const confirmSend = confirm(`Are you sure you want to broadcast this notification to ALL registered student devices?\n\nTitle: ${title}\nMessage: ${body}`);
        if (!confirmSend) return;

        if (btn) {
            btn.disabled = true;
            btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Broadcasting to all devices...`;
        }
        if (resultDiv) {
            resultDiv.className = 'alert alert-info py-2 px-3 small';
            resultDiv.textContent = 'Broadcasting notification to devices...';
            resultDiv.classList.remove('hidden');
        }

        try {
            const res = await fetch('/api/send-notification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    url: url,
                    icon: '/icons/icon-512.png'
                })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                if (resultDiv) {
                    resultDiv.className = 'alert alert-success py-2 px-3 small';
                    resultDiv.innerHTML = `<strong>✅ Broadcast Sent!</strong> Delivered to <b>${data.sent}</b> device(s). (Failed/Expired: ${data.failed})`;
                }
                titleInput.value = '';
                bodyInput.value = '';
                this.loadSubscriberStats();
            } else {
                throw new Error(data.message || data.error || 'Broadcast failed');
            }
        } catch (err) {
            console.error('[Push Admin] Broadcast error:', err);
            if (resultDiv) {
                resultDiv.className = 'alert alert-danger py-2 px-3 small';
                resultDiv.textContent = '❌ Failed: ' + err.message;
            }
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = `<i data-lucide="send" style="width: 15px;"></i> Send Broadcast Notification`;
                lucide.createIcons();
            }
        }
    },

    // Preview updater
    updatePreview() {
        const titleInput = document.getElementById('broadcast-title');
        const bodyInput = document.getElementById('broadcast-body');
        const prevTitle = document.getElementById('preview-notif-title');
        const prevBody = document.getElementById('preview-notif-body');

        if (prevTitle && titleInput) {
            prevTitle.textContent = titleInput.value.trim() || 'GMRIT Marks Calculator';
        }
        if (prevBody && bodyInput) {
            prevBody.textContent = bodyInput.value.trim() || 'Notification message preview will appear here...';
        }
    }
};

// Expose globally on window for all scripts and inline onclick handlers
window.PushManagerHelper = PushManagerHelper;

// Initialize push manager on page load
window.addEventListener('DOMContentLoaded', () => {
    PushManagerHelper.init();
});
