// Enhanced Study Planner
class StudyPlanner {
    constructor() {
        this.studySessions = [];
        this.subjects = this.getDefaultSubjects();
        this.studyGoals = {
            daily: 4, // hours
            weekly: 28, // hours
            streak: 0
        };
        this.completedSessions = [];
        this.init();
    }

    getDefaultSubjects() {
        return [
            { id: 'math', name: 'Mathematics', color: '#3b82f6', icon: 'calculator' },
            { id: 'physics', name: 'Physics', color: '#10b981', icon: 'atom' },
            { id: 'chemistry', name: 'Chemistry', color: '#f59e0b', icon: 'flask' },
            { id: 'cse', name: 'Computer Science', color: '#8b5cf6', icon: 'monitor' },
            { id: 'eee', name: 'Electrical Engineering', color: '#ef4444', icon: 'zap' },
            { id: 'mech', name: 'Mechanical Engineering', color: '#06b6d4', icon: 'cog' },
            { id: 'civil', name: 'Civil Engineering', color: '#84cc16', icon: 'building' },
            { id: 'english', name: 'English', color: '#ec4899', icon: 'book-open' },
            { id: 'programming', name: 'Programming', color: '#6366f1', icon: 'code' },
            { id: 'datastructures', name: 'Data Structures', color: '#14b8a6', icon: 'database' }
        ];
    }

    async init() {
        await this.loadStudySessions();
        await this.loadStudyGoals();
        this.setupEventListeners();
        this.renderStudyPlanner();
        this.updateProgress();
        this.startProgressTracking();
    }

    // Load study sessions from storage
    async loadStudySessions() {
        try {
            if (window.offlineManager) {
                const offlineData = await window.offlineManager.getData('study_sessions');
                if (offlineData && offlineData.length > 0) {
                    this.studySessions = offlineData;
                    return;
                }
            }

            // Load from server if online
            if (navigator.onLine) {
                const response = await fetch('/api/study-sessions');
                if (response.ok) {
                    this.studySessions = await response.json();
                    await this.saveStudySessionsOffline();
                    return;
                }
            }

            // Add sample data if empty
            if (this.studySessions.length === 0) {
                this.addSampleData();
            }
        } catch (error) {
            console.error('Failed to load study sessions:', error);
            this.addSampleData();
        }
    }

    // Load study goals from storage
    async loadStudyGoals() {
        try {
            if (window.offlineManager) {
                const goals = await window.offlineManager.getData('study_goals');
                if (goals) {
                    this.studyGoals = { ...this.studyGoals, ...goals };
                }
            }
        } catch (error) {
            console.error('Failed to load study goals:', error);
        }
    }

    // Save study sessions to offline storage
    async saveStudySessionsOffline() {
        if (window.offlineManager) {
            await window.offlineManager.clearData('study_sessions');
            await window.offlineManager.saveData('study_sessions', this.studySessions);
        }
    }

    // Save study goals to offline storage
    async saveStudyGoalsOffline() {
        if (window.offlineManager) {
            await window.offlineManager.saveData('study_goals', this.studyGoals);
        }
    }

    // Add sample data
    addSampleData() {
        const today = new Date();
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        
        this.studySessions = [
            {
                id: '1',
                date: today.toISOString().split('T')[0],
                subjectId: 'math',
                startTime: '09:00',
                endTime: '11:00',
                duration: 2,
                topics: 'Calculus - Integration Techniques',
                status: 'completed',
                createdAt: new Date().toISOString()
            },
            {
                id: '2',
                date: today.toISOString().split('T')[0],
                subjectId: 'programming',
                startTime: '14:00',
                endTime: '16:00',
                duration: 2,
                topics: 'Data Structures - Linked Lists',
                status: 'in-progress',
                createdAt: new Date().toISOString()
            },
            {
                id: '3',
                date: tomorrow.toISOString().split('T')[0],
                subjectId: 'physics',
                startTime: '10:00',
                endTime: '12:00',
                duration: 2,
                topics: 'Quantum Mechanics - Wave Functions',
                status: 'pending',
                createdAt: new Date().toISOString()
            }
        ];
        
        this.saveStudySessionsOffline();
        this.renderStudyPlanner();
    }

