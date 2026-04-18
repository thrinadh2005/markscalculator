const professionalElectives = {
    "AI&ML": {
        "5": {"code": "23CSC11", "name": "Artificial Neural Networks", "credits": 3.0, "type": "theory"},
        "6": {"code": "23CSC12", "name": "Deep Learning", "credits": 4.0, "type": "integrated"},
        "7": {"code": "23CSC13", "name": "Natural Language Processing", "credits": 3.0, "type": "theory"}
    },
    "FullStack": {
        "5": {"code": "23CSC21", "name": "Backend Programming Languages", "credits": 3.0, "type": "theory"},
        "6": {"code": "23CSC22", "name": "Web Application Frameworks", "credits": 4.0, "type": "integrated"},
        "7": {"code": "23CSC23", "name": "Web Application Databases", "credits": 3.0, "type": "theory"}
    },
    "CyberSecurity": {
        "5": {"code": "23ITC31", "name": "Fundamentals of Security", "credits": 3.0, "type": "theory"},
        "6": {"code": "23ITC32", "name": "Cybernet Security", "credits": 4.0, "type": "integrated"},
        "7": {"code": "23ITC33", "name": "Cloud Security", "credits": 3.0, "type": "theory"}
    },
    "CloudComputing": {
        "5": {"code": "23MLC31", "name": "Fundamentals of Cloud Computing", "credits": 3.0, "type": "theory"},
        "6": {"code": "23MLC32", "name": "Cloud Services using AWS", "credits": 4.0, "type": "integrated"},
        "7": {"code": "23MLC33", "name": "Cloud Security Essentials", "credits": 3.0, "type": "theory"}
    }
};

const commonSem1 = [
    {"code": "23PYX01/23CYX01", "name": "Engineering Physics/Chemistry", "credits": 3.0, "type": "theory"},
    {"code": "23MAX01/23MAX02", "name": "Linear Algebra & Calculus / Differential Equations", "credits": 3.0, "type": "theory"},
    {"code": "23BEX01/23BEX02", "name": "Basic Electrical & Electronics / Civil & Mechanical Engineering", "credits": 3.0, "type": "theory"},
    {"code": "23BEX03", "name": "Introduction to Programming", "credits": 3.0, "type": "theory"},
    {"code": "23BEX04/23HSX01", "name": "Engineering Graphics/Communicative English", "credits": 3.0, "type": "theory"},
    {"code": "23PYX02/23CYX03", "name": "Engineering Physics Lab/Chemistry Lab", "credits": 1.0, "type": "lab"},
    {"code": "23BEX05/23BEX06", "name": "Electrical & Electronics / Engineering Workshop", "credits": 1.5, "type": "lab"},
    {"code": "23BEX07", "name": "Computer Programming Lab", "credits": 1.5, "type": "lab"},
    {"code": "23HSX11", "name": "ECA (Yoga / Sports)", "credits": 0.5, "type": "theory"},
    {"code": "23HSX12", "name": "CCA (NSS/NCC/Community Service)", "credits": 0.5, "type": "theory"}
];

const commonSem2 = [
    {"code": "23HSX01/23BEX04", "name": "Communicative English / Engineering Graphics", "credits": 2.0, "type": "theory"},
    {"code": "23MAX02/23MAX01", "name": "Differential Equations / Linear Algebra & Calculus", "credits": 3.0, "type": "theory"},
    {"code": "23CYX01/23PYX01", "name": "Chemistry / Engineering Physics", "credits": 3.0, "type": "theory"},
    {"code": "23BEX02/23BEX01", "name": "Civil & Mechanical / Electrical & Electronics Engineering", "credits": 3.0, "type": "theory"},
    {"code": "23CS201", "name": "Data Structures", "credits": 3.0, "type": "theory"},
    {"code": "23CYX03/23PYX02", "name": "Chemistry Lab / Engineering Physics Lab", "credits": 1.0, "type": "lab"},
    {"code": "23BEX06/23BEX05", "name": "Engineering Workshop / Electrical & Electronics Workshop", "credits": 1.5, "type": "lab"},
    {"code": "23BEX08", "name": "IT Workshop", "credits": 1.0, "type": "lab"},
    {"code": "23HSX02", "name": "Communicative English Lab", "credits": 1.0, "type": "lab"},
    {"code": "23CS202", "name": "Data Structures Lab", "credits": 1.5, "type": "lab"}
];

