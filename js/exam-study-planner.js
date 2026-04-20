// Exam-Driven Study Planner with Intelligent Time Allocation
class ExamStudyPlanner {
    constructor() {
        this.exams = [];
        this.studyPlan = [];
        this.subjects = this.getDefaultSubjects();
        this.settings = {
            studyHoursPerDay: 6,
            breakDuration: 15, // minutes
            studySessionDuration: 45, // minutes
            examPreparationDays: 14, // days before exam
            prioritySubjects: [],
            difficultyLevels: {}
        };
        this.init();
    }

    getDefaultSubjects() {
        return []; // Start with empty subjects - users will add their own
    }

    async init() {
        await this.loadSubjects();
        await this.loadExams();
        await this.loadStudyPlan();
        await this.loadSettings();
        this.setupEventListeners();
        this.renderSubjects();
        this.renderExamPlanner();
        this.updateDashboard();
    }

    // Load user subjects from storage
    async loadSubjects() {
        try {
            if (window.offlineManager) {
                const subjects = await window.offlineManager.getData('user_subjects');
                if (subjects && subjects.length > 0) {
                    this.subjects = subjects;
                    return;
                }
            }
            
            // Start with empty subjects
            this.subjects = [];
        } catch (error) {
            console.error('Failed to load subjects:', error);
            this.subjects = [];
        }
    }

    // Save subjects to storage
    async saveSubjects() {
        if (window.offlineManager) {
            await window.offlineManager.clearData('user_subjects');
            await window.offlineManager.saveData('user_subjects', this.subjects);
        }
    }

    // Load exams from storage
    async loadExams() {
        try {
            if (window.offlineManager) {
                const exams = await window.offlineManager.getData('exams');
                if (exams && exams.length > 0) {
                    this.exams = exams;
                    return;
                }
            }
            
            // Add sample exams if empty
            if (this.exams.length === 0) {
                this.addSampleExams();
            }
        } catch (error) {
            console.error('Failed to load exams:', error);
            this.addSampleExams();
        }
    }

    // Load study plan from storage
    async loadStudyPlan() {
        try {
            if (window.offlineManager) {
                const plan = await window.offlineManager.getData('study_plan');
                if (plan && plan.length > 0) {
                    this.studyPlan = plan;
                }
            }
        } catch (error) {
            console.error('Failed to load study plan:', error);
        }
    }