    // Setup event listeners
    setupEventListeners() {
        // Add session button
        document.getElementById('add-study-session-btn')?.addEventListener('click', () => {
            this.showAddSessionModal();
        });

        // Settings button
        document.getElementById('study-settings-btn')?.addEventListener('click', () => {
            this.showSettingsModal();
        });
    }

    // Render study planner
    renderStudyPlanner() {
        const container = document.getElementById('study-plan-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.studySessions.length === 0) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <i data-lucide="book-reader" style="width: 48px; height: 48px;" class="text-muted mb-4"></i>
                    <p class="text-muted">No study sessions planned yet</p>
                    <button class="btn btn-primary mt-3" onclick="studyPlanner.showAddSessionModal()">
                        <i data-lucide="plus me-2"></i>Add First Session
                    </button>
                </div>
            `;
            return;
        }

        // Group sessions by date
        const groupedSessions = this.groupSessionsByDate();
        
        Object.entries(groupedSessions).forEach(([date, sessions]) => {
            const dayCard = this.createDayCard(date, sessions);
            container.appendChild(dayCard);
        });
    }

    // Group sessions by date
    groupSessionsByDate() {
        return this.studySessions.reduce((groups, session) => {
            const date = session.date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(session);
            return groups;
        }, {});
    }

    // Create day card
    createDayCard(date, sessions) {
        const card = document.createElement('div');
        card.className = 'glass-card mb-4 study-day-card';
        
        const dateObj = new Date(date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isToday = dateObj.getTime() === today.getTime();
        const isPast = dateObj < today;
        
        const totalHours = sessions.reduce((sum, session) => sum + (session.duration || 0), 0);
        const completedHours = sessions.filter(s => s.status === 'completed').reduce((sum, session) => sum + (session.duration || 0), 0);
        
        card.innerHTML = `
            <div class="study-day-header mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 ${isToday ? 'text-primary' : isPast ? 'text-muted' : ''}">
                        <i data-lucide="calendar-day" style="width: 20px; height: 20px;" class="me-2"></i>
                        ${dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                        ${isToday ? '<span class="badge bg-primary ms-2">Today</span>' : ''}
                        ${isPast ? '<span class="badge bg-secondary ms-2">Past</span>' : ''}
                    </h5>
                    <div class="text-muted small">
                        <i data-lucide="clock" style="width: 16px; height: 16px;" class="me-1"></i>
                        ${completedHours}/${totalHours}h completed
                    </div>
                </div>
                <div class="progress mb-2" style="height: 6px;">
                    <div class="progress-bar" style="width: ${(completedHours / totalHours) * 100}%; background: var(--primary);"></div>
                </div>
            </div>
            <div class="study-sessions">
                ${sessions.map(session => this.createSessionHTML(session)).join('')}
            </div>
            <div class="study-day-actions mt-3">
                <button class="btn btn-sm btn-outline-primary" onclick="studyPlanner.showAddSessionModal('${date}')">
                    <i data-lucide="plus" style="width: 14px;"></i> Add Session
                </button>
            </div>
        `;

        // Re-initialize Lucide icons
        setTimeout(() => lucide.createIcons(), 100);
        
        return card;
    }

    // Create session HTML
    createSessionHTML(session) {
        const subject = this.subjects.find(s => s.id === session.subjectId);
        const statusColor = {
            'completed': '#10b981',
            'in-progress': '#f59e0b',
            'pending': '#6b7280'
        }[session.status] || '#6b7280';

        return `
            <div class="study-session d-flex justify-content-between align-items-center p-3 mb-2 rounded position-relative"
                 style="background: ${subject ? subject.color + '20' : '#f3f4f6'}; 
                        border-left: 4px solid ${subject ? subject.color : '#6b7280'};">
                <div class="session-info flex-grow-1">
                    <div class="d-flex align-items-center mb-2">
                        <i data-lucide="${subject ? subject.icon : 'book'}" 
                           style="width: 16px; height: 16px; color: ${subject ? subject.color : '#6b7280'};" 
                           class="me-2"></i>
                        <span class="fw-bold">${subject ? subject.name : 'Unknown Subject'}</span>
                        <span class="badge ms-2" style="background: ${statusColor}; color: white;">
                            ${session.status || 'pending'}
                        </span>
                    </div>
                    <div class="text-muted small mb-1">
                        <i data-lucide="clock" style="width: 14px; height: 14px;" class="me-1"></i>
                        ${session.startTime} - ${session.endTime}
                        <span class="ms-2">
                            <i data-lucide="hourglass" style="width: 14px; height: 14px;" class="me-1"></i>
                            ${session.duration || 0}h
                        </span>
                    </div>
                    ${session.topics ? `
                        <div class="text-muted small">
                            <i data-lucide="list" style="width: 14px; height: 14px;" class="me-1"></i>
                            ${session.topics}
                        </div>
                    ` : ''}
                </div>
                <div class="session-actions">
                    ${session.status !== 'completed' ? `
                        <button class="btn btn-sm btn-outline-success me-1" onclick="studyPlanner.completeSession('${session.id}')" title="Mark as completed">
                            <i data-lucide="check" style="width: 14px;"></i>
                        </button>
                    ` : ''}
                    <button class="btn btn-sm btn-outline-primary me-1" onclick="studyPlanner.editSession('${session.id}')" title="Edit">
                        <i data-lucide="edit" style="width: 14px;"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="studyPlanner.deleteSession('${session.id}')" title="Delete">
                        <i data-lucide="trash" style="width: 14px;"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // Show add session modal
    showAddSessionModal(preselectedDate = '') {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Study Session</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="add-study-session-form">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Subject</label>
                                    <select class="form-select" name="subjectId" required>
                                        <option value="">Select Subject</option>
                                        ${this.subjects.map(subject => 
                                            `<option value="${subject.id}">${subject.name}</option>`
                                        ).join('')}
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Date</label>
                                    <input type="date" class="form-control" name="date" value="${preselectedDate}" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Start Time</label>
                                    <input type="time" class="form-control" name="startTime" value="09:00" required>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Duration (hours)</label>
                                    <input type="number" class="form-control" name="duration" value="2" min="0.5" max="8" step="0.5" required>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Status</label>
                                    <select class="form-select" name="status">
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Topics</label>
                                <textarea class="form-control" name="topics" rows="3" placeholder="Topics to cover..."></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Notes</label>
                                <textarea class="form-control" name="notes" rows="2" placeholder="Additional notes..."></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="studyPlanner.saveSession()">Save Session</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();

        modal.addEventListener('hidden.bs.modal', () => modal.remove());
        setTimeout(() => lucide.createIcons(), 100);
    }

    // Save session
    async saveSession() {
        const form = document.getElementById('add-study-session-form');
        const formData = new FormData(form);
        
        const startTime = formData.get('startTime');
        const duration = parseFloat(formData.get('duration'));
        
        const session = {
            id: Date.now().toString(),
            date: formData.get('date'),
            subjectId: formData.get('subjectId'),
            startTime: startTime,
            endTime: this.calculateEndTime(startTime, duration),
            duration: duration,
            status: formData.get('status'),
            topics: formData.get('topics'),
            notes: formData.get('notes'),
            createdAt: new Date().toISOString()
        };

        this.studySessions.push(session);
        await this.saveStudySessionsOffline();

        if (window.offlineManager) {
            window.offlineManager.addToSyncQueue('save_study_session', session);
        }

        this.renderStudyPlanner();
        this.updateProgress();
        
        // Close modal
        const modal = document.querySelector('.modal');
        if (modal) {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        }
        
        this.showNotification('Study session added successfully!', 'success');
    }

    // Calculate end time
    calculateEndTime(startTime, duration) {
        const [hours, minutes] = startTime.split(':').map(Number);
        const endHours = hours + duration;
        return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    // Complete session
    async completeSession(sessionId) {
        const session = this.studySessions.find(s => s.id === sessionId);
        if (session) {
            session.status = 'completed';
            session.completedAt = new Date().toISOString();
            
            await this.saveStudySessionsOffline();
            this.renderStudyPlanner();
            this.updateProgress();
            
            this.showNotification('Session marked as completed!', 'success');
        }
    }

    // Edit session
    editSession(sessionId) {
        const session = this.studySessions.find(s => s.id === sessionId);
        if (session) {
            // For now, show notification
            this.showNotification('Edit functionality coming soon!', 'info');
        }
    }

    // Delete session
    async deleteSession(sessionId) {
        if (confirm('Are you sure you want to delete this study session?')) {
            this.studySessions = this.studySessions.filter(s => s.id !== sessionId);
            
            await this.saveStudySessionsOffline();
            this.renderStudyPlanner();
            this.updateProgress();
            
            if (window.offlineManager) {
                window.offlineManager.addToSyncQueue('delete_study_session', { sessionId });
            }
            
            this.showNotification('Study session deleted successfully!', 'success');
        }
    }

    // Update progress tracking
    updateProgress() {
        const today = new Date().toISOString().split('T')[0];
        const todaySessions = this.studySessions.filter(s => s.date === today);
        const todayCompleted = todaySessions.filter(s => s.status === 'completed');
        const todayHours = todayCompleted.reduce((sum, s) => sum + (s.duration || 0), 0);
        
        // Calculate week progress
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        
        const weekSessions = this.studySessions.filter(s => {
            const sessionDate = new Date(s.date);
            return sessionDate >= weekStart && sessionDate <= weekEnd;
        });
        const weekCompleted = weekSessions.filter(s => s.status === 'completed');
        const weekHours = weekCompleted.reduce((sum, s) => sum + (s.duration || 0), 0);
        
        // Update DOM
        this.updateProgressDisplay('today', todayHours, this.studyGoals.daily);
        this.updateProgressDisplay('week', weekHours, this.studyGoals.weekly);
        this.updateStreak();
    }

    // Update progress display
    updateProgressDisplay(type, current, goal) {
        const percentage = Math.min((current / goal) * 100, 100);
        const progressBar = document.querySelector(`#${type}-progress .progress-bar`);
        const currentText = document.querySelector(`#${type}-current`);
        const goalText = document.querySelector(`#${type}-goal`);
        
        if (progressBar) progressBar.style.width = `${percentage}%`;
        if (currentText) currentText.textContent = current.toFixed(1);
        if (goalText) goalText.textContent = goal;
    }

    // Update study streak
    updateStreak() {
        // Calculate streak based on consecutive days with completed sessions
        const today = new Date();
        let streak = 0;
        
        for (let i = 0; i < 365; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(checkDate.getDate() - i);
            const dateStr = checkDate.toISOString().split('T')[0];
            
            const daySessions = this.studySessions.filter(s => s.date === dateStr);
            const hasCompleted = daySessions.some(s => s.status === 'completed');
            
            if (hasCompleted) {
                streak++;
            } else if (i > 0) {
                break;
            }
        }
        
        this.studyGoals.streak = streak;
        
        // Update DOM
        const streakElement = document.getElementById('study-streak');
        if (streakElement) {
            streakElement.innerHTML = `
                <i data-lucide="flame" style="width: 20px; height: 20px; color: #f59e0b;" class="me-2"></i>
                <span class="fw-bold text-warning">${streak} days</span>
            `;
            setTimeout(() => lucide.createIcons(), 100);
        }
    }

    // Start progress tracking
    startProgressTracking() {
        // Update progress every minute
        setInterval(() => {
            this.updateProgress();
        }, 60000);
    }

    // Show settings modal
    showSettingsModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Study Settings</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="study-settings-form">
                            <div class="mb-3">
                                <label class="form-label">Daily Study Goal (hours)</label>
                                <input type="number" class="form-control" name="daily" value="${this.studyGoals.daily}" min="1" max="12" step="0.5">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Weekly Study Goal (hours)</label>
                                <input type="number" class="form-control" name="weekly" value="${this.studyGoals.weekly}" min="1" max="84" step="1">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="studyPlanner.saveSettings()">Save Settings</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();

        modal.addEventListener('hidden.bs.modal', () => modal.remove());
    }

    // Save settings
    async saveSettings() {
        const form = document.getElementById('study-settings-form');
        const formData = new FormData(form);
        
        this.studyGoals.daily = parseFloat(formData.get('daily'));
        this.studyGoals.weekly = parseFloat(formData.get('weekly'));
        
        await this.saveStudyGoalsOffline();
        this.updateProgress();
        
        // Close modal
        const modal = document.querySelector('.modal');
        if (modal) {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        }
        
        this.showNotification('Settings saved successfully!', 'success');
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 10000; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
}

// Initialize study planner
const studyPlanner = new StudyPlanner();

// Export for use in other modules
window.StudyPlanner = StudyPlanner;
window.studyPlanner = studyPlanner;