const syllabus = {
    "CSE": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"code": "23CS301", "name": "Problem solving using Python", "credits": 4.0, "type": "integrated"},
            {"code": "23HSX10", "name": "Engineering Economics and Project Management", "credits": 3.0, "type": "theory"},
            {"code": "23CS303", "name": "Design and Analysis of Algorithms", "credits": 3.0, "type": "theory"},
            {"code": "23CS304", "name": "Digital Logic Design", "credits": 4.0, "type": "integrated"},
            {"code": "23CS305", "name": "Discrete Mathematical Structures", "credits": 3.0, "type": "theory"},
            {"code": "23CS306", "name": "Object Oriented Programming with JAVA", "credits": 3.0, "type": "theory"},
            {"code": "23CS307", "name": "Design and Analysis of Algorithms Lab", "credits": 1.5, "type": "lab"},
            {"code": "23CS308", "name": "JAVA Lab", "credits": 1.5, "type": "lab"}
        ],
        "4": [
            {"code": "23IT304", "name": "Database Management Systems", "credits": 3.0, "type": "theory"},
            {"code": "23IT403", "name": "Operating Systems", "credits": 3.0, "type": "theory"},
            {"code": "23CS403", "name": "Computer Organization and Architecture", "credits": 3.0, "type": "theory"},
            {"code": "23MA404", "name": "Probability and Statistics using Python", "credits": 4.0, "type": "integrated"},
            {"code": "23CS405", "name": "Web Coding and Development", "credits": 3.0, "type": "theory"},
            {"code": "23IT308", "name": "Database Management Systems Lab", "credits": 1.5, "type": "lab"},
            {"code": "23CS407", "name": "Web Coding and Development Lab", "credits": 1.5, "type": "lab"},
            {"code": "23ESX01", "name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"code": "23EC502", "name": "Microprocessors and Microcontrollers", "credits": 4.0, "type": "integrated"},
            {"code": "23CS502", "name": "Artificial Intelligence and Machine Learning", "credits": 3.0, "type": "theory"},
            {"code": "23CS503", "name": "Computer Networks", "credits": 4.0, "type": "integrated"},
            {"code": "23CS504", "name": "Theory of Computation", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective I (Professional Elective)"},
            {"code": "OE-1", "name": "Elective II (Open Elective I)", "credits": 3.0, "type": "theory"},
            {"code": "23CS507", "name": "AI & ML Lab", "credits": 1.5, "type": "lab"},
            {"code": "23TPX01", "name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"code": "23SIX01", "name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"code": "23CS601", "name": "Compiler Design", "credits": 3.0, "type": "theory"},
            {"code": "23CS602", "name": "Cryptography and Network Security", "credits": 3.0, "type": "theory"},
            {"code": "23CS603", "name": "Software Engineering", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "credits": 4.0, "name": "Elective III (Professional Elective)"},
            {"code": "OE-2", "name": "Elective IV (Open Elective II)", "credits": 3.0, "type": "theory"},
            {"code": "23CS606", "name": "Case Tools Lab", "credits": 1.5, "type": "lab"},
            {"code": "23MPX01", "name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"code": "23ESX02", "name": "Employability Skills II", "credits": 2.0, "type": "theory"}
        ],
        "7": [
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective V (Professional Elective)"},
            {"code": "PE-6", "name": "Elective VI (Professional Elective)", "credits": 3.0, "type": "theory"},
            {"code": "OE-3", "name": "Elective VII (Open Elective III)", "credits": 3.0, "type": "theory"},
            {"code": "23SIX02", "name": "Summer Internship II", "credits": 1.0, "type": "lab"},
            {"code": "23PWX01", "name": "Project", "credits": 8.0, "type": "lab"}
        ],
        "8": [
            {"code": "PE-8", "name": "Elective VIII (Professional Elective)", "credits": 3.0, "type": "theory"},
            {"code": "OE-4", "name": "Elective IX (Open Elective IV)", "credits": 2.0, "type": "theory"},
            {"code": "23FIX01", "name": "Full Semester Internship (FSI)", "credits": 8.0, "type": "lab"}
        ]
    },
    "ECE": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"code": "23MA301", "name": "Complex Variables", "credits": 3.0, "type": "theory"},
            {"code": "23EC301", "name": "Electronic Devices & Circuits", "credits": 3.0, "type": "theory"},
            {"code": "23EC302", "name": "Python Programming", "credits": 4.0, "type": "integrated"},
            {"code": "23EC303", "name": "Logic Circuit Design", "credits": 3.0, "type": "theory"},
            {"code": "23EC304", "name": "Random Variables & Stochastic Processes", "credits": 3.0, "type": "theory"},
            {"code": "23EC305", "name": "Signals & Systems", "credits": 4.0, "type": "integrated"},
            {"code": "23EC306", "name": "Electronic Devices & Circuits Lab", "credits": 1.5, "type": "lab"},
            {"code": "23EC307", "name": "Logic Circuit Design Lab", "credits": 1.5, "type": "lab"},
            {"code": "23ESX01", "name": "Employability Skills I", "credits": 0.0, "type": "theory"}
        ],
        "4": [
            {"code": "23CSE01", "name": "Object Oriented Programming", "credits": 3.0, "type": "theory"},
            {"code": "23EC401", "name": "Analog & Digital Communications", "credits": 3.0, "type": "theory"},
            {"code": "23EC402", "name": "Analog Electronic Circuits", "credits": 4.0, "type": "integrated"},
            {"code": "23EC403", "name": "Electromagnetic Waves & Transmission Lines", "credits": 3.0, "type": "theory"},
            {"code": "23EC404", "name": "Linear Control Systems", "credits": 3.0, "type": "theory"},
            {"code": "23CSE02", "name": "Object Oriented Programming Lab", "credits": 1.5, "type": "lab"},
            {"code": "23EC405", "name": "Analog & Digital Communications Lab", "credits": 1.5, "type": "lab"},
            {"code": "23ESX01", "name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"code": "23EC501", "name": "Linear & Digital IC Applications", "credits": 3.0, "type": "theory"},
            {"code": "23EC502", "name": "Microprocessors & Microcontrollers", "credits": 4.0, "type": "integrated"},
            {"code": "23EC503", "name": "VLSI Design", "credits": 4.0, "type": "integrated"},
            {"code": "23EC504", "name": "Antennas & Microwave Engineering", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "name": "Elective I (Professional Elective)", "credits": 3.0},
            {"code": "OE-1", "name": "Elective II (Open Elective I)", "credits": 3.0, "type": "theory"},
            {"code": "23EC505", "name": "Linear IC Applications Lab", "credits": 1.5, "type": "lab"},
            {"code": "23TPX01", "name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"code": "23ESX02", "name": "Employability Skills II", "credits": 0.0, "type": "theory"},
            {"code": "23SIX01", "name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"code": "23HSX10", "name": "Engineering Economics & Project Management", "credits": 3.0, "type": "theory"},
            {"code": "23EC601", "name": "Cellular & Mobile Communications", "credits": 3.0, "type": "theory"},
            {"code": "23EC602", "name": "Digital Signal Processing", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "name": "Elective III (Professional Elective)", "credits": 4.0},
            {"code": "OE-2", "name": "Elective IV (Open Elective II)", "credits": 3.0, "type": "theory"},
            {"code": "23EC603", "name": "DSP Lab", "credits": 1.5, "type": "lab"},
            {"code": "23MPX01", "name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"code": "23ESX02", "name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"code": "23ATX01", "name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"code": "23ATX02", "name": "Human Values & Professional Ethics", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"code": "23PWX01", "name": "Project Work", "credits": 8.0, "type": "lab"},
            {"isProfessionalElective": true, "name": "Elective V (Professional Elective)", "credits": 3.0},
            {"isProfessionalElective": true, "name": "Elective VI (Professional Elective)", "credits": 3.0},
            {"code": "OE-3", "name": "Elective VII (Open Elective III)", "credits": 3.0, "type": "theory"},
            {"code": "23SIX02", "name": "Summer Internship II", "credits": 1.0, "type": "lab"}
        ],
        "8": [
            {"code": "23FIX01", "name": "Full Semester Internship", "credits": 8.0, "type": "lab"},
            {"isProfessionalElective": true, "name": "Elective VIII (Professional Elective)", "credits": 3.0},
            {"code": "OE-4", "name": "Elective IX (Open Elective IV)", "credits": 2.0, "type": "theory"}
        ]
    },
    "IT": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"code": "23IT301", "name": "Python Programming and Applications", "credits": 3.0, "type": "theory"},
            {"code": "23CS304", "name": "Digital Logic Design", "credits": 4.0, "type": "integrated"},
            {"code": "23CS305", "name": "Discrete Mathematical Structures", "credits": 3.0, "type": "theory"},
            {"code": "23IT304", "name": "Database Management Systems", "credits": 3.0, "type": "theory"},
            {"code": "23IT305", "name": "Data Communication Systems", "credits": 3.0, "type": "theory"},
            {"code": "23IT306", "name": "Object Oriented Programming through Java", "credits": 4.0, "type": "integrated"},
            {"code": "23IT307", "name": "Python Programming Lab", "credits": 1.5, "type": "lab"},
            {"code": "23IT308", "name": "DBMS Lab", "credits": 1.5, "type": "lab"},
            {"code": "23ESX01", "name": "Employability Skills I", "credits": 0.0, "type": "theory"}
        ],
        "4": [
            {"code": "23MA405", "name": "Probability and Statistics", "credits": 3.0, "type": "theory"},
            {"code": "23CS403", "name": "Computer Organization and Architecture", "credits": 3.0, "type": "theory"},
            {"code": "23IT403", "name": "Operating Systems", "credits": 3.0, "type": "theory"},
            {"code": "23CS303", "name": "Design and Analysis of Algorithms", "credits": 3.0, "type": "theory"},
            {"code": "23IT405", "name": "Web Technologies", "credits": 4.0, "type": "integrated"},
            {"code": "23CS307", "name": "Design and Analysis of Algorithms Lab", "credits": 1.5, "type": "lab"},
            {"code": "23IT407", "name": "Operating Systems Lab", "credits": 1.5, "type": "lab"},
            {"code": "23ESX01", "name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"code": "23IT501", "name": "Computer Networking", "credits": 4.0, "type": "integrated"},
            {"code": "23IT502", "name": "Artificial Intelligence", "credits": 3.0, "type": "theory"},
            {"code": "23IT503", "name": "Cloud Computing", "credits": 3.0, "type": "theory"},
            {"code": "23IT504", "name": "Software Engineering Principles", "credits": 4.0, "type": "integrated"},
            {"isProfessionalElective": true, "name": "Elective I (Professional Elective)", "credits": 3.0},
            {"code": "OE-1", "name": "Elective II (Open Elective I)", "credits": 3.0, "type": "theory"},
            {"code": "23IT507", "name": "Cloud Computing Lab", "credits": 1.5, "type": "lab"},
            {"code": "23TPX01", "name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"code": "23ESX02", "name": "Employability Skills II", "credits": 0.0, "type": "theory"},
            {"code": "23SIX01", "name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"code": "23HSX10", "name": "Engineering Economics & Project Management", "credits": 3.0, "type": "theory"},
            {"code": "23IT602", "name": "Automata & Compiler Design", "credits": 3.0, "type": "theory"},
            {"code": "23IT603", "name": "Machine Learning", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "name": "Elective III (Professional Elective)", "credits": 4.0},
            {"code": "OE-2", "name": "Elective IV (Open Elective II)", "credits": 3.0, "type": "theory"},
            {"code": "23IT606", "name": "Machine Learning Lab using Python", "credits": 1.5, "type": "lab"},
            {"code": "23MPX01", "name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"code": "23ESX02", "name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"code": "23ATX01", "name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"code": "23ATX02", "name": "Professional Ethics & Human Values", "credits": 0.0, "type": "theory"},
            {"code": "Audit", "name": "Audit Course", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"isProfessionalElective": true, "name": "Elective V (Professional Elective)", "credits": 3.0},
            {"isProfessionalElective": true, "name": "Elective VI (Professional Elective)", "credits": 3.0},
            {"code": "OE-3", "name": "Elective VII (Open Elective III)", "credits": 3.0, "type": "theory"},
            {"code": "23PWX01", "name": "Project", "credits": 8.0, "type": "lab"},
            {"code": "23SIX02", "name": "Summer Internship II", "credits": 1.0, "type": "lab"}
        ],
        "8": [
            {"isProfessionalElective": true, "name": "Elective VIII (Professional Elective)", "credits": 3.0},
            {"code": "OE-4", "name": "Elective IX (Open Elective IV)", "credits": 2.0, "type": "theory"},
            {"code": "23FIX01", "name": "Full Semester Internship", "credits": 8.0, "type": "lab"}
        ]
    }
};

const gradePoints = {
    "S": 10, "A": 9, "B": 8, "C": 7, "D": 6, "E": 5, "F": 0
};

function init() {
    lucide.createIcons();
    checkUserSession();
    loadSemesterSubjects();
    generateCgpaInputs();
    setupInputValidation();
    updateVisitorCount();
}

function checkAdmin() {
    const pass = prompt("Enter Admin Password to view Visitor List:");
    if (pass === "thrinadh2005") {
        showVisitorList();
    } else if (pass !== null) {
        alert("Incorrect Password!");
    }
}

async function showVisitorList() {
    const overlay = document.getElementById('visitor-list-overlay');
    const content = document.getElementById('visitor-list-content');
    overlay.classList.remove('hidden');
    overlay.style.opacity = '1';
    
    // 1. Show local history IMMEDIATELY
    const localLog = JSON.parse(localStorage.getItem('visitor_history') || '[]');
    renderVisitorList(localLog, true);

    // 2. Try to fetch global log with a strict timeout
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second timeout

        const response = await fetch('https://gmrit-calc-default-rtdb.firebaseio.com/visitors.json', {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        const data = await response.json();

        if (data) {
            // Convert Firebase object to array and sort by date desc
            const globalLog = Object.values(data).reverse();
            renderVisitorList(globalLog, false);
        }
    } catch (e) {
        console.log("Global log fetch timed out or failed. Showing local history.");
        if (localLog.length === 0) {
            content.innerHTML = '<p class="text-center text-muted py-5">No visitors found yet.</p>';
        }
    }
}

function renderVisitorList(logs, isLocal) {
    const content = document.getElementById('visitor-list-content');
    if (logs.length === 0) {
        if (!isLocal) content.innerHTML = '<p class="text-center text-muted py-5">No global visitors found yet.</p>';
        return;
    }

    let html = `
        <div class="small fw-bold text-uppercase mb-3 opacity-50" style="letter-spacing: 1px;">
            ${isLocal ? 'Recent on this device' : 'Global Log'}
        </div>
        <div class="list-group list-group-flush">
    `;
    
    logs.forEach(item => {
        html += `
            <div class="list-group-item bg-transparent border-primary border-opacity-10 py-3 px-0">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="fw-bold text-white">${item.name}</div>
                    <div class="text-muted small" style="font-size: 0.65rem;">${item.date}</div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    content.innerHTML = html;
}

function closeVisitorList() {
    const overlay = document.getElementById('visitor-list-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 500);
}

function checkUserSession() {
    const userName = localStorage.getItem('calculator_user_name');
    if (userName) {
        document.getElementById('login-overlay').classList.add('hidden');
    }
}

async function handleLogin() {
    const nameInput = document.getElementById('user-name-input');
    const name = nameInput.value.trim();
    
    if (!name) {
        nameInput.classList.add('is-invalid');
        return;
    }

    // Store locally for current session
    localStorage.setItem('calculator_user_name', name);
    
    // Maintain a local history of visitors seen on this device 
    // (This ensures the log is never empty for the user)
    let localLog = JSON.parse(localStorage.getItem('visitor_history') || '[]');
    localLog.unshift({ name: name, date: new Date().toLocaleString() });
    localStorage.setItem('visitor_history', JSON.stringify(localLog.slice(0, 50)));

    // Send name to Firebase (Truly Global Public Log)
    try {
        await fetch('https://gmrit-calc-default-rtdb.firebaseio.com/visitors.json', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                date: new Date().toLocaleString()
            })
        });
    } catch (e) {
        console.log("Global sync failed, visitor saved to local history.");
    }

    // Track globally using CounterAPI
    try {
        await fetch(`https://api.counterapi.dev/v1/thrinadh2005/markscalculator_users/up`);
    } catch (e) {
        console.log("Global tracking failed.");
    }

    // Hide overlay with animation
    const overlay = document.getElementById('login-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 500);
}

async function updateVisitorCount() {
    const counterEl = document.getElementById('visitor-count');
    try {
        // Using CounterAPI.dev for a real global visitor count
        // Namespace: thrinadh2005, Key: markscalculator
        const response = await fetch('https://api.counterapi.dev/v1/thrinadh2005/markscalculator/up');
        const data = await response.json();
        
        if (data && data.count) {
            // Display the global count
            setTimeout(() => {
                counterEl.textContent = data.count.toLocaleString();
            }, 500);
        } else {
            throw new Error('Invalid API response');
        }
    } catch (error) {
        // Fallback to localStorage if the global API fails
        let count = localStorage.getItem('site_visitors') || 1024;
        count = parseInt(count) + 1;
        localStorage.setItem('site_visitors', count);
        counterEl.textContent = count.toLocaleString() + "+";
    }
}

function setupInputValidation() {
    // Select all number inputs that have a max attribute
    const inputs = document.querySelectorAll('input[type="number"][max]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const max = parseFloat(this.getAttribute('max'));
            const min = parseFloat(this.getAttribute('min')) || 0;
            let value = parseFloat(this.value);

            if (isNaN(value)) return;

            if (value > max) {
                this.value = max;
            } else if (value < min) {
                this.value = min;
            }
        });
    });
}

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        icon.setAttribute('data-lucide', 'moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons();
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.remove('hidden');
    
    // Find the button and set it active
    const btns = document.querySelectorAll('.nav-link');
    btns.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${tabName}'`)) {
            btn.classList.add('active');
        }
    });
}

