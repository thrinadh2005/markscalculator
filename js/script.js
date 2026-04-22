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
    "AI&DS": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"name": "Problem Solving using Python", "credits": 4.0, "type": "integrated"},
            {"name": "Artificial Intelligence", "credits": 3.0, "type": "theory"},
            {"name": "Design & Analysis of Algorithms", "credits": 3.0, "type": "theory"},
            {"name": "Digital Logic Design", "credits": 4.0, "type": "integrated"},
            {"name": "Mathematical Foundation for Data Science", "credits": 3.0, "type": "theory"},
            {"name": "Object-Oriented Programming with Java", "credits": 3.0, "type": "theory"},
            {"name": "DAA Lab", "credits": 1.5, "type": "lab"},
            {"name": "Java Lab", "credits": 1.5, "type": "lab"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "4": [
            {"name": "Database Management Systems", "credits": 3.0, "type": "theory"},
            {"name": "Operating Systems", "credits": 3.0, "type": "theory"},
            {"name": "Computer Organization & Architecture", "credits": 3.0, "type": "theory"},
            {"name": "Probability & Statistics using Python", "credits": 4.0, "type": "integrated"},
            {"name": "Foundations of Data Science", "credits": 3.0, "type": "theory"},
            {"name": "DBMS Lab", "credits": 1.5, "type": "lab"},
            {"name": "Data Science Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"name": "Web Technologies", "credits": 4.0, "type": "integrated"},
            {"name": "Deep Learning for Data Science", "credits": 3.0, "type": "theory"},
            {"name": "Data Analytics & Visualization", "credits": 4.0, "type": "integrated"},
            {"name": "Computer Networks", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective I (Professional)"},
            {"name": "Elective II (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Deep Learning Lab", "credits": 1.5, "type": "lab"},
            {"name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"name": "Optimization Techniques for ML", "credits": 3.0, "type": "theory"},
            {"name": "Automata Theory & Language Processors", "credits": 3.0, "type": "theory"},
            {"name": "Software Engineering", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "credits": 4.0, "name": "Elective III (Professional)"},
            {"name": "Elective IV (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Optimization Lab", "credits": 1.5, "type": "lab"},
            {"name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Professional Ethics & Human Values", "credits": 0.0, "type": "theory"},
            {"name": "Audit Course", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective V (Professional)"},
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective VI (Professional)"},
            {"name": "Elective VII (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Summer Internship II", "credits": 1.0, "type": "lab"},
            {"name": "Project Work", "credits": 8.0, "type": "lab"}
        ],
        "8": [
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective VIII (Professional)"},
            {"name": "Elective IX (Open)", "credits": 2.0, "type": "theory"},
            {"name": "Full Semester Internship", "credits": 8.0, "type": "lab"}
        ]
    },
    "AI&ML": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"name": "Problem Solving using Python", "credits": 4.0, "type": "integrated"},
            {"name": "Artificial Intelligence", "credits": 3.0, "type": "theory"},
            {"name": "Design & Analysis of Algorithms", "credits": 3.0, "type": "theory"},
            {"name": "Digital Logic Design", "credits": 4.0, "type": "integrated"},
            {"name": "Mathematical Foundation for Data Science", "credits": 3.0, "type": "theory"},
            {"name": "Object-Oriented Programming with Java", "credits": 3.0, "type": "theory"},
            {"name": "DAA Lab", "credits": 1.5, "type": "lab"},
            {"name": "Java Lab", "credits": 1.5, "type": "lab"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "4": [
            {"name": "Database Management Systems", "credits": 3.0, "type": "theory"},
            {"name": "Operating Systems", "credits": 3.0, "type": "theory"},
            {"name": "Computer Organization & Architecture", "credits": 3.0, "type": "theory"},
            {"name": "Probability & Statistics using Python", "credits": 4.0, "type": "integrated"},
            {"name": "Foundations of Machine Learning", "credits": 3.0, "type": "theory"},
            {"name": "DBMS Lab", "credits": 1.5, "type": "lab"},
            {"name": "ML Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"name": "Web Technologies", "credits": 4.0, "type": "integrated"},
            {"name": "Neural Networks", "credits": 3.0, "type": "theory"},
            {"name": "Data Analytics & Visualization", "credits": 4.0, "type": "integrated"},
            {"name": "Computer Networks", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective I (Professional)"},
            {"name": "Elective II (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Neural Networks Lab", "credits": 1.5, "type": "lab"},
            {"name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"name": "Deep Learning Techniques", "credits": 3.0, "type": "theory"},
            {"name": "Automata Theory & Language Processors", "credits": 3.0, "type": "theory"},
            {"name": "Software Engineering", "credits": 3.0, "type": "theory"},
            {"isProfessionalElective": true, "credits": 4.0, "name": "Elective III (Professional)"},
            {"name": "Elective IV (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Deep Learning Lab", "credits": 1.5, "type": "lab"},
            {"name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Professional Ethics", "credits": 0.0, "type": "theory"},
            {"name": "Audit Course", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective V (Professional)"},
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective VI (Professional)"},
            {"name": "Elective VII (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Summer Internship II", "credits": 1.0, "type": "lab"},
            {"name": "Project Work", "credits": 8.0, "type": "lab"}
        ],
        "8": [
            {"isProfessionalElective": true, "credits": 3.0, "name": "Elective VIII (Professional)"},
            {"name": "Elective IX (Open)", "credits": 2.0, "type": "theory"},
            {"name": "Full Semester Internship", "credits": 8.0, "type": "lab"}
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
    },
    "EEE": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"name": "Math III", "credits": 3.0, "type": "theory"},
            {"name": "DC Machines & Transformers", "credits": 3.0, "type": "theory"},
            {"name": "Circuit Analysis II", "credits": 3.0, "type": "theory"},
            {"name": "EM Field Theory", "credits": 3.0, "type": "theory"},
            {"name": "Measurements", "credits": 3.0, "type": "theory"},
            {"name": "Semiconductor Devices", "credits": 3.0, "type": "theory"},
            {"name": "DC Machines Lab", "credits": 1.5, "type": "lab"},
            {"name": "Python Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "4": [
            {"name": "AC Machines", "credits": 3.0, "type": "theory"},
            {"name": "Integrated Circuits", "credits": 3.0, "type": "theory"},
            {"name": "Power Electronics", "credits": 4.0, "type": "integrated"},
            {"name": "Power Generation", "credits": 3.0, "type": "theory"},
            {"name": "Signals & Systems", "credits": 3.0, "type": "theory"},
            {"name": "AC Machines Lab", "credits": 1.5, "type": "lab"},
            {"name": "Measurements Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"name": "Java OOP", "credits": 3.0, "type": "theory"},
            {"name": "Control Systems", "credits": 3.0, "type": "theory"},
            {"name": "Electrical Drives", "credits": 3.0, "type": "theory"},
            {"name": "Power System Protection", "credits": 3.0, "type": "theory"},
            {"name": "Elective I (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective II (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Electrical Systems Lab", "credits": 1.5, "type": "lab"},
            {"name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"name": "Economics & Project Management", "credits": 3.0, "type": "theory"},
            {"name": "Power System Analysis", "credits": 3.0, "type": "theory"},
            {"name": "Utilization of Electrical Energy", "credits": 3.0, "type": "theory"},
            {"name": "Elective III (Professional)", "credits": 4.0, "type": "integrated"},
            {"name": "Elective IV (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Power Systems Lab", "credits": 1.5, "type": "lab"},
            {"name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Ethics", "credits": 0.0, "type": "theory"},
            {"name": "Indian Knowledge Systems", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"name": "Elective V (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective VI (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective VII (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Summer Internship II", "credits": 1.0, "type": "lab"},
            {"name": "Project", "credits": 8.0, "type": "lab"}
        ],
        "8": [
            {"name": "Elective VIII (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective IX (Open)", "credits": 2.0, "type": "theory"},
            {"name": "Full Semester Internship", "credits": 8.0, "type": "lab"}
        ]
    },
    "MECH": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"name": "Materials & Manufacturing", "credits": 3.0, "type": "theory"},
            {"name": "Machine Drawing", "credits": 3.0, "type": "theory"},
            {"name": "Python Programming", "credits": 4.0, "type": "integrated"},
            {"name": "Fluid Mechanics", "credits": 3.0, "type": "theory"},
            {"name": "Kinematics", "credits": 3.0, "type": "theory"},
            {"name": "Thermodynamics", "credits": 3.0, "type": "theory"},
            {"name": "Fluid Mechanics Lab", "credits": 1.5, "type": "lab"},
            {"name": "Computational Math Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "4": [
            {"name": "Java OOP", "credits": 4.0, "type": "integrated"},
            {"name": "Applied Thermodynamics", "credits": 3.0, "type": "theory"},
            {"name": "Dynamics of Machinery", "credits": 3.0, "type": "theory"},
            {"name": "Metal Cutting", "credits": 3.0, "type": "theory"},
            {"name": "Mechanics of Solids", "credits": 3.0, "type": "theory"},
            {"name": "Thermal Lab", "credits": 1.5, "type": "lab"},
            {"name": "Solids Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"name": "CAD & CAM", "credits": 3.0, "type": "theory"},
            {"name": "Design of Machine Elements I", "credits": 3.0, "type": "theory"},
            {"name": "Steam & Gas Turbines", "credits": 3.0, "type": "theory"},
            {"name": "Measurements & Metrology", "credits": 3.0, "type": "theory"},
            {"name": "Elective I (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective II (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Metrology Lab", "credits": 1.5, "type": "lab"},
            {"name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"name": "Design of Machine Elements II", "credits": 3.0, "type": "theory"},
            {"name": "FEM", "credits": 3.0, "type": "theory"},
            {"name": "Heat Transfer", "credits": 3.0, "type": "theory"},
            {"name": "Elective III (Professional)", "credits": 4.0, "type": "integrated"},
            {"name": "Elective IV (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Heat Transfer Lab", "credits": 1.5, "type": "lab"},
            {"name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Ethics", "credits": 0.0, "type": "theory"},
            {"name": "Audit Course", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"name": "Project Work", "credits": 8.0, "type": "lab"},
            {"name": "Elective V (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective VI (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective VII (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Summer Internship II", "credits": 1.0, "type": "lab"}
        ],
        "8": [
            {"name": "Full Semester Internship", "credits": 8.0, "type": "lab"},
            {"name": "Elective VIII (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective IX (Open)", "credits": 2.0, "type": "theory"}
        ]
    },
    "CIVIL": {
        "1": commonSem1,
        "2": commonSem2,
        "3": [
            {"name": "Numerical Methods", "credits": 3.0, "type": "theory"},
            {"name": "Building Materials", "credits": 3.0, "type": "theory"},
            {"name": "Planning & Drawing", "credits": 3.0, "type": "theory"},
            {"name": "Fluid Mechanics", "credits": 4.0, "type": "integrated"},
            {"name": "Solid Mechanics I", "credits": 3.0, "type": "theory"},
            {"name": "Surveying", "credits": 3.0, "type": "theory"},
            {"name": "Solid Mechanics Lab", "credits": 1.5, "type": "lab"},
            {"name": "Surveying Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "4": [
            {"name": "Hydraulics", "credits": 3.0, "type": "theory"},
            {"name": "Soil Mechanics", "credits": 3.0, "type": "theory"},
            {"name": "Solid Mechanics II", "credits": 3.0, "type": "theory"},
            {"name": "Structural Analysis", "credits": 3.0, "type": "theory"},
            {"name": "Transportation Engg", "credits": 4.0, "type": "integrated"},
            {"name": "Hydraulics Lab", "credits": 1.5, "type": "lab"},
            {"name": "Soil Lab", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills I", "credits": 2.0, "type": "theory"}
        ],
        "5": [
            {"name": "RC Structures", "credits": 3.0, "type": "theory"},
            {"name": "Environmental Engg", "credits": 3.0, "type": "theory"},
            {"name": "Foundation Engg", "credits": 3.0, "type": "theory"},
            {"name": "Hydrology", "credits": 3.0, "type": "theory"},
            {"name": "Elective I (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective II (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Environmental Engg Lab", "credits": 1.5, "type": "lab"},
            {"name": "Term Paper", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Summer Internship I", "credits": 1.0, "type": "lab"}
        ],
        "6": [
            {"name": "OOPS", "credits": 3.0, "type": "theory"},
            {"name": "Steel Structures", "credits": 3.0, "type": "theory"},
            {"name": "Estimation & Costing", "credits": 3.0, "type": "theory"},
            {"name": "Elective III (Professional)", "credits": 4.0, "type": "integrated"},
            {"name": "Elective IV (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Concrete Lab", "credits": 1.5, "type": "lab"},
            {"name": "Mini Project", "credits": 1.5, "type": "lab"},
            {"name": "Employability Skills II", "credits": 2.0, "type": "theory"},
            {"name": "Environmental Studies", "credits": 0.0, "type": "theory"},
            {"name": "Ethics", "credits": 0.0, "type": "theory"},
            {"name": "Audit Course", "credits": 0.0, "type": "theory"}
        ],
        "7": [
            {"name": "Elective V (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective VI (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective VII (Open)", "credits": 3.0, "type": "theory"},
            {"name": "Project Work", "credits": 8.0, "type": "lab"},
            {"name": "Summer Internship II", "credits": 1.0, "type": "lab"}
        ],
        "8": [
            {"name": "Elective VIII (Professional)", "credits": 3.0, "type": "theory"},
            {"name": "Elective IX (Open)", "credits": 2.0, "type": "theory"},
            {"name": "Full Semester Internship", "credits": 8.0, "type": "lab"}
        ]
    }
};

const gradePoints = {
    "S": 10, "A": 9, "B": 8, "C": 7, "D": 6, "E": 5, "F": 0
};

let adminClickCount = 0;
let adminClickTimer = null;
let lastClickTime = 0;

function init() {
    lucide.createIcons();
    checkUserSession();
    loadSemesterSubjects();
    updateCgpaInputs();
    setupInputValidation();
    updateVisitorCount();
}

function checkAdmin() {
    // Handle Admin (5 Taps)
    if (adminClickTimer) clearTimeout(adminClickTimer);
    adminClickCount++;
    console.log("Admin click count:", adminClickCount);
    
    if (adminClickCount >= 5) {
        adminClickCount = 0;
        const pass = prompt("Enter Admin Password to view Visitor List:");
        if (pass === "thrinadh2005") {
            showVisitorList();
        } else if (pass !== null) {
            alert("Incorrect Password!");
        }
    } else {
        // Reset count if user stops clicking for 2 seconds
        adminClickTimer = setTimeout(() => {
            adminClickCount = 0;
            console.log("Admin click count reset");
        }, 2000);
    }
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/in/venkatathrinadh/', '_blank');
}

async function showVisitorList() {
    const overlay = document.getElementById('visitor-list-overlay');
    const content = document.getElementById('visitor-list-content');
    if (!overlay || !content) return;

    overlay.classList.remove('hidden');
    setTimeout(() => overlay.style.opacity = '1', 10);

    content.innerHTML = `
        <div class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading visitor logs...</span>
            </div>
            <p class="mt-2 text-muted">Fetching visitor data...</p>
        </div>
    `;

    try {
        const localLog = JSON.parse(localStorage.getItem('visitor_history') || '[]');
        console.log('Local visitor log count:', localLog.length);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // Increased timeout for MongoDB

        const response = await fetch('/api/visitors', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const globalLog = await response.json();
        console.log('Global visitor log count:', globalLog.length);
        
        renderVisitorList(globalLog, localLog);
    } catch (e) {
        console.error("Visitor list fetch failed:", e);
        
        // Show error message and fallback to local data
        content.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <i data-lucide="alert-triangle" style="width: 16px; height: 16px;"></i>
                <strong>Connection Issue:</strong> Unable to fetch global visitor logs. Showing local data only.
            </div>
        `;
        
        // Re-initialize lucide icons for the alert
        setTimeout(() => lucide.createIcons(), 100);
        
        // Wait a moment then show local data
        setTimeout(() => {
            const localLog = JSON.parse(localStorage.getItem('visitor_history') || '[]');
            renderVisitorList([], localLog);
        }, 2000);
    }
}

function renderVisitorList(globalLogs, localLogs) {
    const content = document.getElementById('visitor-list-content');
    if (!content) return;

    // Filter out any null or invalid entries from global logs
    const validGlobalLogs = globalLogs.filter(item => item !== null && typeof item === 'object');

    if (validGlobalLogs.length === 0 && localLogs.length === 0) {
        content.innerHTML = '<p class="text-center text-muted py-5">No visitors found yet.</p>';
        return;
    }

    let html = '';

    if (validGlobalLogs.length > 0) {
        html += `
            <div class="small fw-bold text-uppercase mb-3 opacity-50" style="letter-spacing: 1px; color: var(--primary);">
                Global Log (${validGlobalLogs.length})
            </div>
            <div class="list-group list-group-flush mb-4">
        `;
        validGlobalLogs.slice(0, 50).forEach(item => {
            // Support multiple possible name keys for robustness
            const name = item.name || item.userName || item.user || 'Anonymous';
            const date = item.date || item.timestamp || 'Unknown';
            
            html += `
                <div class="list-group-item bg-transparent border-primary border-opacity-10 py-3 px-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="fw-bold text-white">${name}</div>
                        <div class="text-muted small" style="font-size: 0.65rem;">${date}</div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }

    if (localLogs.length > 0) {
        html += `
            <div class="small fw-bold text-uppercase mb-3 opacity-50" style="letter-spacing: 1px;">
                Device History
            </div>
            <div class="list-group list-group-flush">
        `;
        localLogs.slice(0, 10).forEach(item => {
            const name = item.name || item.userName || item.user || 'Anonymous';
            const date = item.date || item.timestamp || 'Unknown';

            html += `
                <div class="list-group-item bg-transparent border-white border-opacity-10 py-3 px-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="fw-bold text-muted">${name}</div>
                        <div class="text-muted small" style="font-size: 0.65rem;">${date}</div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }

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

    // Send name to MongoDB (Truly Global Public Log)
    try {
        await fetch('/api/visitors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                date: new Date().toLocaleString()
            })
        });
    } catch (e) {
        console.log("Global sync failed, visitor saved to local history.");
    }

    // Hide overlay with animation
    const overlay = document.getElementById('login-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 500);
}

async function updateVisitorCount(retryCount = 0) {
    const counterEl = document.getElementById('visitor-count');
    
    // Show loading state
    if (counterEl) {
        counterEl.textContent = 'Loading...';
        counterEl.style.color = 'var(--text-muted)';
    }
    
    // Immediate fallback after 1 second if still loading
    const immediateFallback = setTimeout(() => {
        if (counterEl && counterEl.textContent === 'Loading...') {
            let storedCount = localStorage.getItem('site_visitors');
            let count = storedCount ? parseInt(storedCount) : 0;
            
            // Check if it's a new day
            const today = new Date().toDateString();
            const lastVisitDate = localStorage.getItem('last_visit_date');
            
            if (lastVisitDate !== today) {
                localStorage.setItem('last_visit_date', today);
                console.log('New day detected, waiting for API to update global count');
            }
            
            // Use exact count (API handles the actual counting)
            console.log('Using immediate fallback count:', count);
            
            counterEl.textContent = count.toLocaleString();
            counterEl.style.color = 'var(--text)';
        }
    }, 1000);
    
    try {
        // Set timeout for API call
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('API timeout')), 3000);
        });
        
        // Use our improved counting API
        const response = await Promise.race([
            fetch('/api/count'),
            timeoutPromise
        ]);
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && typeof data.count === 'number') {
            // Clear immediate fallback
            clearTimeout(immediateFallback);
            
            // Display the global unique count
            counterEl.textContent = data.count.toLocaleString();
            counterEl.style.color = '';
            
            // Add visual feedback for new visitors
            if (data.is_new_visitor) {
                counterEl.style.color = '#28a745';
                setTimeout(() => {
                    counterEl.style.color = '';
                }, 2000);
            }
            
            // Log debugging info
            console.log('Visitor count updated:', {
                display: data.count,
                unique: data.unique_visitors,
                total_views: data.total_views,
                is_new: data.is_new_visitor,
                fallback: data.fallback
            });
        } else {
            // Clear immediate fallback
            clearTimeout(immediateFallback);
            throw new Error('Invalid API response structure');
        }
    } catch (error) {
        console.error("Visitor count fetch failed:", error);
        
        // Clear immediate fallback
        clearTimeout(immediateFallback);
        
        // Retry logic
        if (retryCount < 2) {
            console.log(`Retrying visitor count... Attempt ${retryCount + 1}/3`);
            setTimeout(() => updateVisitorCount(retryCount + 1), 1000);
            return;
        }
        
        // Final fallback mechanism - exact count
        let storedCount = localStorage.getItem('site_visitors');
        let count = storedCount ? parseInt(storedCount) : 0;
        
        // Check if it's a new day, reset counter
        const today = new Date().toDateString();
        const lastVisitDate = localStorage.getItem('last_visit_date');
        
        if (lastVisitDate !== today) {
            localStorage.setItem('last_visit_date', today);
        }
        
        // Show fallback count
        counterEl.textContent = count.toLocaleString();
        counterEl.style.color = '#ffc107'; // Yellow color for fallback mode
        
        console.log('Using fallback exact count:', count);
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
    
    // Initialize tab-specific functionality
    if (tabName === 'cgpa') {
        updateCgpaInputs();
    } else if (tabName === 'analytics') {
        // Initialize analytics charts
        if (typeof showAnalyticsTab === 'function') {
            showAnalyticsTab();
        }
    }
    
    lucide.createIcons();
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
    
    // Show/hide career path selector for semesters 5, 6, 7 in CSE/AI&DS/AI&ML/IT
    if (['CSE', 'AI&DS', 'AI&ML', 'IT'].includes(branch) && ['5', '6', '7'].includes(sem)) {
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
        if (sub.isProfessionalElective && ['CSE', 'AI&DS', 'AI&ML', 'IT'].includes(branch) && professionalElectives[path] && professionalElectives[path][sem]) {
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
    updateCgpaInputs(); // Ensure CGPA inputs match branch credits
}

function loadToPredictor(subIndex) {
    const branch = document.getElementById('branch-select').value;
    const sem = document.getElementById('semester-select').value;
    const path = document.getElementById('career-path-select').value;
    let sub = syllabus[branch][sem][subIndex];
    
    if (sub.isProfessionalElective && ['CSE', 'AI&DS', 'AI&ML', 'IT'].includes(branch) && professionalElectives[path] && professionalElectives[path][sem]) {
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
function updateCgpaInputs() {
    const branchSelect = document.getElementById('cgpa-branch-select');
    if (!branchSelect) return;
    
    let branch = branchSelect.value;
    
    // Normalize branch name to match syllabus keys
    if (branch === 'cse') branch = 'CSE';
    if (branch === 'ece') branch = 'ECE';
    if (branch === 'eee') branch = 'EEE';
    if (branch === 'mech') branch = 'MECH';
    if (branch === 'civil') branch = 'CIVIL';
    if (branch === 'it') branch = 'IT';
    if (branch === 'aiml') branch = 'AI&ML';
    if (branch === 'aids') branch = 'AI&DS';
    
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
            <div class="p-3 glass-card bg-opacity-10 cgpa-input-card" style="background: rgba(56, 189, 248, 0.05);">
                <label class="form-label mb-1 fw-bold cgpa-label text-uppercase" style="font-size: 0.75rem; letter-spacing: 1px;">Semester ${i}</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text bg-transparent border-end-0 cgpa-input-label opacity-75" style="font-size: 0.7rem; border-color: var(--glass-border);">SGPA</span>
                    <input type="number" step="0.01" class="form-control sem-sgpa-input border-start-0 cgpa-input-field" data-credits="${credits}" placeholder="0.00" oninput="updateCgpa()" style="border-color: var(--glass-border);">
                </div>
                <div class="mt-2 cgpa-credits fw-bold" style="font-size: 0.65rem; opacity: 0.9; letter-spacing: 0.5px;">CREDITS: ${credits}</div>
            </div>
        `;
        container.appendChild(div);
    }
    
    // Initialize CGPA calculation
    updateCgpa();
}

function loadCgpaInputs() {
    // This function is now replaced by updateCgpaInputs
    updateCgpaInputs();
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

// PWA: Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Registration Failed', err));
    });
}

// PWA: Install Prompt Logic
let deferredPrompt;
const pwaBanner = document.getElementById('pwa-install-banner');
const installBtn = document.getElementById('pwa-install-btn');
const closeBtn = document.getElementById('pwa-close-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    if (!localStorage.getItem('pwa_banner_closed')) {
        pwaBanner.classList.remove('hidden');
    }
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
        // Hide the banner
        pwaBanner.classList.add('hidden');
    }
});

closeBtn.addEventListener('click', () => {
    pwaBanner.classList.add('hidden');
    // Remember the user closed the banner
    localStorage.setItem('pwa_banner_closed', 'true');
});

// Check if app is already installed
window.addEventListener('appinstalled', (evt) => {
    console.log('GMRIT Calculator was installed');
    pwaBanner.classList.add('hidden');
});
