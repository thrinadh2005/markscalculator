// Analytics Dashboard for Marks Visualization
class MarksAnalytics {
    constructor() {
        this.charts = {};
        this.data = this.initializeData();
        this.init();
    }

    initializeData() {
        return this.fetchRealMarksData();
    }

    fetchRealMarksData() {
        const data = {
            subjects: [],
            marks: [],
            internalMarks: [],
            externalMarks: [],
            grades: [],
            semesters: [],
            sgpaData: []
        };

        try {
            // Fetch SGPA data from CGPA inputs
            const sgpaInputs = document.querySelectorAll('.sem-sgpa-input');
            if (sgpaInputs.length > 0) {
                sgpaInputs.forEach((input, index) => {
                    const value = parseFloat(input.value);
                    if (!isNaN(value) && value > 0) {
                        data.sgpaData.push(value);
                        data.semesters.push(`Sem ${index + 1}`);
                    }
                });
            }

            // Fetch subject and grade data from SGPA calculator
            const subjectRows = document.querySelectorAll('#sgpa-subjects .row');
            if (subjectRows.length > 0) {
                subjectRows.forEach(row => {
                    const subjectName = row.querySelector('.subject-name');
                    const gradeSelect = row.querySelector('select');
                    const credits = row.querySelector('[data-credits]');
                    
                    if (subjectName && gradeSelect && credits) {
                        const subject = subjectName.textContent.trim();
                        const grade = gradeSelect.value;
                        const credit = parseInt(credits.getAttribute('data-credits'));
                        
                        if (subject && grade) {
                            data.subjects.push(subject);
                            data.grades.push(grade);
                            
                            // Calculate marks based on grade
                            const gradePoints = {
                                'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6,
                                'C+': 5, 'C': 4, 'D': 3, 'F': 0
                            };
                            
                            const point = gradePoints[grade] || 0;
                            const totalMarks = Math.round((point / 10) * 100);
                            data.marks.push(totalMarks);
                            
                            // Split into internal and external (50-50 split)
                            const internal = Math.round(totalMarks * 0.5);
                            const external = totalMarks - internal;
                            data.internalMarks.push(internal);
                            data.externalMarks.push(external);
                        }
                    }
                });
            }

            // Fetch internal marks data if available
            const internalData = this.getInternalMarksData();
            if (internalData && internalData.length > 0) {
                data.internalData = internalData;
            }

            // If no real data found, provide sample data for demonstration
            if (data.subjects.length === 0) {
                return this.getSampleData();
            }

        } catch (error) {
            console.error('Error fetching real marks data:', error);
            return this.getSampleData();
        }

        return data;
    }

    getInternalMarksData() {
        try {
            // Try to get internal marks from localStorage or form inputs
            const internalData = [];
            
            // Check if internal marks form is filled
            const internalInputs = document.querySelectorAll('#internal-form input[type="number"]');
            if (internalInputs.length > 0) {
                internalInputs.forEach(input => {
                    const value = parseFloat(input.value);
                    if (!isNaN(value) && value > 0) {
                        internalData.push(value);
                    }
                });
            }
            
            return internalData;
        } catch (error) {
            console.error('Error fetching internal marks:', error);
            return [];
        }
    }

    getSampleData() {
        // Fallback sample data when no real data is available
        return {
            subjects: ['Mathematics', 'Physics', 'Chemistry', 'Programming', 'English', 'Electronics'],
            marks: [85, 78, 92, 88, 76, 81],
            internalMarks: [45, 38, 48, 42, 40, 44],
            externalMarks: [40, 40, 44, 46, 36, 37],
            grades: ['O', 'A+', 'O', 'A+', 'A', 'A+'],
            semesters: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
            sgpaData: [8.5, 8.2, 8.8, 8.6]
        };
    }

    init() {
        this.setupCharts();
        this.updateStatistics();
    }

    setupCharts() {
        this.createPerformanceChart();
        this.createSubjectChart();
        this.createGradeChart();
        this.createTrendChart();
    }