    // Load settings from storage
    async loadSettings() {
        try {
            if (window.offlineManager) {
                const settings = await window.offlineManager.getData('study_settings');
                if (settings) {
                    this.settings = { ...this.settings, ...settings };
                }
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }
    }

    // Start with empty exams - users will add their own
    addSampleExams() {
        this.exams = [];
    }

    // Save exams to storage
    async saveExams() {
        if (window.offlineManager) {
            await window.offlineManager.clearData('exams');
            await window.offlineManager.saveData('exams', this.exams);
        }
    }

    // Save study plan to storage
    async saveStudyPlan() {
        if (window.offlineManager) {
            await window.offlineManager.clearData('study_plan');
            await window.offlineManager.saveData('study_plan', this.studyPlan);
        }
    }

    // Save settings to storage
    async saveSettings() {
        if (window.offlineManager) {
            await window.offlineManager.saveData('study_settings', this.settings);
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Add exam button
        document.getElementById('add-exam-btn')?.addEventListener('click', () => {
            this.showAddExamModal();
        });

        // Generate plan button
        document.getElementById('generate-plan-btn')?.addEventListener('click', () => {
            this.generateStudyPlan();
        });

        // Settings button
        document.getElementById('planner-settings-btn')?.addEventListener('click', () => {
            this.showSettingsModal();
        });

        // Add subject button
        document.getElementById('add-subject-btn')?.addEventListener('click', () => {
            this.showAddSubjectModal();
        });
    }

    // Render subjects
    renderSubjects() {
        const container = document.getElementById('subjects-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.subjects.length === 0) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <i data-lucide="book-open" style="width: 48px; height: 48px;" class="text-muted mb-4"></i>
                    <p class="text-muted">Add subjects to start creating exams and study plans</p>
                </div>
            `;
            return;
        }

        const subjectsGrid = document.createElement('div');
        subjectsGrid.className = 'row g-3';
        
        this.subjects.forEach(subject => {
            const subjectCard = this.createSubjectCard(subject);
            subjectsGrid.appendChild(subjectCard);
        });

        container.appendChild(subjectsGrid);
        setTimeout(() => lucide.createIcons(), 100);
    }

    // Create subject card
    createSubjectCard(subject) {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        col.innerHTML = `
            <div class="glass-card p-3 subject-card" style="border-left: 4px solid ${subject.color};">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center mb-2">
                            <div class="subject-icon me-2" style="background: ${subject.color};">
                                <i data-lucide="${subject.icon}" style="width: 16px; height: 16px; color: white;"></i>
                            </div>
                            <h6 class="mb-0">${subject.name}</h6>
                        </div>
                        <div class="text-muted small">
                            Difficulty: ${subject.difficulty}/10
                        </div>
                    </div>
                    <div class="subject-actions">
                        <button class="btn btn-sm btn-outline-danger" onclick="examStudyPlanner.deleteSubject('${subject.id}')" title="Delete">
                            <i data-lucide="trash" style="width: 14px;"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        return col;
    }

    // Delete subject
    async deleteSubject(subjectId) {
        if (confirm('Are you sure you want to delete this subject? This will also remove all exams for this subject.')) {
            this.subjects = this.subjects.filter(s => s.id !== subjectId);
            
            // Remove exams for this subject
            this.exams = this.exams.filter(e => e.subjectId !== subjectId);
            
            // Remove study sessions for this subject
            this.studyPlan = this.studyPlan.filter(s => s.subjectId !== subjectId);
            
            await this.saveSubjects();
            await this.saveExams();
            await this.saveStudyPlan();
            
            this.renderSubjects();
            this.renderExamPlanner();
            this.renderStudyPlan();
            this.updateDashboard();
            
            this.showNotification('Subject deleted successfully!', 'success');
        }
    }

    // Render exam planner
    renderExamPlanner() {
        const container = document.getElementById('exam-planner-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.exams.length === 0) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <i data-lucide="calendar-check" style="width: 48px; height: 48px;" class="text-muted mb-4"></i>
                    <p class="text-muted">Add exams to generate intelligent study plans</p>
                </div>
            `;
            return;
        }

        // Sort exams by date
        const sortedExams = [...this.exams].sort((a, b) => new Date(a.date) - new Date(b.date));

        sortedExams.forEach(exam => {
            const examCard = this.createExamCard(exam);
            container.appendChild(examCard);
        });

        setTimeout(() => lucide.createIcons(), 100);
    }

    // Create exam card
    createExamCard(exam) {
        const card = document.createElement('div');
        card.className = 'glass-card mb-4 exam-card';
        
        const examDate = new Date(exam.date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const daysUntilExam = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
        const isUrgent = daysUntilExam <= 7;
        const isPast = daysUntilExam < 0;
        
        const subject = this.subjects.find(s => s.id === exam.subjectId);
        const timeLeft = this.getTimeLeft(daysUntilExam);
        
        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <div class="d-flex align-items-center mb-2">
                        <i data-lucide="${subject ? subject.icon : 'book'}" 
                           style="width: 20px; height: 20px; color: ${subject ? subject.color : '#6b7280'};" 
                           class="me-2"></i>
                        <h5 class="mb-0 ${isPast ? 'text-muted' : isUrgent ? 'text-danger' : ''}">
                            ${exam.name}
                        </h5>
                        <span class="badge ms-2" style="background: ${this.getPriorityColor(exam.priority)};">
                            ${exam.priority}
                        </span>
                    </div>
                    
                    <div class="exam-details mb-3">
                        <div class="row g-2">
                            <div class="col-md-6">
                                <div class="small text-muted">
                                    <i data-lucide="calendar" style="width: 14px; height: 14px;" class="me-1"></i>
                                    ${examDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="small text-muted">
                                    <i data-lucide="clock" style="width: 14px; height: 14px;" class="me-1"></i>
                                    ${exam.time || 'Not specified'} (${exam.duration || 0}h)
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="small text-muted">
                                    <i data-lucide="target" style="width: 14px; height: 14px;" class="me-1"></i>
                                    ${exam.totalMarks || 0} marks
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="small text-muted">
                                    <i data-lucide="trending-up" style="width: 14px; height: 14px;" class="me-1"></i>
                                    ${exam.difficulty || 'medium'} difficulty
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ${exam.chapters && exam.chapters.length > 0 ? `
                        <div class="mb-3">
                            <div class="small text-muted mb-1">Chapters:</div>
                            <div class="d-flex flex-wrap gap-1">
                                ${exam.chapters.map(chapter => 
                                    `<span class="badge bg-light text-dark">${chapter}</span>`
                                ).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="exam-countdown mb-3">
                        ${this.getCountdownHTML(daysUntilExam, timeLeft, isPast)}
                    </div>
                    
                    <div class="study-allocation">
                        <div class="small text-muted mb-1">Recommended Study Time:</div>
                        <div class="d-flex align-items-center">
                            <div class="progress flex-grow-1 me-2" style="height: 8px;">
                                <div class="progress-bar" style="width: ${this.getStudyProgress(exam)}%; background: ${subject ? subject.color : '#6b7280'};"></div>
                            </div>
                            <span class="small fw-bold">${this.calculateRecommendedStudyTime(exam)}h</span>
                        </div>
                    </div>
                </div>
                
                <div class="exam-actions ms-3">
                    <button class="btn btn-sm btn-outline-primary me-1" onclick="examStudyPlanner.editExam('${exam.id}')" title="Edit">
                        <i data-lucide="edit" style="width: 14px;"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-success me-1" onclick="examStudyPlanner.generatePlanForExam('${exam.id}')" title="Generate Plan">
                        <i data-lucide="calendar-plus" style="width: 14px;"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="examStudyPlanner.deleteExam('${exam.id}')" title="Delete">
                        <i data-lucide="trash" style="width: 14px;"></i>
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    // Get time left text
    getTimeLeft(daysUntilExam) {
        if (daysUntilExam < 0) return 'Exam passed';
        if (daysUntilExam === 0) return 'Today';
        if (daysUntilExam === 1) return 'Tomorrow';
        if (daysUntilExam <= 7) return `${daysUntilExam} days (urgent)`;
        return `${daysUntilExam} days`;
    }

    // Get countdown HTML
    getCountdownHTML(daysUntilExam, timeLeft, isPast) {
        if (isPast) {
            return `<span class="badge bg-secondary">Completed</span>`;
        }

        if (daysUntilExam === 0) {
            return `<span class="badge bg-danger animate-pulse">Today!</span>`;
        }

        if (daysUntilExam === 1) {
            return `<span class="badge bg-warning">Tomorrow</span>`;
        }

        const urgencyClass = daysUntilExam <= 7 ? 'text-danger' : 'text-primary';
        const urgencyBg = daysUntilExam <= 7 ? 'bg-danger' : 'bg-primary';
        
        return `
            <div class="d-flex align-items-center">
                <span class="${urgencyClass} fw-bold me-2">
                    <i data-lucide="hourglass" style="width: 16px; height: 16px;" class="me-1"></i>
                    ${timeLeft}
                </span>
                <div class="progress" style="width: 100px; height: 6px;">
                    <div class="progress-bar ${urgencyBg}" style="width: ${Math.max(10, 100 - (daysUntilExam * 3))}%"></div>
                </div>
            </div>
        `;
    }

    // Get priority color
    getPriorityColor(priority) {
        const colors = {
            'high': '#ef4444',
            'medium': '#f59e0b',
            'low': '#10b981'
        };
        return colors[priority] || '#6b7280';
    }

    // Calculate recommended study time
    calculateRecommendedStudyTime(exam) {
        const baseHours = 20; // Base study hours
        const difficultyMultiplier = {
            'easy': 0.8,
            'medium': 1.0,
            'hard': 1.5
        };
        const priorityMultiplier = {
            'low': 0.8,
            'medium': 1.0,
            'high': 1.3
        };
        
        const difficulty = difficultyMultiplier[exam.difficulty] || 1.0;
        const priority = priorityMultiplier[exam.priority] || 1.0;
        
        return Math.round(baseHours * difficulty * priority);
    }

    // Get study progress
    getStudyProgress(exam) {
        const recommendedHours = this.calculateRecommendedStudyTime(exam);
        const plannedHours = this.studyPlan
            .filter(session => session.examId === exam.id)
            .reduce((total, session) => total + (session.duration || 0), 0);
        
        return Math.min(100, (plannedHours / recommendedHours) * 100);
    }

    // Show add subject modal
    showAddSubjectModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Subject</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="add-subject-form">
                            <div class="mb-3">
                                <label class="form-label">Subject Name</label>
                                <input type="text" class="form-control" name="name" placeholder="e.g., Mathematics" required>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Color</label>
                                    <input type="color" class="form-control form-control-color" name="color" value="#3b82f6" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Difficulty (1-10)</label>
                                    <input type="number" class="form-control" name="difficulty" value="5" min="1" max="10" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Icon</label>
                                <select class="form-select" name="icon" required>
                                    <option value="book">Book</option>
                                    <option value="calculator">Calculator</option>
                                    <option value="atom">Atom</option>
                                    <option value="flask">Flask</option>
                                    <option value="monitor">Monitor</option>
                                    <option value="zap">Lightning</option>
                                    <option value="cog">Cog</option>
                                    <option value="building">Building</option>
                                    <option value="book-open">Book Open</option>
                                    <option value="code">Code</option>
                                    <option value="database">Database</option>
                                    <option value="globe">Globe</option>
                                    <option value="heart">Heart</option>
                                    <option value="star">Star</option>
                                    <option value="music">Music</option>
                                    <option value="palette">Palette</option>
                                    <option value="camera">Camera</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="examStudyPlanner.saveSubject()">Save Subject</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();

        modal.addEventListener('hidden.bs.modal', () => modal.remove());
    }

    // Save subject
    async saveSubject() {
        const form = document.getElementById('add-subject-form');
        const formData = new FormData(form);
        
        const subject = {
            id: Date.now().toString(),
            name: formData.get('name'),
            color: formData.get('color'),
            icon: formData.get('icon'),
            difficulty: parseInt(formData.get('difficulty'))
        };

        this.subjects.push(subject);
        await this.saveSubjects();
        
        // Close modal
        const modal = document.querySelector('.modal');
        if (modal) {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        }
        
        this.showNotification('Subject added successfully!', 'success');
    }

    // Show add exam modal
    showAddExamModal() {
        if (this.subjects.length === 0) {
            this.showNotification('Please add subjects first before creating exams!', 'warning');
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Exam</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="add-exam-form">
                            <div class="row">
                                <div class="col-md-8 mb-3">
                                    <label class="form-label">Exam Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="e.g., Mathematics Final Exam" required>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Subject</label>
                                    <select class="form-select" name="subjectId" required>
                                        <option value="">Select Subject</option>
                                        ${this.subjects.map(subject => 
                                            `<option value="${subject.id}">${subject.name}</option>`
                                        ).join('')}
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Date</label>
                                    <input type="date" class="form-control" name="date" required>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Time</label>
                                    <input type="time" class="form-control" name="time">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Duration (hours)</label>
                                    <input type="number" class="form-control" name="duration" value="2" min="1" max="6">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Total Marks</label>
                                    <input type="number" class="form-control" name="totalMarks" value="100" min="1">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Difficulty</label>
                                    <select class="form-select" name="difficulty">
                                        <option value="easy">Easy</option>
                                        <option value="medium" selected>Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Priority</label>
                                    <select class="form-select" name="priority">
                                        <option value="low">Low</option>
                                        <option value="medium" selected>Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Chapters/Topics (comma-separated)</label>
                                <textarea class="form-control" name="chapters" rows="2" placeholder="e.g., Calculus, Linear Algebra, Differential Equations"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="examStudyPlanner.saveExam()">Save Exam</button>
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

    // Save exam
    async saveExam() {
        const form = document.getElementById('add-exam-form');
        const formData = new FormData(form);
        
        const chapters = formData.get('chapters') 
            ? formData.get('chapters').split(',').map(c => c.trim()).filter(c => c)
            : [];
        
        const exam = {
            id: Date.now().toString(),
            name: formData.get('name'),
            subjectId: formData.get('subjectId'),
            date: formData.get('date'),
            time: formData.get('time'),
            duration: parseInt(formData.get('duration')),
            totalMarks: parseInt(formData.get('totalMarks')),
            difficulty: formData.get('difficulty'),
            priority: formData.get('priority'),
            chapters: chapters,
            createdAt: new Date().toISOString()
        };

        this.exams.push(exam);
        await this.saveExams();
        this.renderExamPlanner();
        this.updateDashboard();
        
        // Close modal
        const modal = document.querySelector('.modal');
        if (modal) {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        }
        
        this.showNotification('Exam added successfully!', 'success');
    }

    // Generate comprehensive study plan
    generateStudyPlan() {
        if (this.exams.length === 0) {
            this.showNotification('Please add exams first to generate a study plan!', 'warning');
            return;
        }

        // Clear existing plan
        this.studyPlan = [];
        
        // Generate plan for each exam
        this.exams.forEach(exam => {
            this.generatePlanForExam(exam.id);
        });
        
        // Optimize and merge sessions
        this.optimizeStudyPlan();
        
        this.saveStudyPlan();
        this.renderStudyPlan();
        this.updateDashboard();
        
        this.showNotification('Study plan generated successfully!', 'success');
    }

    // Generate plan for specific exam
    generatePlanForExam(examId) {
        const exam = this.exams.find(e => e.id === examId);
        if (!exam) return;

        const examDate = new Date(exam.date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Calculate study period
        const studyStartDate = new Date(examDate);
        studyStartDate.setDate(studyStartDate.getDate() - this.settings.examPreparationDays);
        
        // Ensure we don't start in the past
        const startDate = studyStartDate < today ? today : studyStartDate;
        
        // Calculate total recommended study hours
        const recommendedHours = this.calculateRecommendedStudyTime(exam);
        const availableDays = Math.ceil((examDate - startDate) / (1000 * 60 * 60 * 24));
        
        if (availableDays <= 0) return;
        
        // Calculate daily study hours needed
        const dailyHours = recommendedHours / availableDays;
        const sessionsPerDay = Math.ceil(dailyHours / (this.settings.studySessionDuration / 60));
        
        // Generate study sessions
        for (let d = new Date(startDate); d < examDate; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            
            // Check if there are already sessions for this day
            const existingSessions = this.studyPlan.filter(s => s.date === dateStr);
            const existingHours = existingSessions.reduce((total, s) => total + (s.duration || 0), 0);
            const remainingHours = Math.max(0, this.settings.studyHoursPerDay - existingHours);
            
            if (remainingHours < 0.5) continue; // Skip if less than 30 minutes available
            
            // Generate sessions for this day
            for (let session = 0; session < sessionsPerDay && session * (this.settings.studySessionDuration / 60) < remainingHours; session++) {
                const startTime = this.calculateSessionStartTime(existingSessions, session);
                const endTime = this.addMinutes(startTime, this.settings.studySessionDuration);
                
                const studySession = {
                    id: Date.now().toString() + Math.random(),
                    examId: exam.id,
                    date: dateStr,
                    subjectId: exam.subjectId,
                    startTime: startTime,
                    endTime: endTime,
                    duration: this.settings.studySessionDuration / 60,
                    type: 'study',
                    topics: this.getTopicsForSession(exam, session, sessionsPerDay),
                    priority: exam.priority,
                    difficulty: exam.difficulty,
                    generated: true,
                    createdAt: new Date().toISOString()
                };
                
                this.studyPlan.push(studySession);
                existingSessions.push(studySession);
                
                // Add break after session
                if (session < sessionsPerDay - 1) {
                    const breakSession = {
                        id: Date.now().toString() + Math.random() + 'break',
                        examId: exam.id,
                        date: dateStr,
                        subjectId: 'break',
                        startTime: endTime,
                        endTime: this.addMinutes(endTime, this.settings.breakDuration),
                        duration: this.settings.breakDuration / 60,
                        type: 'break',
                        topics: 'Break time',
                        generated: true,
                        createdAt: new Date().toISOString()
                    };
                    
                    this.studyPlan.push(breakSession);
                    existingSessions.push(breakSession);
                }
            }
        }
    }

    // Calculate session start time
    calculateSessionStartTime(existingSessions, sessionIndex) {
        const startHour = 9; // Start at 9 AM
        
        if (existingSessions.length === 0 || sessionIndex === 0) {
            return `${startHour.toString().padStart(2, '0')}:00`;
        }
        
        const lastSession = existingSessions[existingSessions.length - 1];
        const [hours, minutes] = lastSession.endTime.split(':').map(Number);
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    // Add minutes to time
    addMinutes(time, minutes) {
        const [hours, mins] = time.split(':').map(Number);
        const totalMinutes = hours * 60 + mins + minutes;
        const newHours = Math.floor(totalMinutes / 60);
        const newMinutes = totalMinutes % 60;
        
        return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
    }

    // Get topics for session
    getTopicsForSession(exam, sessionIndex, totalSessions) {
        if (!exam.chapters || exam.chapters.length === 0) {
            return `Study session ${sessionIndex + 1} of ${totalSessions}`;
        }
        
        const chapterIndex = Math.floor((sessionIndex / totalSessions) * exam.chapters.length);
        const chapter = exam.chapters[Math.min(chapterIndex, exam.chapters.length - 1)];
        
        return `Chapter: ${chapter} (${sessionIndex + 1}/${totalSessions})`;
    }

    // Optimize study plan
    optimizeStudyPlan() {
        // Sort sessions by date and time
        this.studyPlan.sort((a, b) => {
            if (a.date !== b.date) {
                return new Date(a.date) - new Date(b.date);
            }
            return a.startTime.localeCompare(b.startTime);
        });
        
        // Remove overlapping sessions
        this.studyPlan = this.studyPlan.filter((session, index) => {
            if (session.type === 'break') return true;
            
            const sameTimeSessions = this.studyPlan.filter((s, i) => 
                i !== index && 
                s.date === session.date && 
                s.type !== 'break' &&
                this.timeOverlap(session.startTime, session.endTime, s.startTime, s.endTime)
            );
            
            return sameTimeSessions.length === 0;
        });
    }

    // Check time overlap
    timeOverlap(start1, end1, start2, end2) {
        const [h1, m1] = start1.split(':').map(Number);
        const [h2, m2] = end1.split(':').map(Number);
        const [h3, m3] = start2.split(':').map(Number);
        const [h4, m4] = end2.split(':').map(Number);
        
        const start1Minutes = h1 * 60 + m1;
        const end1Minutes = h2 * 60 + m2;
        const start2Minutes = h3 * 60 + m3;
        const end2Minutes = h4 * 60 + m4;
        
        return (start1Minutes < end2Minutes) && (end1Minutes > start2Minutes);
    }

    // Render study plan
    renderStudyPlan() {
        const container = document.getElementById('study-plan-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.studyPlan.length === 0) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <i data-lucide="calendar-x" style="width: 48px; height: 48px;" class="text-muted mb-4"></i>
                    <p class="text-muted">No study plan generated yet</p>
                    <button class="btn btn-primary mt-3" onclick="examStudyPlanner.generateStudyPlan()">
                        <i data-lucide="sparkles me-2"></i>Generate Study Plan
                    </button>
                </div>
            `;
            return;
        }

        // Group sessions by date
        const groupedSessions = this.groupSessionsByDate();
        
        Object.entries(groupedSessions).forEach(([date, sessions]) => {
            const dayCard = this.createStudyDayCard(date, sessions);
            container.appendChild(dayCard);
        });

        setTimeout(() => lucide.createIcons(), 100);
    }

    // Group sessions by date
    groupSessionsByDate() {
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
        
        const dateObj = new Date(date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isToday = dateObj.getTime() === today.getTime();
        const isPast = dateObj < today;
        
        const studySessions = sessions.filter(s => s.type === 'study');
        const breakSessions = sessions.filter(s => s.type === 'break');
        const totalStudyHours = studySessions.reduce((sum, s) => sum + (s.duration || 0), 0);
        const totalBreakHours = breakSessions.reduce((sum, s) => sum + (s.duration || 0), 0);
        
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
                        ${totalStudyHours.toFixed(1)}h study, ${totalBreakHours.toFixed(1)}h breaks
                    </div>
                </div>
            </div>
            <div class="study-sessions">
                ${sessions.map(session => this.createSessionHTML(session)).join('')}
            </div>
        `;

        return card;
    }

    // Create session HTML
    createSessionHTML(session) {
        const subject = this.subjects.find(s => s.id === session.subjectId);
        const isBreak = session.type === 'break';
        
        if (isBreak) {
            return `
                <div class="study-session break-session d-flex justify-content-between align-items-center p-3 mb-2 rounded"
                     style="background: rgba(107, 114, 128, 0.1); border-left: 4px solid #6b7280;">
                    <div class="session-info">
                        <div class="d-flex align-items-center mb-1">
                            <i data-lucide="coffee" style="width: 16px; height: 16px; color: #6b7280;" class="me-2"></i>
                            <span class="fw-bold">Break Time</span>
                            <span class="badge bg-light text-dark ms-2">${session.duration}h</span>
                        </div>
                        <div class="text-muted small">
                            <i data-lucide="clock" style="width: 14px; height: 14px;" class="me-1"></i>
                            ${session.startTime} - ${session.endTime}
                        </div>
                    </div>
                    <div class="session-actions">
                        <button class="btn btn-sm btn-outline-danger" onclick="examStudyPlanner.deleteSession('${session.id}')" title="Delete">
                            <i data-lucide="trash" style="width: 14px;"></i>
                        </button>
                    </div>
                </div>
            `;
        }
        
        const exam = this.exams.find(e => e.id === session.examId);
        const priorityColor = this.getPriorityColor(session.priority);
        
        return `
            <div class="study-session d-flex justify-content-between align-items-center p-3 mb-2 rounded"
                 style="background: ${subject ? subject.color + '20' : '#f3f4f6'}; 
                        border-left: 4px solid ${subject ? subject.color : '#6b7280'};">
                <div class="session-info flex-grow-1">
                    <div class="d-flex align-items-center mb-2">
                        <i data-lucide="${subject ? subject.icon : 'book'}" 
                           style="width: 16px; height: 16px; color: ${subject ? subject.color : '#6b7280'};" 
                           class="me-2"></i>
                        <span class="fw-bold">${subject ? subject.name : 'Unknown Subject'}</span>
                        <span class="badge ms-2" style="background: ${priorityColor}; color: white;">
                            ${session.priority}
                        </span>
                        ${exam ? `<span class="badge bg-info ms-1">${exam.name}</span>` : ''}
                    </div>
                    <div class="text-muted small mb-1">
                        <i data-lucide="clock" style="width: 14px; height: 14px;" class="me-1"></i>
                        ${session.startTime} - ${session.endTime}
                        <span class="ms-2">
                            <i data-lucide="hourglass" style="width: 14px; height: 14px;" class="me-1"></i>
                            ${session.duration}h
                        </span>
                    </div>
                    <div class="text-muted small">
                        <i data-lucide="book-open" style="width: 14px; height: 14px;" class="me-1"></i>
                        ${session.topics}
                    </div>
                </div>
                <div class="session-actions">
                    <button class="btn btn-sm btn-outline-success me-1" onclick="examStudyPlanner.completeSession('${session.id}')" title="Complete">
                        <i data-lucide="check" style="width: 14px;"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-primary me-1" onclick="examStudyPlanner.editSession('${session.id}')" title="Edit">
                        <i data-lucide="edit" style="width: 14px;"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="examStudyPlanner.deleteSession('${session.id}')" title="Delete">
                        <i data-lucide="trash" style="width: 14px;"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // Update dashboard
    updateDashboard() {
        // Update exam stats
        const totalExams = this.exams.length;
        const upcomingExams = this.exams.filter(exam => new Date(exam.date + 'T00:00:00') > new Date()).length;
        
        const totalExamsEl = document.getElementById('total-exams');
        const upcomingExamsEl = document.getElementById('upcoming-exams');
        
        if (totalExamsEl) totalExamsEl.textContent = totalExams;
        if (upcomingExamsEl) upcomingExamsEl.textContent = upcomingExams;
        
        // Update study plan stats
        const totalSessions = this.studyPlan.filter(s => s.type === 'study').length;
        const totalHours = this.studyPlan.filter(s => s.type === 'study').reduce((sum, s) => sum + (s.duration || 0), 0);
        
        const totalSessionsEl = document.getElementById('total-sessions');
        const totalHoursEl = document.getElementById('total-hours');
        
        if (totalSessionsEl) totalSessionsEl.textContent = totalSessions;
        if (totalHoursEl) totalHoursEl.textContent = totalHours.toFixed(1);
        
        // Update next exam
        const futureExams = this.exams
            .filter(exam => new Date(exam.date + 'T00:00:00') > new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        const nextExamEl = document.getElementById('next-exam');
        if (nextExamEl && futureExams.length > 0) {
            const nextExam = futureExams[0];
            const examDate = new Date(nextExam.date + 'T00:00:00');
            const daysUntil = Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24));
            
            nextExamEl.innerHTML = `
                <div class="fw-bold">${nextExam.name}</div>
                <div class="small text-muted">${examDate.toLocaleDateString()} - ${daysUntil} days</div>
            `;
        }
    }

    // Show settings modal
    showSettingsModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Study Planner Settings</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="planner-settings-form">
                            <div class="mb-3">
                                <label class="form-label">Study Hours Per Day</label>
                                <input type="number" class="form-control" name="studyHoursPerDay" 
                                       value="${this.settings.studyHoursPerDay}" min="1" max="12" step="0.5">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Study Session Duration (minutes)</label>
                                <input type="number" class="form-control" name="studySessionDuration" 
                                       value="${this.settings.studySessionDuration}" min="15" max="180" step="15">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Break Duration (minutes)</label>
                                <input type="number" class="form-control" name="breakDuration" 
                                       value="${this.settings.breakDuration}" min="5" max="60" step="5">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Exam Preparation Days</label>
                                <input type="number" class="form-control" name="examPreparationDays" 
                                       value="${this.settings.examPreparationDays}" min="1" max="30">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="examStudyPlanner.saveSettings()">Save Settings</button>
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
        const form = document.getElementById('planner-settings-form');
        const formData = new FormData(form);
        
        this.settings.studyHoursPerDay = parseFloat(formData.get('studyHoursPerDay'));
        this.settings.studySessionDuration = parseInt(formData.get('studySessionDuration'));
        this.settings.breakDuration = parseInt(formData.get('breakDuration'));
        this.settings.examPreparationDays = parseInt(formData.get('examPreparationDays'));
        
        await this.saveSettings();
        
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

    // Placeholder methods
    editExam(examId) {
        this.showNotification('Edit functionality coming soon!', 'info');
    }

    deleteExam(examId) {
        if (confirm('Are you sure you want to delete this exam?')) {
            this.exams = this.exams.filter(e => e.id !== examId);
            this.saveExams();
            this.renderExamPlanner();
            this.updateDashboard();
            this.showNotification('Exam deleted successfully!', 'success');
        }
    }

    completeSession(sessionId) {
        this.showNotification('Session marked as completed!', 'success');
    }

    editSession(sessionId) {
        this.showNotification('Edit functionality coming soon!', 'info');
    }

    deleteSession(sessionId) {
        if (confirm('Are you sure you want to delete this session?')) {
            this.studyPlan = this.studyPlan.filter(s => s.id !== sessionId);
            this.saveStudyPlan();
            this.renderStudyPlan();
            this.updateDashboard();
            this.showNotification('Session deleted successfully!', 'success');
        }
    }

    // Delete all study plan
    async deleteAllStudyPlan() {
        if (this.studyPlan.length === 0) {
            this.showNotification('No study plan to delete!', 'info');
            return;
        }

        const confirmDelete = confirm(
            `Are you sure you want to delete the entire study plan?\n\n` +
            `This will remove ${this.studyPlan.length} study sessions and cannot be undone.\n\n` +
            `Click "OK" to delete all sessions, or "Cancel" to keep them.`
        );

        if (confirmDelete) {
            const sessionCount = this.studyPlan.length;
            this.studyPlan = [];
            
            await this.saveStudyPlan();
            this.renderStudyPlan();
            this.updateDashboard();
            
            this.showNotification(
                `Successfully deleted ${sessionCount} study sessions!`, 
                'success'
            );
        }
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

// Initialize exam study planner
const examStudyPlanner = new ExamStudyPlanner();

// Export for use in other modules
window.ExamStudyPlanner = ExamStudyPlanner;
window.examStudyPlanner = examStudyPlanner;

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await examStudyPlanner.init();
        console.log('Exam Study Planner initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Exam Study Planner:', error);
    }
});
