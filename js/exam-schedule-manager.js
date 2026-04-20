// Exam Schedule Manager with Study Planner
class ExamScheduleManager {
    constructor() {
        this.exams = [];
        this.studyPlan = [];
        this.countdownTimers = {};
        this.subjects = [];
        this.init();
    }

    async init() {
        await this.loadExamSchedule();
        await this.loadStudyPlan();
        this.setupEventListeners();
        this.startCountdownTimers();
    }

    // Load exam schedule from storage or server
    async loadExamSchedule() {
        try {
            // Try to load from offline storage first
            if (window.offlineManager) {
                const offlineData = await window.offlineManager.getData('exam_schedule');
                if (offlineData && offlineData.length > 0) {
                    this.exams = offlineData;
                    this.renderExamSchedule();
                    return;
                }
            }

            // Load from server if online
            if (navigator.onLine) {
                const response = await fetch('/api/exam-schedule');
                if (response.ok) {
                    this.exams = await response.json();
                    await this.saveExamScheduleOffline();
                    this.renderExamSchedule();
                }
            }
        } catch (error) {
            console.error('Failed to load exam schedule:', error);
        }
    }

    // Load study plan from storage or server
    async loadStudyPlan() {
        try {
            // Try to load from offline storage first
            if (window.offlineManager) {
                const offlineData = await window.offlineManager.getData('study_planner');
                if (offlineData && offlineData.length > 0) {
                    this.studyPlan = offlineData;
                    this.renderStudyPlan();
                    return;
                }
            }

            // Load from server if online
            if (navigator.onLine) {
                const response = await fetch('/api/study-planner');
                if (response.ok) {
                    this.studyPlan = await response.json();
                    await this.saveStudyPlanOffline();
                    this.renderStudyPlan();
                }
            }
        } catch (error) {
            console.error('Failed to load study plan:', error);
        }
    }

    // Save exam schedule to offline storage
    async saveExamScheduleOffline() {
        if (window.offlineManager) {
            await window.offlineManager.clearData('exam_schedule');
            await window.offlineManager.saveData('exam_schedule', this.exams);
        }
    }