function toggleInternalFields() {
    const type = document.getElementById('course-type').value;
    const theoryFields = document.getElementById('theory-fields');
    const labFields = document.getElementById('lab-fields');
    const integratedFields = document.getElementById('integrated-fields');
    const formulaNote = document.getElementById('formula-note');
    const maxLabel = document.getElementById('internal-max-label');
    const assLabel = document.getElementById('ass-label');
    const assignmentGroup = document.getElementById('assignment').parentElement;

    theoryFields.classList.add('hidden');
    labFields.classList.add('hidden');
    integratedFields.classList.add('hidden');
    assignmentGroup.classList.remove('hidden');

    if (type === 'theory') {
        theoryFields.classList.remove('hidden');
        maxLabel.textContent = "Out of 30";
        assLabel.textContent = "Assignment (30)";
        formulaNote.innerHTML = "<strong>Formula:</strong> (0.8 * Better + 0.2 * Other) / 40 * 20 + Assignment (30→10)";
    } else if (type === 'lab') {
        labFields.classList.remove('hidden');
        maxLabel.textContent = "Out of 30";
        formulaNote.innerHTML = "<strong>Formula:</strong> Lab Record (15) + Internal Test (15)";
    } else if (type === 'integrated') {
        theoryFields.classList.remove('hidden');
        integratedFields.classList.remove('hidden');
        assignmentGroup.classList.add('hidden');
        maxLabel.textContent = "Out of 40";
        formulaNote.innerHTML = "<strong>Formula:</strong> [Theory: (0.8 * Better + 0.2 * Other) / 40 * 30] + [Lab: Record (5) + Test (5)]";
    }
    calculateInternal();
}