    createPerformanceChart() {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        this.charts.performance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: this.data.subjects,
                datasets: [{
                    label: 'Internal Marks',
                    data: this.data.internalMarks,
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(79, 70, 229, 1)'
                }, {
                    label: 'External Marks',
                    data: this.data.externalMarks,
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    borderColor: 'rgba(6, 182, 212, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(6, 182, 212, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(6, 182, 212, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 50,
                        ticks: {
                            stepSize: 10
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.r + '/50';
                            }
                        }
                    }
                }
            }
        });
    }

    createSubjectChart() {
        const ctx = document.getElementById('subjectChart').getContext('2d');
        this.charts.subject = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.data.subjects,
                datasets: [{
                    label: 'Total Marks',
                    data: this.data.marks,
                    backgroundColor: [
                        'rgba(79, 70, 229, 0.8)',
                        'rgba(6, 182, 212, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgba(79, 70, 229, 1)',
                        'rgba(6, 182, 212, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(239, 68, 68, 1)',
                        'rgba(139, 92, 246, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Marks: ' + context.parsed.y + '/100';
                            }
                        }
                    }
                }
            }
        });
    }

    createGradeChart() {
        const gradeCounts = {};
        this.data.grades.forEach(grade => {
            gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
        });

        const ctx = document.getElementById('gradeChart').getContext('2d');
        this.charts.grade = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(gradeCounts),
                datasets: [{
                    data: Object.values(gradeCounts),
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(79, 70, 229, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(107, 114, 128, 0.8)'
                    ],
                    borderColor: [
                        'rgba(16, 185, 129, 1)',
                        'rgba(79, 70, 229, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(239, 68, 68, 1)',
                        'rgba(107, 114, 128, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return context.label + ': ' + context.parsed + ' (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    createTrendChart() {
        const ctx = document.getElementById('trendChart').getContext('2d');
        this.charts.trend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.data.semesters,
                datasets: [{
                    label: 'SGPA Trend',
                    data: this.data.sgpaData,
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 6,
                        max: 10,
                        ticks: {
                            stepSize: 0.5
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'SGPA: ' + context.parsed.y.toFixed(2);
                            }
                        }
                    }
                }
            }
        });
    }

    updateStatistics() {
        // Calculate statistics
        const avgMarks = Math.round(this.data.marks.reduce((a, b) => a + b, 0) / this.data.marks.length);
        const highestMarks = Math.max(...this.data.marks);
        const totalSubjects = this.data.subjects.length;
        const currentSGPA = this.data.sgpaData[this.data.sgpaData.length - 1];

        // Update DOM elements
        document.getElementById('avgMarks').textContent = avgMarks;
        document.getElementById('highestMarks').textContent = highestMarks;
        document.getElementById('totalSubjects').textContent = totalSubjects;
        document.getElementById('sgpaValue').textContent = currentSGPA.toFixed(1);
    }

    refresh() {
        // Fetch fresh data from the application
        const newData = this.fetchRealMarksData();
        
        // Update all data
        this.data = newData;
        
        // Update all charts with fresh data
        this.updateAllCharts();
        
        // Update statistics
        this.updateStatistics();
        
        // Show notification
        this.showNotification('Analytics refreshed with latest marks data!', 'success');
    }

    updateAllCharts() {
        // Update Performance Chart (Radar)
        if (this.charts.performance) {
            this.charts.performance.data.labels = this.data.subjects;
            this.charts.performance.data.datasets[0].data = this.data.internalMarks;
            this.charts.performance.data.datasets[1].data = this.data.externalMarks;
            this.charts.performance.update();
        }
        
        // Update Subject Chart (Bar)
        if (this.charts.subject) {
            this.charts.subject.data.labels = this.data.subjects;
            this.charts.subject.data.datasets[0].data = this.data.marks;
            this.charts.subject.update();
        }
        
        // Update Grade Chart (Doughnut)
        if (this.charts.grade) {
            const gradeCounts = {};
            this.data.grades.forEach(grade => {
                gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
            });
            
            this.charts.grade.data.labels = Object.keys(gradeCounts);
            this.charts.grade.data.datasets[0].data = Object.values(gradeCounts);
            this.charts.grade.update();
        }
        
        // Update Trend Chart (Line)
        if (this.charts.trend) {
            this.charts.trend.data.labels = this.data.semesters;
            this.charts.trend.data.datasets[0].data = this.data.sgpaData;
            this.charts.trend.update();
        }
    }

    // Method to update charts when new marks are entered
    updateChartsWithNewData() {
        this.refresh();
    }

    // Method to get current statistics
    getCurrentStatistics() {
        if (this.data.marks.length === 0) {
            return {
                avgMarks: 0,
                highestMarks: 0,
                totalSubjects: 0,
                currentSGPA: 0.0
            };
        }
        
        const avgMarks = Math.round(this.data.marks.reduce((a, b) => a + b, 0) / this.data.marks.length);
        const highestMarks = Math.max(...this.data.marks);
        const totalSubjects = this.data.subjects.length;
        const currentSGPA = this.data.sgpaData.length > 0 ? this.data.sgpaData[this.data.sgpaData.length - 1] : 0.0;
        
        return {
            avgMarks,
            highestMarks,
            totalSubjects,
            currentSGPA
        };
    }

    showNotification(message, type = 'info') {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
        notification.style.zIndex = '9999';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
}

// Initialize analytics when the page loads
let marksAnalytics;

function initializeAnalytics() {
    marksAnalytics = new MarksAnalytics();
}

function refreshAnalytics() {
    if (marksAnalytics) {
        marksAnalytics.refresh();
    }
}

// Initialize when analytics tab is shown
function showAnalyticsTab() {
    if (!marksAnalytics) {
        initializeAnalytics();
    }
    // Re-render charts to ensure proper sizing
    setTimeout(() => {
        Object.values(marksAnalytics.charts).forEach(chart => {
            chart.resize();
        });
    }, 100);
}
