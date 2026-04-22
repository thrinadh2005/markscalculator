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
        
        // Generate colors based on actual marks
        const marksColors = this.getMarksColors();
        const backgroundColors = this.data.marks.map(mark => marksColors[mark]?.bg || 'rgba(107, 114, 128, 0.8)');
        const borderColors = this.data.marks.map(mark => marksColors[mark]?.border || 'rgba(107, 114, 128, 1)');
        
        this.charts.subject = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.data.subjects,
                datasets: [{
                    label: 'Total Marks',
                    data: this.data.marks,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
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

    getGradeColors() {
        return {
            'O': { bg: 'rgba(16, 185, 129, 0.8)', border: 'rgba(16, 185, 129, 1)' },      // Green - Outstanding
            'A+': { bg: 'rgba(59, 130, 246, 0.8)', border: 'rgba(59, 130, 246, 1)' },    // Blue - Excellent
            'A': { bg: 'rgba(79, 70, 229, 0.8)', border: 'rgba(79, 70, 229, 1)' },      // Indigo - Very Good
            'B+': { bg: 'rgba(6, 182, 212, 0.8)', border: 'rgba(6, 182, 212, 1)' },     // Cyan - Good
            'B': { bg: 'rgba(245, 158, 11, 0.8)', border: 'rgba(245, 158, 11, 1)' },     // Amber - Average
            'C+': { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgba(251, 146, 60, 1)' },    // Orange - Satisfactory
            'C': { bg: 'rgba(249, 115, 22, 0.8)', border: 'rgba(249, 115, 22, 1)' },     // Orange-Red - Pass
            'D': { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgba(239, 68, 68, 1)' },        // Red - Poor
            'F': { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' }         // Dark Red - Fail
        };
    }

    getMarksColors() {
        return {
            // 90-100: Excellent (Purple/Violet shades)
            95: { bg: 'rgba(139, 92, 246, 0.8)', border: 'rgba(139, 92, 246, 1)' },      // Violet
            94: { bg: 'rgba(124, 58, 237, 0.8)', border: 'rgba(124, 58, 237, 1)' },      // Purple
            93: { bg: 'rgba(109, 40, 217, 0.8)', border: 'rgba(109, 40, 217, 1)' },      // Purple
            92: { bg: 'rgba(91, 33, 182, 0.8)', border: 'rgba(91, 33, 182, 1)' },        // Purple
            91: { bg: 'rgba(76, 29, 149, 0.8)', border: 'rgba(76, 29, 149, 1)' },        // Purple
            90: { bg: 'rgba(67, 56, 202, 0.8)', border: 'rgba(67, 56, 202, 1)' },        // Indigo
            
            // 80-89: Very Good (Blue shades)
            89: { bg: 'rgba(59, 130, 246, 0.8)', border: 'rgba(59, 130, 246, 1)' },      // Blue
            88: { bg: 'rgba(37, 99, 235, 0.8)', border: 'rgba(37, 99, 235, 1)' },        // Blue
            87: { bg: 'rgba(29, 78, 216, 0.8)', border: 'rgba(29, 78, 216, 1)' },        // Blue
            86: { bg: 'rgba(30, 64, 175, 0.8)', border: 'rgba(30, 64, 175, 1)' },        // Blue
            85: { bg: 'rgba(29, 78, 216, 0.8)', border: 'rgba(29, 78, 216, 1)' },        // Blue
            84: { bg: 'rgba(37, 99, 235, 0.8)', border: 'rgba(37, 99, 235, 1)' },        // Blue
            83: { bg: 'rgba(59, 130, 246, 0.8)', border: 'rgba(59, 130, 246, 1)' },      // Blue
            82: { bg: 'rgba(79, 70, 229, 0.8)', border: 'rgba(79, 70, 229, 1)' },        // Indigo
            81: { bg: 'rgba(67, 56, 202, 0.8)', border: 'rgba(67, 56, 202, 1)' },        // Indigo
            80: { bg: 'rgba(79, 70, 229, 0.8)', border: 'rgba(79, 70, 229, 1)' },        // Indigo
            
            // 70-79: Good (Cyan/Teal shades)
            79: { bg: 'rgba(6, 182, 212, 0.8)', border: 'rgba(6, 182, 212, 1)' },       // Cyan
            78: { bg: 'rgba(8, 145, 178, 0.8)', border: 'rgba(8, 145, 178, 1)' },       // Cyan
            77: { bg: 'rgba(14, 116, 144, 0.8)', border: 'rgba(14, 116, 144, 1)' },       // Teal
            76: { bg: 'rgba(5, 150, 105, 0.8)', border: 'rgba(5, 150, 105, 1)' },       // Teal
            75: { bg: 'rgba(20, 184, 166, 0.8)', border: 'rgba(20, 184, 166, 1)' },      // Teal
            74: { bg: 'rgba(13, 148, 136, 0.8)', border: 'rgba(13, 148, 136, 1)' },       // Teal
            73: { bg: 'rgba(6, 182, 212, 0.8)', border: 'rgba(6, 182, 212, 1)' },       // Cyan
            72: { bg: 'rgba(8, 145, 178, 0.8)', border: 'rgba(8, 145, 178, 1)' },       // Cyan
            71: { bg: 'rgba(14, 116, 144, 0.8)', border: 'rgba(14, 116, 144, 1)' },       // Teal
            70: { bg: 'rgba(5, 150, 105, 0.8)', border: 'rgba(5, 150, 105, 1)' },       // Teal
            
            // 60-69: Average (Green shades)
            69: { bg: 'rgba(34, 197, 94, 0.8)', border: 'rgba(34, 197, 94, 1)' },        // Green
            68: { bg: 'rgba(22, 163, 74, 0.8)', border: 'rgba(22, 163, 74, 1)' },        // Green
            67: { bg: 'rgba(21, 128, 61, 0.8)', border: 'rgba(21, 128, 61, 1)' },        // Green
            66: { bg: 'rgba(16, 185, 129, 0.8)', border: 'rgba(16, 185, 129, 1)' },      // Green
            65: { bg: 'rgba(34, 197, 94, 0.8)', border: 'rgba(34, 197, 94, 1)' },        // Green
            64: { bg: 'rgba(22, 163, 74, 0.8)', border: 'rgba(22, 163, 74, 1)' },        // Green
            63: { bg: 'rgba(21, 128, 61, 0.8)', border: 'rgba(21, 128, 61, 1)' },        // Green
            62: { bg: 'rgba(16, 185, 129, 0.8)', border: 'rgba(16, 185, 129, 1)' },      // Green
            61: { bg: 'rgba(34, 197, 94, 0.8)', border: 'rgba(34, 197, 94, 1)' },        // Green
            60: { bg: 'rgba(22, 163, 74, 0.8)', border: 'rgba(22, 163, 74, 1)' },        // Green
            
            // 50-59: Satisfactory (Yellow/Amber shades)
            59: { bg: 'rgba(250, 204, 21, 0.8)', border: 'rgba(250, 204, 21, 1)' },      // Yellow
            58: { bg: 'rgba(245, 158, 11, 0.8)', border: 'rgba(245, 158, 11, 1)' },      // Amber
            57: { bg: 'rgba(251, 191, 36, 0.8)', border: 'rgba(251, 191, 36, 1)' },      // Amber
            56: { bg: 'rgba(245, 158, 11, 0.8)', border: 'rgba(245, 158, 11, 1)' },      // Amber
            55: { bg: 'rgba(251, 191, 36, 0.8)', border: 'rgba(251, 191, 36, 1)' },      // Amber
            54: { bg: 'rgba(250, 204, 21, 0.8)', border: 'rgba(250, 204, 21, 1)' },      // Yellow
            53: { bg: 'rgba(245, 158, 11, 0.8)', border: 'rgba(245, 158, 11, 1)' },      // Amber
            52: { bg: 'rgba(251, 191, 36, 0.8)', border: 'rgba(251, 191, 36, 1)' },      // Amber
            51: { bg: 'rgba(250, 204, 21, 0.8)', border: 'rgba(250, 204, 21, 1)' },      // Yellow
            50: { bg: 'rgba(245, 158, 11, 0.8)', border: 'rgba(245, 158, 11, 1)' },      // Amber
            
            // 40-49: Pass (Orange shades)
            49: { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgba(251, 146, 60, 1)' },      // Orange
            48: { bg: 'rgba(249, 115, 22, 0.8)', border: 'rgba(249, 115, 22, 1)' },      // Orange-Red
            47: { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgba(251, 146, 60, 1)' },      // Orange
            46: { bg: 'rgba(249, 115, 22, 0.8)', border: 'rgba(249, 115, 22, 1)' },      // Orange-Red
            45: { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgba(251, 146, 60, 1)' },      // Orange
            44: { bg: 'rgba(249, 115, 22, 0.8)', border: 'rgba(249, 115, 22, 1)' },      // Orange-Red
            43: { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgba(251, 146, 60, 1)' },      // Orange
            42: { bg: 'rgba(249, 115, 22, 0.8)', border: 'rgba(249, 115, 22, 1)' },      // Orange-Red
            41: { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgba(251, 146, 60, 1)' },      // Orange
            40: { bg: 'rgba(249, 115, 22, 0.8)', border: 'rgba(249, 115, 22, 1)' },      // Orange-Red
            
            // 30-39: Poor (Red shades)
            39: { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgba(239, 68, 68, 1)' },        // Red
            38: { bg: 'rgba(220, 38, 38, 0.8)', border: 'rgba(220, 38, 38, 1)' },        // Red
            37: { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgba(239, 68, 68, 1)' },        // Red
            36: { bg: 'rgba(220, 38, 38, 0.8)', border: 'rgba(220, 38, 38, 1)' },        // Red
            35: { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgba(239, 68, 68, 1)' },        // Red
            34: { bg: 'rgba(220, 38, 38, 0.8)', border: 'rgba(220, 38, 38, 1)' },        // Red
            33: { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgba(239, 68, 68, 1)' },        // Red
            32: { bg: 'rgba(220, 38, 38, 0.8)', border: 'rgba(220, 38, 38, 1)' },        // Red
            31: { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgba(239, 68, 68, 1)' },        // Red
            30: { bg: 'rgba(220, 38, 38, 0.8)', border: 'rgba(220, 38, 38, 1)' },        // Red
            
            // 0-29: Fail (Dark Red shades)
            29: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            28: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            27: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            26: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            25: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            24: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            23: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            22: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            21: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            20: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            19: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            18: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            17: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            16: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            15: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            14: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            13: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            12: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            11: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            10: { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            9:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            8:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            7:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            6:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            5:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            4:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            3:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            2:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            1:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' },        // Dark Red
            0:  { bg: 'rgba(127, 29, 29, 0.8)', border: 'rgba(127, 29, 29, 1)' }         // Dark Red
        };
    }

    createGradeChart() {
        const gradeCounts = {};
        this.data.grades.forEach(grade => {
            gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
        });

        const gradeColors = this.getGradeColors();
        const backgroundColors = Object.keys(gradeCounts).map(grade => gradeColors[grade]?.bg || 'rgba(107, 114, 128, 0.8)');
        const borderColors = Object.keys(gradeCounts).map(grade => gradeColors[grade]?.border || 'rgba(107, 114, 128, 1)');

        const ctx = document.getElementById('gradeChart').getContext('2d');
        this.charts.grade = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(gradeCounts),
                datasets: [{
                    data: Object.values(gradeCounts),
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
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
            
            // Update colors based on actual marks
            const marksColors = this.getMarksColors();
            const backgroundColors = this.data.marks.map(mark => marksColors[mark]?.bg || 'rgba(107, 114, 128, 0.8)');
            const borderColors = this.data.marks.map(mark => marksColors[mark]?.border || 'rgba(107, 114, 128, 1)');
            
            this.charts.subject.data.datasets[0].backgroundColor = backgroundColors;
            this.charts.subject.data.datasets[0].borderColor = borderColors;
            this.charts.subject.update();
        }
        
        // Update Grade Chart (Doughnut)
        if (this.charts.grade) {
            const gradeCounts = {};
            this.data.grades.forEach(grade => {
                gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
            });
            
            const gradeColors = this.getGradeColors();
            const backgroundColors = Object.keys(gradeCounts).map(grade => gradeColors[grade]?.bg || 'rgba(107, 114, 128, 0.8)');
            const borderColors = Object.keys(gradeCounts).map(grade => gradeColors[grade]?.border || 'rgba(107, 114, 128, 1)');
            
            this.charts.grade.data.labels = Object.keys(gradeCounts);
            this.charts.grade.data.datasets[0].data = Object.values(gradeCounts);
            this.charts.grade.data.datasets[0].backgroundColor = backgroundColors;
            this.charts.grade.data.datasets[0].borderColor = borderColors;
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