// Internal Marks Calculation
function calculateInternal() {
    const type = document.getElementById('course-type').value;
    let total = 0;
    if (type === 'theory') {
        const m1 = parseFloat(document.getElementById('mid1').value) || 0;
        const m2 = parseFloat(document.getElementById('mid2').value) || 0;
        const assRaw = parseFloat(document.getElementById('assignment').value) || 0;
        const assScaled = (assRaw / 30) * 10;
        const betterMid = Math.max(m1, m2);
        const otherMid = Math.min(m1, m2);
        total = ((0.8 * betterMid + 0.2 * otherMid) / 40) * 20 + assScaled;
    } else if (type === 'lab') {
        const rec = parseFloat(document.getElementById('lab-record').value) || 0;
        const test = parseFloat(document.getElementById('lab-test').value) || 0;
        total = rec + test;
    } else if (type === 'integrated') {
        // Theory Component (30)
        const m1 = parseFloat(document.getElementById('mid1').value) || 0;
        const m2 = parseFloat(document.getElementById('mid2').value) || 0;
        const betterMid = Math.max(m1, m2);
        const otherMid = Math.min(m1, m2);
        const theoryPart = ((0.8 * betterMid + 0.2 * otherMid) / 40) * 30;
        
        // Lab Component (10)
        const labRec = parseFloat(document.getElementById('int-lab-record').value) || 0;
        const labTest = parseFloat(document.getElementById('int-lab-test').value) || 0;
        const labPart = labRec + labTest;
        
        total = theoryPart + labPart;
    }
    
    const finalTotal = Math.ceil(total);
    document.getElementById('internal-result').textContent = finalTotal;
    updateGradePredictor(finalTotal, type);
}