    // Save study plan to offline storage
    async saveStudyPlanOffline() {
        if (window.offlineManager) {
            await window.offlineManager.clearData('study_planner');
            await window.offlineManager.saveData('study_planner', this.studyPlan);
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Add exam button
        document.getElementById('add-exam-btn')?.addEventListener('click', () => {
            this.showAddExamModal();
        });

        // Add study session button
        document.getElementById('add-study-session-btn')?.addEventListener('click', () => {
            this.showAddStudySessionModal();
        });

        // Generate study plan button
        document.getElementById('generate-study-plan-btn')?.addEventListener('click', () => {
            this.generateStudyPlan();
        });
    }

    // Render exam schedule
    renderExamSchedule() {
        const container = document.getElementById('exam-schedule-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.exams.length === 0) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <i class="fas fa-calendar-alt text-4xl text-muted mb-4"></i>
                    <p class="text-muted">No exams scheduled yet</p>
                    <button class="btn btn-primary mt-3" onclick="examScheduleManager.showAddExamModal()">
                        <i class="fas fa-plus me-2"></i>Add First Exam
                    </button>
                </div>
            `;
            return;
        }

        // Sort exams by date
        const sortedExams = [...this.exams].sort((a, b) => new Date(a.date) - new Date(b.date));

        const examList = document.createElement('div');
        examList.className = 'exam-list';

        sortedExams.forEach((exam, index) => {
            const examCard = this.createExamCard(exam, index);
            examList.appendChild(examCard);
        });

        container.appendChild(examList);
    }

    // Create exam card element
    createExamCard(exam, index) {
        const card = document.createElement('div');
        card.className = 'glass-card mb-4 exam-card';
        card.dataset.examId = exam.id || index;

        const examDate = new Date(exam.date);
        const now = new Date();
        const daysUntilExam = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
        const isUrgent = daysUntilExam <= 7;
        const isPast = daysUntilExam < 0;

        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <h5 class="mb-2 ${isPast ? 'text-muted' : isUrgent ? 'text-danger' : ''}">
                        <i class="fas fa-book me-2"></i>${exam.subject}
                    </h5>
                    <div class="exam-details">
                        <p class="mb-1">
                            <i class="fas fa-calendar me-2"></i>
                            <strong>Date:</strong> ${examDate.toLocaleDateString()}
                            <span class="ms-3">
                                <i class="fas fa-clock me-2"></i>
                                <strong>Time:</strong> ${exam.time || 'Not specified'}
                            </span>
                        </p>
                        <p class="mb-1">
                            <i class="fas fa-map-marker-alt me-2"></i>
                            <strong>Venue:</strong> ${exam.venue || 'Not specified'}
                        </p>
                        <p class="mb-2">
                            <i class="fas fa-info-circle me-2"></i>
                            <strong>Type:</strong> ${exam.type || 'Regular'}
                        </p>
                        <div class="exam-countdown" id="countdown-${index}">
                            ${this.getCountdownHTML(examDate, daysUntilExam, isPast)}
                        </div>
                    </div>
                </div>
                <div class="exam-actions ms-3">
                    <button class="btn btn-sm btn-outline-primary me-2" onclick="examScheduleManager.editExam(${index})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="examScheduleManager.deleteExam(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    // Get countdown HTML
    getCountdownHTML(examDate, daysUntilExam, isPast) {
        if (isPast) {
            return `<span class="badge bg-secondary">Completed</span>`;
        }

        if (daysUntilExam === 0) {
            return `<span class="badge bg-danger">Today!</span>`;
        }

        if (daysUntilExam === 1) {
            return `<span class="badge bg-warning">Tomorrow</span>`;
        }

        const urgencyClass = daysUntilExam <= 7 ? 'text-danger' : 'text-primary';
        return `
            <span class="${urgencyClass} fw-bold">
                <i class="fas fa-hourglass-half me-1"></i>
                ${daysUntilExam} days left
            </span>
        `;
    }

    // Start countdown timers
    startCountdownTimers() {
        // Update countdowns every minute
        setInterval(() => {
            this.updateAllCountdowns();
        }, 60000);

        // Initial update
        this.updateAllCountdowns();
    }

    // Update all countdown displays
    updateAllCountdowns() {
        this.exams.forEach((exam, index) => {
            const countdownElement = document.getElementById(`countdown-${index}`);
            if (countdownElement) {
                const examDate = new Date(exam.date);
                const now = new Date();
                const daysUntilExam = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
                const isPast = daysUntilExam < 0;
                
                countdownElement.innerHTML = this.getCountdownHTML(examDate, daysUntilExam, isPast);
            }
        });
    }

    // Render study plan
    renderStudyPlan() {
        const container = document.getElementById('study-plan-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.studyPlan.length === 0) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <i class="fas fa-book-reader text-4xl text-muted mb-4"></i>
                    <p class="text-muted">No study sessions planned yet</p>
                    <button class="btn btn-primary mt-3" onclick="examScheduleManager.showAddStudySessionModal()">
                        <i class="fas fa-plus me-2"></i>Add Study Session
                    </button>
                    <button class="btn btn-outline-primary mt-3 ms-2" onclick="examScheduleManager.generateStudyPlan()">
                        <i class="fas fa-magic me-2"></i>Generate Plan
                    </button>
                </div>
            `;
            return;
        }

        // Group study sessions by date
        const groupedSessions = this.groupStudySessionsByDate();

        Object.entries(groupedSessions).forEach(([date, sessions]) => {
            const dayCard = this.createStudyDayCard(date, sessions);
            container.appendChild(dayCard);
        });
    }

    // Group study sessions by date
    groupStudySessionsByDate() {
        return this.studyPlan.reduce((groups, session) => {
            const date = session.date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(session);
            return groups;
        }, {});
    }

    // Create study day card
    createStudyDayCard(date, sessions) {
        const card = document.createElement('div');
        card.className = 'glass-card mb-4 study-day-card';

        const totalHours = sessions.reduce((sum, session) => sum + (session.duration || 1), 0);
        const dateObj = new Date(date);
        const isToday = dateObj.toDateString() === new Date().toDateString();

        card.innerHTML = `
            <div class="study-day-header mb-3">
                <h5 class="mb-0 ${isToday ? 'text-primary' : ''}">
                    <i class="fas fa-calendar-day me-2"></i>
                    ${dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    ${isToday ? '<span class="badge bg-primary ms-2">Today</span>' : ''}
                </h5>
                <div class="text-muted">
                    <i class="fas fa-clock me-1"></i>
                    ${totalHours} hours total
                </div>
            </div>
            <div class="study-sessions">
                ${sessions.map(session => this.createStudySessionHTML(session)).join('')}
            </div>
            <div class="study-day-actions mt-3">
                <button class="btn btn-sm btn-outline-primary" onclick="examScheduleManager.addSessionToDay('${date}')">
                    <i class="fas fa-plus me-1"></i>Add Session
                </button>
            </div>
        `;

        return card;
    }

    // Create study session HTML
    createStudySessionHTML(session) {
        const startTime = session.startTime || '09:00';
        const endTime = session.endTime || this.calculateEndTime(startTime, session.duration || 1);
        const subject = this.getSubjectById(session.subjectId);

        return `
            <div class="study-session d-flex justify-content-between align-items-center p-3 mb-2 rounded" 
                 style="background: ${subject ? subject.color : '#6b7280'}20; border-left: 4px solid ${subject ? subject.color : '#6b7280'};">
                <div class="session-info">
                    <div class="fw-bold">${subject ? subject.name : 'Unknown Subject'}</div>
                    <div class="text-muted small">
                        <i class="fas fa-clock me-1"></i>${startTime} - ${endTime}
                        <span class="ms-2">
                            <i class="fas fa-hourglass-half me-1"></i>${session.duration || 1}h
                        </span>
                    </div>
                    ${session.topics ? `<div class="text-muted small mt-1"><i class="fas fa-list me-1"></i>${session.topics}</div>` : ''}
                </div>
                <div class="session-actions">
                    <button class="btn btn-sm btn-outline-primary me-1" onclick="examScheduleManager.editStudySession('${session.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="examScheduleManager.deleteStudySession('${session.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // Calculate end time
    calculateEndTime(startTime, duration) {
        const [hours, minutes] = startTime.split(':').map(Number);
        const endHours = hours + duration;
        return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    // Get subject by ID
    getSubjectById(subjectId) {
        return this.subjects.find(subject => subject.id === subjectId);
    }

    // Show add exam modal
    showAddExamModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Exam</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="add-exam-form">
                            <div class="mb-3">
                                <label class="form-label">Subject</label>
                                <select class="form-select" name="subject" required>
                                    <option value="">Select Subject</option>
                                    ${this.subjects.map(subject => 
                                        `<option value="${subject.id}">${subject.name}</option>`
                                    ).join('')}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Date</label>
                                <input type="date" class="form-control" name="date" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Time</label>
                                <input type="time" class="form-control" name="time">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Venue</label>
                                <input type="text" class="form-control" name="venue" placeholder="Exam hall/room">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Type</label>
                                <select class="form-select" name="type">
                                    <option value="Regular">Regular</option>
                                    <option value="Supplementary">Supplementary</option>
                                    <option value="Backlog">Backlog</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="examScheduleManager.saveExam()">Save Exam</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();

        modal.addEventListener('hidden.bs.modal', () => modal.remove());
    }

    // Save exam
    async saveExam() {
        const form = document.getElementById('add-exam-form');
        const formData = new FormData(form);
        
        const exam = {
            id: Date.now().toString(),
            subject: formData.get('subject'),
            date: formData.get('date'),
            time: formData.get('time'),
            venue: formData.get('venue'),
            type: formData.get('type'),
            createdAt: new Date().toISOString()
        };

        this.exams.push(exam);
        await this.saveExamScheduleOffline();

        if (window.offlineManager) {
            window.offlineManager.addToSyncQueue('save_exam_schedule', exam);
        }

        this.renderExamSchedule();
        bootstrap.Modal.getInstance(document.querySelector('.modal')).hide();
        
        this.showNotification('Exam added successfully!', 'success');
    }

    // Generate study plan
    generateStudyPlan() {
        if (this.exams.length === 0) {
            this.showNotification('Please add exams first to generate a study plan!', 'warning');
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Generate Study Plan</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="generate-plan-form">
                            <div class="mb-3">
                                <label class="form-label">Study Hours Per Day</label>
                                <input type="number" class="form-control" name="hoursPerDay" value="4" min="1" max="12">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Days Before Exam to Start</label>
                                <input type="number" class="form-control" name="daysBeforeExam" value="14" min="1" max="30">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Break Duration (minutes)</label>
                                <input type="number" class="form-control" name="breakDuration" value="15" min="5" max="30">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Study Method</label>
                                <select class="form-select" name="studyMethod">
                                    <option value="balanced">Balanced (all subjects)</option>
                                    <option value="priority">Priority (difficult subjects first)</option>
                                    <option value="sequential">Sequential (one subject at a time)</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="examScheduleManager.createGeneratedPlan()">Generate Plan</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();

        modal.addEventListener('hidden.bs.modal', () => modal.remove());
    }

    // Create generated study plan
    createGeneratedPlan() {
        const form = document.getElementById('generate-plan-form');
        const formData = new FormData(form);
        
        const config = {
            hoursPerDay: parseInt(formData.get('hoursPerDay')),
            daysBeforeExam: parseInt(formData.get('daysBeforeExam')),
            breakDuration: parseInt(formData.get('breakDuration')),
            studyMethod: formData.get('studyMethod')
        };

        const newPlan = this.generateStudyPlanSessions(config);
        this.studyPlan = [...this.studyPlan, ...newPlan];
        this.saveStudyPlanOffline();
        this.renderStudyPlan();

        bootstrap.Modal.getInstance(document.querySelector('.modal')).hide();
        this.showNotification(`Generated ${newPlan.length} study sessions!`, 'success');
    }

    // Generate study plan sessions
    generateStudyPlanSessions(config) {
        const sessions = [];
        const now = new Date();
        
        this.exams.forEach(exam => {
            const examDate = new Date(exam.date);
            const startDate = new Date(examDate);
            startDate.setDate(startDate.getDate() - config.daysBeforeExam);
            
            const studyDays = [];
            for (let d = new Date(startDate); d < examDate; d.setDate(d.getDate() + 1)) {
                if (d >= now) {
                    studyDays.push(new Date(d));
                }
            }

            studyDays.forEach(day => {
                const hoursRemaining = config.hoursPerDay;
                const sessionDuration = 2; // 2 hours per session
                
                for (let hour = 9; hour < 21 && hour < 9 + hoursRemaining; hour += sessionDuration + 1) {
                    sessions.push({
                        id: Date.now().toString() + Math.random(),
                        date: day.toISOString().split('T')[0],
                        subjectId: exam.subject,
                        startTime: `${hour.toString().padStart(2, '0')}:00`,
                        endTime: `${(hour + sessionDuration).toString().padStart(2, '0')}:00`,
                        duration: sessionDuration,
                        topics: `Preparation for ${exam.subject}`,
                        examId: exam.id,
                        generated: true,
                        createdAt: new Date().toISOString()
                    });
                }
            });
        });

        return sessions;
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

    // Delete exam
    async deleteExam(index) {
        if (confirm('Are you sure you want to delete this exam?')) {
            const exam = this.exams[index];
            this.exams.splice(index, 1);
            await this.saveExamScheduleOffline();
            this.renderExamSchedule();
            
            if (window.offlineManager) {
                window.offlineManager.addToSyncQueue('delete_exam', { examId: exam.id });
            }
            
            this.showNotification('Exam deleted successfully!', 'success');
        }
    }

    // Delete study session
    async deleteStudySession(sessionId) {
        if (confirm('Are you sure you want to delete this study session?')) {
            this.studyPlan = this.studyPlan.filter(session => session.id !== sessionId);
            await this.saveStudyPlanOffline();
            this.renderStudyPlan();
            
            if (window.offlineManager) {
                window.offlineManager.addToSyncQueue('delete_study_session', { sessionId });
            }
            
            this.showNotification('Study session deleted successfully!', 'success');
        }
    }

    // Edit exam (placeholder)
    editExam(index) {
        this.showNotification('Edit functionality coming soon!', 'info');
    }

    // Edit study session (placeholder)
    editStudySession(sessionId) {
        this.showNotification('Edit functionality coming soon!', 'info');
    }

    // Add session to day (placeholder)
    addSessionToDay(date) {
        this.showNotification('Add session functionality coming soon!', 'info');
    }
}

// Initialize exam schedule manager
const examScheduleManager = new ExamScheduleManager();

// Export for use in other modules
window.ExamScheduleManager = ExamScheduleManager;
window.examScheduleManager = examScheduleManager;