function updateGradePredictor(internalMarks, type) {
    const predictorBody = document.getElementById('grade-predictor-body');
    const predictorDiv = document.getElementById('grade-predictor');
    predictorBody.innerHTML = '';
    
    if (internalMarks <= 0) {
        predictorDiv.classList.add('hidden');
        return;
    }
    predictorDiv.classList.remove('hidden');

    let seeMax, seeMinPass, totalMax, totalPass, labExternal = 0;
    
    if (type === 'integrated') {
        labExternal = parseFloat(document.getElementById('lab-external').value) || 0;
        seeMax = 90; 
        seeMinPass = 38;
        totalMax = 130;
        totalPass = 52;
    } else if (type === 'lab') {
        seeMax = 70;
        seeMinPass = 35;
        totalMax = 100;
        totalPass = 50;
    } else {
        seeMax = 70;
        seeMinPass = 28;
        totalMax = 100;
        totalPass = 40;
    }

    const thresholds = [
        { grade: "S", percent: 0.90 },
        { grade: "A", percent: 0.80 },
        { grade: "B", percent: 0.70 },
        { grade: "C", percent: 0.60 },
        { grade: "D", percent: 0.50 },
        { grade: "E", percent: (totalPass / totalMax) }
    ];

    let seeLabel = (type === 'integrated') ? "SEE Req. (90M)" : "SEE Req. (70M)";
    if (type === 'integrated' && labExternal > 0) {
        seeLabel = `Theory Req. (70M)`;
    }
    document.querySelector('#grade-predictor thead th:nth-child(2)').textContent = seeLabel;

    thresholds.forEach(t => {
        const minTotal = Math.ceil(t.percent * totalMax);
        let requiredSEE = minTotal - internalMarks;
        
        // For Integrated, if lab external is provided, calculate only required theory marks
        if (type === 'integrated' && labExternal > 0) {
            requiredSEE = minTotal - (internalMarks + labExternal);
        }

        if (requiredSEE <= 0) requiredSEE = 0;
        
        // Adjust min pass logic for integrated theory part if lab external is known
        let actualRequired = Math.max(requiredSEE, seeMinPass);
        if (type === 'integrated' && labExternal > 0) {
            // Lab Pass is 10/20, Theory Pass is 28/70
            const theoryPass = 28;
            actualRequired = Math.max(requiredSEE, theoryPass);
            seeMax = 70; // Only theory remaining
        }

        const tr = document.createElement('tr');
        tr.style.fontSize = "0.8rem";
        
        let seeDisplay = actualRequired.toFixed(1);

        if (actualRequired > seeMax) {
            seeDisplay = `<span class="text-danger">N/A</span>`;
        } else if (actualRequired === (type === 'integrated' && labExternal > 0 ? 28 : seeMinPass) && requiredSEE < (type === 'integrated' && labExternal > 0 ? 28 : seeMinPass)) {
            seeDisplay = `${actualRequired.toFixed(1)} <span style="font-size: 0.65rem;" class="text-warning">(Min)</span>`;
        }

        tr.innerHTML = `
            <td class="fw-bold">${t.grade}</td>
            <td class="fw-bold">${seeDisplay}</td>
            <td class="text-muted">${minTotal}</td>
        `;
        predictorBody.appendChild(tr);
    });
}

// SGPA Calculator
function loadSemesterSubjects() {
    const branchSelect = document.getElementById('branch-select');
    if (!branchSelect) return;
    
    const branch = branchSelect.value;
    const sem = document.getElementById('semester-select').value;
    const pathContainer = document.getElementById('career-path-container');
    const pathSelect = document.getElementById('career-path-select');
    const path = pathSelect.value;
    
    // Show/hide career path selector for semesters 5, 6, 7 in CSE/IT
    if (['CSE', 'IT'].includes(branch) && ['5', '6', '7'].includes(sem)) {
        pathContainer.classList.remove('hidden');
    } else {
        pathContainer.classList.add('hidden');
    }

    const subjects = syllabus[branch][sem] || [];
    const tbody = document.getElementById('sgpa-table-body');
    tbody.innerHTML = '';

    subjects.forEach((sub, index) => {
        // Resolve professional elective if applicable
        let actualSub = sub;
        if (sub.isProfessionalElective && ['CSE', 'IT'].includes(branch) && professionalElectives[path] && professionalElectives[path][sem]) {
            actualSub = professionalElectives[path][sem];
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="fw-bold text-primary" style="cursor: pointer; font-size: 0.85rem;" onclick="loadToPredictor(${index})" title="Predict Marks">
                    ${actualSub.name} <i data-lucide="external-link" style="width: 10px; height: 10px;"></i>
                </div>
                <div class="text-muted" style="font-size: 0.7rem;">${actualSub.code || ''}</div>
            </td>
            <td class="text-center fw-bold">${actualSub.credits}</td>
            <td>
                <select onchange="updateSgpa()" class="form-select form-select-sm py-0" style="font-size: 0.8rem;" data-credits="${actualSub.credits}">
                    <option value="">Grade</option>
                    ${Object.keys(gradePoints).map(g => `<option value="${g}">${g}</option>`).join('')}
                </select>
            </td>
            <td class="gp-display text-center fw-bold">0</td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
    updateSgpa();
    generateCgpaInputs(); // Ensure CGPA inputs match branch credits
}

function loadToPredictor(subIndex) {
    const branch = document.getElementById('branch-select').value;
    const sem = document.getElementById('semester-select').value;
    const path = document.getElementById('career-path-select').value;
    let sub = syllabus[branch][sem][subIndex];
    
    if (sub.isProfessionalElective && ['CSE', 'IT'].includes(branch) && professionalElectives[path] && professionalElectives[path][sem]) {
        sub = professionalElectives[path][sem];
    }
    
    document.getElementById('course-type').value = sub.type || 'theory';
    toggleInternalFields();
    resetInternal();
    showTab('internal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetInternal() {
    const inputs = document.querySelectorAll('#internal-inputs input');
    inputs.forEach(input => input.value = '');
    calculateInternal();
}

function updateSgpa() {
    const rows = document.querySelectorAll('#sgpa-table-body tr');
    let totalCredits = 0;
    let totalPoints = 0;

    rows.forEach(row => {
        const select = row.querySelector('select');
        const gpDisplay = row.querySelector('.gp-display');
        const grade = select.value;
        const credits = parseFloat(select.dataset.credits);
        const points = gradePoints[grade] || 0;

        gpDisplay.textContent = points;
        if (grade !== "") {
            totalCredits += credits;
            totalPoints += (points * credits);
        }
    });

    const sgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById('sgpa-result').textContent = sgpa;
}

// CGPA Calculator
function generateCgpaInputs() {
    const branchSelect = document.getElementById('branch-select');
    if (!branchSelect) return;
    
    const branch = branchSelect.value;
    const container = document.getElementById('cgpa-inputs');
    container.innerHTML = '';
    
    for (let i = 1; i <= 8; i++) {
        let credits = 20; // Default
        if (syllabus[branch] && syllabus[branch][i]) {
            credits = syllabus[branch][i].reduce((sum, sub) => sum + (sub.credits || 0), 0);
        }
        
        const div = document.createElement('div');
        div.className = 'col';
        div.innerHTML = `
            <div class="p-3 glass-card bg-opacity-10" style="background: rgba(56, 189, 248, 0.05);">
                <label class="form-label mb-1 fw-bold text-white text-uppercase" style="font-size: 0.75rem; letter-spacing: 1px;">Semester ${i}</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text bg-transparent border-end-0 text-white opacity-75" style="font-size: 0.7rem; border-color: var(--glass-border);">SGPA</span>
                    <input type="number" step="0.01" class="form-control sem-sgpa-input border-start-0 text-white" data-credits="${credits}" placeholder="0.00" oninput="updateCgpa()" style="border-color: var(--glass-border);">
                </div>
                <div class="mt-2 text-white fw-bold" style="font-size: 0.65rem; opacity: 0.9; letter-spacing: 0.5px;">CREDITS: ${credits}</div>
            </div>
        `;
        container.appendChild(div);
    }
}

function updateCgpa() {
    const inputs = document.querySelectorAll('.sem-sgpa-input');
    let totalCredits = 0;
    let totalPoints = 0;

    inputs.forEach(input => {
        const sgpa = parseFloat(input.value) || 0;
        const credits = parseFloat(input.dataset.credits);
        if (sgpa > 0) {
            totalCredits += credits;
            totalPoints += (sgpa * credits);
        }
    });

    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById('cgpa-result-val').textContent = cgpa;

    const classLabel = document.getElementById('cgpa-class');
    if (cgpa >= 7.75) classLabel.textContent = "1st Class with Distinction";
    else if (cgpa >= 6.75) classLabel.textContent = "First Class";
    else if (cgpa >= 5.75) classLabel.textContent = "Second Class";
    else if (cgpa >= 4.0) classLabel.textContent = "Pass Class";
    else classLabel.textContent = "";
}

init();
