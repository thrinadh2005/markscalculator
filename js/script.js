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
    
    // Load saved selections
    const savedBranch = localStorage.getItem('last_branch');
    const savedSem = localStorage.getItem('last_sem');
    if (savedBranch) document.getElementById('branch-select').value = savedBranch;
    if (savedSem) document.getElementById('semester-select').value = savedSem;
    
    loadSemesterSubjects();
    initUnifiedCgpa();
    setupInputValidation();
    updateVisitorCount();
    
    // Initialize Study Planner
    if (window.examStudyPlanner) {
        examStudyPlanner.init().catch(err => console.warn('Study Planner init failed:', err));
    }
    
    // Auto prompt for review after 10 seconds if not already submitted or dismissed
    setTimeout(() => {
        if (!localStorage.getItem('review_submitted') && !localStorage.getItem('review_dismissed')) {
            openReviewModal();
        }
    }, 10000);
}

function checkAdmin() {
    // Handle Admin (5 Taps)
    if (adminClickTimer) clearTimeout(adminClickTimer);
    adminClickCount++;
    console.log("Admin click count:", adminClickCount);
    
    if (adminClickCount >= 5) {
        adminClickCount = 0;
        const pass = prompt("Enter Admin Password to view Admin Dashboard:");
        if (pass === "thrinadh2005") {
            showAdminTab('visitors');
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
            
            // Cache the successful count for future fallbacks
            localStorage.setItem('site_visitors', data.count.toString());
            
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
            const max = parseFloat(this.getAttribute('max')) || 100;
            const min = parseFloat(this.getAttribute('min')) || 0;
            let value = parseFloat(this.value);

            if (isNaN(value)) return;

            if (value > max) {
                this.value = max;
                // Show visual feedback for max limit
                this.style.borderColor = '#ef4444';
                this.style.backgroundColor = '#fef2f2';
                setTimeout(() => {
                    this.style.borderColor = '';
                    this.style.backgroundColor = '';
                }, 1500);
            } else if (value < min) {
                this.value = min;
                // Show visual feedback for min limit
                this.style.borderColor = '#f59e0b';
                this.style.backgroundColor = '#fef3c7';
                setTimeout(() => {
                    this.style.borderColor = '';
                    this.style.backgroundColor = '';
                }, 1500);
            } else {
                // Normal state
                this.style.borderColor = '';
                this.style.backgroundColor = '';
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
        initUnifiedCgpa();
    }

    // Auto-load results iframe when tab opens
    if (tabName === 'results') {
        loadResultsInFrame();
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
    
    // Helper function to get validated input value
    function getValidatedValue(inputId) {
        const input = document.getElementById(inputId);
        if (!input) return 0;
        const max = parseFloat(input.getAttribute('max')) || 100;
        const min = parseFloat(input.getAttribute('min')) || 0;
        let value = parseFloat(input.value) || 0;
        
        // Clamp the value to the valid range
        if (isNaN(value)) value = min;
        if (value > max) value = max;
        if (value < min) value = min;
        
        // Update the input to show the clamped value
        input.value = value;
        return value;
    }
    
    if (type === 'theory') {
        const m1 = getValidatedValue('mid1');
        const m2 = getValidatedValue('mid2');
        const assRaw = getValidatedValue('assignment');
        const assScaled = (assRaw / 30) * 10;
        const betterMid = Math.max(m1, m2);
        const otherMid = Math.min(m1, m2);
        total = ((0.8 * betterMid + 0.2 * otherMid) / 40) * 20 + assScaled;
    } else if (type === 'lab') {
        const rec = getValidatedValue('lab-record');
        const test = getValidatedValue('lab-test');
        total = rec + test;
    } else if (type === 'integrated') {
        // Theory Component (30)
        const m1 = getValidatedValue('mid1');
        const m2 = getValidatedValue('mid2');
        const betterMid = Math.max(m1, m2);
        const otherMid = Math.min(m1, m2);
        const theoryPart = ((0.8 * betterMid + 0.2 * otherMid) / 40) * 30;
        
        // Lab Component (10)
        const labRec = getValidatedValue('int-lab-record');
        const labTest = getValidatedValue('int-lab-test');
        const labPart = labRec + labTest;
        
        total = theoryPart + labPart;
    }
    
    const finalTotal = Math.ceil(total);
    const resultElement = document.getElementById('internal-result');
    
    // Add color based on marks
    let resultColor = '';
    let resultBg = '';
    
    if (finalTotal >= 35) {
        resultColor = '#16a34a'; // Green - Excellent
        resultBg = '#dcfce7';
    } else if (finalTotal >= 30) {
        resultColor = '#2563eb'; // Blue - Very Good
        resultBg = '#dbeafe';
    } else if (finalTotal >= 25) {
        resultColor = '#7c3aed'; // Indigo - Good
        resultBg = '#e9d5ff';
    } else if (finalTotal >= 20) {
        resultColor = '#06b6d4'; // Cyan - Average
        resultBg = '#cffafe';
    } else if (finalTotal >= 15) {
        resultColor = '#f59e0b'; // Amber - Satisfactory
        resultBg = '#fef3c7';
    } else {
        resultColor = '#ef4444'; // Red - Poor
        resultBg = '#fef2f2';
    }
    
    resultElement.textContent = finalTotal;
    resultElement.style.color = resultColor;
    resultElement.style.background = resultBg;
    resultElement.style.padding = '8px 16px';
    resultElement.style.borderRadius = '8px';
    resultElement.style.fontWeight = 'bold';
    resultElement.style.display = 'inline-block';
    
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

        // Add color based on grade
        const gradeColors = {
            'S': { color: '#16a34a', bg: '#dcfce7' },      // Green - Outstanding
            'A': { color: '#2563eb', bg: '#dbeafe' },      // Blue - Excellent
            'B': { color: '#7c3aed', bg: '#e9d5ff' },      // Indigo - Very Good
            'C': { color: '#06b6d4', bg: '#cffafe' },      // Cyan - Good
            'D': { color: '#f59e0b', bg: '#fef3c7' },      // Amber - Average
            'E': { color: '#ef4444', bg: '#fef2f2' }       // Red - Poor/Fail
        };
        
        const gradeColor = gradeColors[t.grade] || { color: '#6b7280', bg: '#f3f4f6' };
        
        tr.innerHTML = `
            <td class="fw-bold" style="color: ${gradeColor.color}; background: ${gradeColor.bg}; padding: 4px 8px; border-radius: 4px;">${t.grade}</td>
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
    
    // Load saved grades if available
    const savedGrades = JSON.parse(localStorage.getItem(`grades_${branch}_${sem}`) || '{}');
    const rows = document.querySelectorAll('#sgpa-table-body tr');
    rows.forEach((row, index) => {
        const select = row.querySelector('select');
        if (savedGrades[index]) {
            select.value = savedGrades[index];
        }
    });
    
    updateSgpa();
    
    // Save selections
    localStorage.setItem('last_branch', branch);
    localStorage.setItem('last_sem', sem);
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
    
    // Save current grades
    const branch = document.getElementById('branch-select').value;
    const sem = document.getElementById('semester-select').value;
    const grades = {};
    rows.forEach((row, index) => {
        const select = row.querySelector('select');
        if (select.value) grades[index] = select.value;
    });
    localStorage.setItem(`grades_${branch}_${sem}`, JSON.stringify(grades));
}

// ========================================================
// UNIFIED CGPA CALCULATOR & TARGET PREDICTOR ENGINE
// ========================================================

let whatIfOverrides = {}; // stores custom simulated values for uncompleted semesters

function getBranchSemesterCredits(branch, sem) {
    if (branch === 'UNIFORM') return 20.0;
    
    // Normalize branch key
    let bKey = branch;
    if (bKey === 'cse') bKey = 'CSE';
    if (bKey === 'ece') bKey = 'ECE';
    if (bKey === 'eee') bKey = 'EEE';
    if (bKey === 'mech') bKey = 'MECH';
    if (bKey === 'civil') bKey = 'CIVIL';
    if (bKey === 'it') bKey = 'IT';
    if (bKey === 'aiml') bKey = 'AI&ML';
    if (bKey === 'aids') bKey = 'AI&DS';

    if (syllabus[bKey] && syllabus[bKey][sem]) {
        return syllabus[bKey][sem].reduce((sum, sub) => sum + (sub.credits || 0), 0);
    }
    return 20.0; // Standard fallback
}

function onCgpaBranchChange() {
    renderUnifiedCgpaSemesterCards();
    calculateUnifiedCgpa();
}

function onCompletedCountSelectChange(val) {
    if (val === 'auto') {
        calculateUnifiedCgpa();
        return;
    }
    const count = parseInt(val);
    if (!isNaN(count)) {
        // Clear semesters beyond count so they become forecasted
        for (let i = count + 1; i <= 8; i++) {
            const inp = document.getElementById(`sem-sgpa-input-${i}`);
            if (inp) inp.value = '';
        }
        // Focus first empty input among 1..count
        for (let i = 1; i <= count; i++) {
            const inp = document.getElementById(`sem-sgpa-input-${i}`);
            if (inp && (!inp.value || parseFloat(inp.value) === 0)) {
                inp.focus();
                break;
            }
        }
    }
    calculateUnifiedCgpa();
}

function setUnifiedTargetPreset(targetVal) {
    const input = document.getElementById('cgpa-target-input');
    if (input) {
        input.value = parseFloat(targetVal).toFixed(2);
    }
    
    // Update active state on preset chips
    const chips = document.querySelectorAll('.preset-chip');
    chips.forEach(chip => {
        if (chip.textContent.includes(targetVal.toString())) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
    
    calculateUnifiedCgpa();
}

function initUnifiedCgpa() {
    renderUnifiedCgpaSemesterCards();
    
    // Try restoring saved state from localStorage
    const savedState = JSON.parse(localStorage.getItem('gmrit_unified_cgpa_state') || 'null');
    if (savedState) {
        if (savedState.branch && document.getElementById('cgpa-branch-select')) {
            document.getElementById('cgpa-branch-select').value = savedState.branch;
        }
        if (savedState.target && document.getElementById('cgpa-target-input')) {
            document.getElementById('cgpa-target-input').value = savedState.target;
        }
        if (savedState.sgpas && Array.isArray(savedState.sgpas)) {
            savedState.sgpas.forEach((val, index) => {
                const inp = document.getElementById(`sem-sgpa-input-${index + 1}`);
                if (inp && val !== null && val !== undefined && val !== '') {
                    inp.value = val;
                }
            });
        }
    }
    
    calculateUnifiedCgpa();
}

function renderUnifiedCgpaSemesterCards() {
    const container = document.getElementById('cgpa-semester-cards');
    if (!container) return;

    const branchSelect = document.getElementById('cgpa-branch-select');
    const branch = branchSelect ? branchSelect.value : 'CSE';
    
    // Preserve current input values if re-rendering
    const currentValues = {};
    for (let i = 1; i <= 8; i++) {
        const inp = document.getElementById(`sem-sgpa-input-${i}`);
        if (inp && inp.value !== '') {
            currentValues[i] = inp.value;
        }
    }

    container.innerHTML = '';

    for (let i = 1; i <= 8; i++) {
        const credits = getBranchSemesterCredits(branch, i);
        const savedVal = currentValues[i] || '';

        const div = document.createElement('div');
        div.className = 'col';
        div.innerHTML = `
            <div class="p-3 pred-sem-card h-100" id="sem-card-box-${i}">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0 fw-bold text-uppercase" style="font-size: 0.75rem; letter-spacing: 0.5px;">Semester ${i}</label>
                    <span class="badge bg-primary bg-opacity-10 text-primary" style="font-size: 0.62rem;">${credits} Cr</span>
                </div>
                <div class="input-group input-group-sm my-2">
                    <span class="input-group-text bg-transparent border-end-0 opacity-75" style="font-size: 0.7rem; border-color: var(--glass-border);">SGPA</span>
                    <input type="number" step="0.01" min="0" max="10" 
                           id="sem-sgpa-input-${i}" 
                           class="form-control fw-bold border-start-0 sem-sgpa-input-unified" 
                           data-sem="${i}" 
                           data-credits="${credits}" 
                           value="${savedVal}" 
                           placeholder="0.00" 
                           oninput="calculateUnifiedCgpa()" 
                           style="border-color: var(--glass-border);">
                </div>
                <div class="d-flex justify-content-between align-items-center mt-1">
                    <span class="text-muted extra-small" style="font-size: 0.65rem;" id="sem-status-text-${i}">Forecasted</span>
                    <span class="pred-sem-grade-badge" id="sem-grade-badge-${i}"></span>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
}

function calculateUnifiedCgpa() {
    const branchSelect = document.getElementById('cgpa-branch-select');
    const branch = branchSelect ? branchSelect.value : 'CSE';

    const targetInput = document.getElementById('cgpa-target-input');
    let targetCgpa = parseFloat(targetInput ? targetInput.value : 8.50) || 8.50;
    if (targetCgpa > 10.0) targetCgpa = 10.0;
    if (targetCgpa < 0.0) targetCgpa = 0.0;

    let totalDegreeCredits = 0;
    let completedCredits = 0;
    let completedQualityPoints = 0;
    let completedCount = 0;
    const completedSems = [];
    const remainingSems = [];
    const savedSgpas = [];

    for (let i = 1; i <= 8; i++) {
        const credits = getBranchSemesterCredits(branch, i);
        totalDegreeCredits += credits;

        const input = document.getElementById(`sem-sgpa-input-${i}`);
        const statusText = document.getElementById(`sem-status-text-${i}`);
        const gradeBadge = document.getElementById(`sem-grade-badge-${i}`);
        const cardBox = document.getElementById(`sem-card-box-${i}`);

        let valStr = input ? input.value.trim() : '';
        let sgpa = parseFloat(valStr);
        savedSgpas.push(valStr);

        if (!isNaN(sgpa) && sgpa > 0) {
            // Clamp if entered > 10
            if (sgpa > 10) {
                sgpa = 10;
                input.value = "10.00";
            }
            completedCount++;
            completedCredits += credits;
            completedQualityPoints += (sgpa * credits);
            completedSems.push({ sem: i, sgpa, credits });

            if (statusText) statusText.textContent = "Completed";
            if (cardBox) {
                cardBox.style.borderColor = 'var(--primary)';
                cardBox.style.background = 'rgba(56, 189, 248, 0.06)';
            }
            if (gradeBadge) {
                gradeBadge.style.display = 'inline-block';
                if (sgpa >= 9.0) {
                    gradeBadge.textContent = 'Outstanding (S)';
                    gradeBadge.style.background = '#dcfce7';
                    gradeBadge.style.color = '#16a34a';
                } else if (sgpa >= 8.0) {
                    gradeBadge.textContent = 'Excellent (A)';
                    gradeBadge.style.background = '#dbeafe';
                    gradeBadge.style.color = '#2563eb';
                } else if (sgpa >= 7.0) {
                    gradeBadge.textContent = 'Very Good (B)';
                    gradeBadge.style.background = '#e9d5ff';
                    gradeBadge.style.color = '#7c3aed';
                } else if (sgpa >= 6.0) {
                    gradeBadge.textContent = 'Good (C)';
                    gradeBadge.style.background = '#cffafe';
                    gradeBadge.style.color = '#0891b2';
                } else if (sgpa >= 5.0) {
                    gradeBadge.textContent = 'Average (D)';
                    gradeBadge.style.background = '#fef3c7';
                    gradeBadge.style.color = '#d97706';
                } else {
                    gradeBadge.textContent = 'Pass (E)';
                    gradeBadge.style.background = '#fee2e2';
                    gradeBadge.style.color = '#dc2626';
                }
            }
        } else {
            remainingSems.push({ sem: i, credits });
            if (statusText) statusText.textContent = "Forecasted";
            if (gradeBadge) {
                gradeBadge.style.display = 'none';
            }
            if (cardBox) {
                cardBox.style.borderColor = 'var(--glass-border)';
                cardBox.style.background = 'var(--glass)';
            }
        }
    }

    // Current CGPA
    const currentCgpa = completedCredits > 0 ? (completedQualityPoints / completedCredits) : 0.0;
    const currentCgpaEl = document.getElementById('cgpa-result-val');
    if (currentCgpaEl) {
        currentCgpaEl.textContent = completedCredits > 0 ? currentCgpa.toFixed(2) : "0.00";
    }

    // Degree classification for current completed CGPA
    const classLabel = document.getElementById('cgpa-class');
    if (classLabel) {
        if (completedCredits === 0) {
            classLabel.textContent = "Enter SGPAs to calculate";
        } else if (currentCgpa >= 7.75) {
            classLabel.textContent = "1st Class with Distinction";
        } else if (currentCgpa >= 6.75) {
            classLabel.textContent = "First Class";
        } else if (currentCgpa >= 5.75) {
            classLabel.textContent = "Second Class";
        } else if (currentCgpa >= 4.0) {
            classLabel.textContent = "Pass Class";
        } else {
            classLabel.textContent = "Below Pass Class";
        }
    }

    // Degree progress
    const progressPercent = totalDegreeCredits > 0 ? Math.round((completedCredits / totalDegreeCredits) * 100) : 0;
    const progressPercentEl = document.getElementById('cgpa-progress-percent');
    if (progressPercentEl) progressPercentEl.textContent = `${progressPercent}% Completed`;
    const creditsBar = document.getElementById('cgpa-credits-bar');
    if (creditsBar) creditsBar.style.width = `${progressPercent}%`;

    // Badges & counts
    const countBadge = document.getElementById('cgpa-completed-count-badge');
    if (countBadge) {
        countBadge.textContent = `${completedCount} of 8 Semesters Completed`;
    }
    const remCountPill = document.getElementById('cgpa-remaining-count-pill');
    if (remCountPill) {
        remCountPill.textContent = `${remainingSems.length} Sems Remaining`;
    }

    const creditsVal = document.getElementById('cgpa-credits-val');
    if (creditsVal) creditsVal.textContent = `${completedCredits.toFixed(1)} / ${totalDegreeCredits.toFixed(1)}`;
    const remCreditsVal = document.getElementById('cgpa-rem-credits-val');
    const remainingCredits = totalDegreeCredits - completedCredits;
    if (remCreditsVal) remCreditsVal.textContent = `${remainingCredits.toFixed(1)} Cr`;

    // Max & Min achievable CGPA
    const maxPossibleCgpa = totalDegreeCredits > 0 
        ? ((completedQualityPoints + (10.0 * remainingCredits)) / totalDegreeCredits) 
        : 10.0;
    const minPassCgpa = totalDegreeCredits > 0 
        ? ((completedQualityPoints + (5.0 * remainingCredits)) / totalDegreeCredits) 
        : 5.0;

    const maxCgpaEl = document.getElementById('cgpa-max-cgpa-val');
    if (maxCgpaEl) maxCgpaEl.textContent = maxPossibleCgpa.toFixed(2);
    const minCgpaEl = document.getElementById('cgpa-min-cgpa-val');
    if (minCgpaEl) minCgpaEl.textContent = minPassCgpa.toFixed(2);

    // Target Prediction Math
    const totalPointsNeeded = targetCgpa * totalDegreeCredits;
    const remainingPointsNeeded = totalPointsNeeded - completedQualityPoints;

    // What-if simulation calculations
    let overrideQualityPoints = 0;
    let overrideCredits = 0;
    let overriddenCount = 0;

    remainingSems.forEach(r => {
        if (whatIfOverrides[r.sem] !== undefined && whatIfOverrides[r.sem] !== null) {
            const ovVal = parseFloat(whatIfOverrides[r.sem]);
            overrideQualityPoints += (ovVal * r.credits);
            overrideCredits += r.credits;
            overriddenCount++;
        }
    });

    const unresolvedCredits = remainingCredits - overrideCredits;
    const unresolvedPointsNeeded = remainingPointsNeeded - overrideQualityPoints;

    let requiredSgpa = 0;
    if (remainingCredits > 0) {
        if (unresolvedCredits > 0) {
            requiredSgpa = unresolvedPointsNeeded / unresolvedCredits;
        } else {
            // All remaining semesters have custom what-if overrides!
            const simulatedFinalCgpa = (completedQualityPoints + overrideQualityPoints) / totalDegreeCredits;
            requiredSgpa = simulatedFinalCgpa;
        }
    }

    const reqSgpaValEl = document.getElementById('cgpa-req-sgpa-val');
    if (reqSgpaValEl) {
        if (remainingSems.length === 0) {
            reqSgpaValEl.textContent = currentCgpa.toFixed(2);
        } else if (requiredSgpa <= 0) {
            reqSgpaValEl.textContent = "0.00";
        } else {
            reqSgpaValEl.textContent = requiredSgpa.toFixed(2);
        }
    }

    // Update Feasibility Banner
    updateUnifiedFeasibilityBanner(completedCount, remainingSems.length, requiredSgpa, targetCgpa, currentCgpa, maxPossibleCgpa);

    // Render Remaining Roadmap Cards
    renderUnifiedRemainingCards(remainingSems, requiredSgpa);

    // Render Milestones Table
    renderUnifiedMilestones(completedQualityPoints, completedCredits, remainingCredits, totalDegreeCredits, maxPossibleCgpa, targetCgpa);

    // Render Grade Advice
    renderUnifiedGradeAdvice(requiredSgpa, remainingSems.length, targetCgpa, maxPossibleCgpa);

    // Show/hide Reset Custom Sliders button
    const resetOverridesBtn = document.getElementById('cgpa-reset-overrides-btn');
    if (resetOverridesBtn) {
        resetOverridesBtn.style.display = overriddenCount > 0 ? 'inline-flex' : 'none';
    }

    // Save state to localStorage
    localStorage.setItem('gmrit_unified_cgpa_state', JSON.stringify({
        branch,
        target: targetCgpa,
        sgpas: savedSgpas
    }));

    lucide.createIcons();
}

function updateUnifiedFeasibilityBanner(completedCount, remainingCount, requiredSgpa, targetCgpa, currentCgpa, maxPossibleCgpa) {
    const banner = document.getElementById('cgpa-feasibility-banner');
    const titleEl = document.getElementById('cgpa-feasibility-title');
    const descEl = document.getElementById('cgpa-feasibility-desc');
    const statusPill = document.getElementById('cgpa-status-pill');

    if (!banner || !titleEl || !descEl) return;

    banner.className = 'feasibility-banner my-3 p-2 rounded-3 text-center';

    if (completedCount === 8) {
        if (currentCgpa >= targetCgpa) {
            banner.classList.add('status-secured');
            titleEl.innerHTML = `🏆 Target Achieved (${currentCgpa.toFixed(2)} CGPA)`;
            descEl.textContent = `Congratulations! You have completed all 8 semesters achieving your goal!`;
        } else {
            banner.classList.add('status-moderate');
            titleEl.innerHTML = `🎓 8 Semesters Completed (${currentCgpa.toFixed(2)} CGPA)`;
            descEl.textContent = `All 8 semesters recorded. Final degree CGPA: ${currentCgpa.toFixed(2)}.`;
        }
        if (statusPill) statusPill.textContent = "Graduated";
        return;
    }

    if (completedCount === 0) {
        banner.classList.add('status-moderate');
        titleEl.textContent = `Target: ${targetCgpa.toFixed(2)} Required`;
        descEl.textContent = `Maintain an average SGPA of ${targetCgpa.toFixed(2)} across all 8 semesters.`;
        if (statusPill) statusPill.textContent = "Starting Degree";
        return;
    }

    if (statusPill) statusPill.textContent = `${completedCount} Sems Done`;

    if (requiredSgpa <= 0) {
        banner.classList.add('status-secured');
        titleEl.innerHTML = `🏆 Target Already Guaranteed!`;
        descEl.textContent = `Your strong standing locks in ${targetCgpa.toFixed(2)} CGPA even with minimum pass marks!`;
    } else if (requiredSgpa <= 5.0) {
        banner.classList.add('status-easy');
        titleEl.innerHTML = `🟢 Target Easily Achievable (${requiredSgpa.toFixed(2)} SGPA)`;
        descEl.textContent = `You only need a minimum pass SGPA of ${requiredSgpa.toFixed(2)} in remaining semesters.`;
    } else if (requiredSgpa <= 7.5) {
        banner.classList.add('status-easy');
        titleEl.innerHTML = `🟢 Easily Achievable (${requiredSgpa.toFixed(2)} SGPA)`;
        descEl.textContent = `Maintain steady consistency with ~${requiredSgpa.toFixed(2)} SGPA in upcoming semesters.`;
    } else if (requiredSgpa <= 8.5) {
        banner.classList.add('status-moderate');
        titleEl.innerHTML = `🔵 Moderate Effort Required (${requiredSgpa.toFixed(2)} SGPA)`;
        descEl.textContent = `Aim for ~${requiredSgpa.toFixed(2)} SGPA by scoring consistent A and B grades in all subjects.`;
    } else if (requiredSgpa <= 9.5) {
        banner.classList.add('status-hard');
        titleEl.innerHTML = `🟡 High Focus Required (${requiredSgpa.toFixed(2)} SGPA)`;
        descEl.textContent = `Target ~${requiredSgpa.toFixed(2)} SGPA. Requires predominantly S (10) and A (9) grades.`;
    } else if (requiredSgpa <= 10.0) {
        banner.classList.add('status-extreme');
        titleEl.innerHTML = `🟠 Maximum Push Needed (${requiredSgpa.toFixed(2)} SGPA)`;
        descEl.textContent = `Needs top-tier performance (~${requiredSgpa.toFixed(2)} SGPA) across all remaining subjects.`;
    } else {
        banner.classList.add('status-impossible');
        titleEl.innerHTML = `🔴 Target Out of Reach (Max: ${maxPossibleCgpa.toFixed(2)})`;
        descEl.textContent = `Even with 10.0 SGPA in remaining sems, highest CGPA is ${maxPossibleCgpa.toFixed(2)}. Adjust target accordingly.`;
    }
}

function renderUnifiedRemainingCards(remainingSems, requiredSgpa) {
    const container = document.getElementById('cgpa-remaining-cards');
    const forecastSection = document.getElementById('cgpa-remaining-forecast-section');

    if (!container) return;

    if (remainingSems.length === 0) {
        if (forecastSection) forecastSection.style.display = 'none';
        container.innerHTML = '';
        return;
    }

    if (forecastSection) forecastSection.style.display = 'block';
    container.innerHTML = '';

    remainingSems.forEach(item => {
        const isOverridden = whatIfOverrides[item.sem] !== undefined && whatIfOverrides[item.sem] !== null;
        const currentVal = isOverridden ? parseFloat(whatIfOverrides[item.sem]) : (requiredSgpa > 0 ? (requiredSgpa > 10 ? 10.0 : requiredSgpa) : 0);
        const displayReq = isOverridden 
            ? `<span class="badge bg-warning text-dark px-2 py-1">Custom: ${currentVal.toFixed(2)}</span>` 
            : (requiredSgpa > 10.0 ? `<span class="text-danger fw-bold fs-6">&gt; 10.0 (Unachievable)</span>` : (requiredSgpa <= 0 ? `<span class="text-success fw-bold fs-6">0.00 (Secured)</span>` : `<span class="pred-req-value">${requiredSgpa.toFixed(2)}</span>`));

        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="pred-sem-card remaining ${isOverridden ? 'is-customized' : ''} p-3 h-100">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="fw-bold text-uppercase" style="font-size: 0.78rem;">Semester ${item.sem} <span class="badge bg-secondary bg-opacity-25 text-muted" style="font-size: 0.6rem;">Upcoming</span></span>
                    <span class="badge bg-primary bg-opacity-10 text-primary" style="font-size: 0.65rem;">${item.credits} Credits</span>
                </div>
                
                <div class="d-flex justify-content-between align-items-baseline my-2">
                    <span class="text-muted extra-small">Forecasted SGPA:</span>
                    <div>${displayReq}</div>
                </div>

                <!-- What-if slider -->
                <div class="mt-2 pt-2 border-top border-primary border-opacity-10">
                    <div class="d-flex justify-content-between extra-small text-muted mb-1" style="font-size: 0.68rem;">
                        <span><i data-lucide="sliders" style="width: 10px;"></i> What-If Slider:</span>
                        <span class="fw-bold" id="slider-val-sem-${item.sem}">${currentVal.toFixed(2)} SGPA</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <input type="range" class="form-range what-if-slider flex-grow-1" 
                               min="4.0" max="10.0" step="0.05" 
                               value="${currentVal.toFixed(2)}" 
                               oninput="onWhatIfSliderChange(${item.sem}, this.value)">
                        ${isOverridden ? `<button class="btn btn-xs btn-outline-warning py-0 px-1" onclick="clearWhatIfOverride(${item.sem})" title="Reset to auto required SGPA"><i data-lucide="x" style="width: 10px;"></i></button>` : ''}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function onWhatIfSliderChange(sem, value) {
    whatIfOverrides[sem] = parseFloat(value);
    const label = document.getElementById(`slider-val-sem-${sem}`);
    if (label) label.textContent = `${parseFloat(value).toFixed(2)} SGPA`;
    calculateUnifiedCgpa();
}

function clearWhatIfOverride(sem) {
    delete whatIfOverrides[sem];
    calculateUnifiedCgpa();
}

function resetUnifiedOverrides() {
    whatIfOverrides = {};
    calculateUnifiedCgpa();
}

function renderUnifiedMilestones(completedPoints, completedCredits, remainingCredits, totalCredits, maxPossibleCgpa, targetCgpa) {
    const tbody = document.getElementById('cgpa-milestones-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    const milestones = [
        { goal: 5.75, name: "Second Class" },
        { goal: 6.75, name: "First Class" },
        { goal: 7.75, name: "Distinction (1st Class)" },
        { goal: 8.00, name: "8.00 CGPA" },
        { goal: 8.50, name: "8.50 CGPA" },
        { goal: 9.00, name: "9.00 CGPA" },
        { goal: 9.50, name: "9.50 CGPA" }
    ];

    milestones.forEach(m => {
        let reqSgpaDisplay = '';
        if (remainingCredits === 0) {
            const currentCgpa = completedCredits > 0 ? (completedPoints / completedCredits) : 0;
            reqSgpaDisplay = currentCgpa >= m.goal 
                ? `<span class="badge bg-success bg-opacity-10 text-success">Achieved</span>` 
                : `<span class="text-muted">N/A</span>`;
        } else {
            const neededTotalPoints = m.goal * totalCredits;
            const neededRemPoints = neededTotalPoints - completedPoints;
            const req = neededRemPoints / remainingCredits;

            if (req <= 5.0) {
                reqSgpaDisplay = `<span class="badge bg-success bg-opacity-10 text-success">Secured (Pass)</span>`;
            } else if (req <= 10.0) {
                reqSgpaDisplay = `<span class="fw-bold ${req > 9.0 ? 'text-warning' : 'text-primary'}">${req.toFixed(2)}</span>`;
            } else {
                reqSgpaDisplay = `<span class="text-danger" style="font-size: 0.72rem;">Out of Reach</span>`;
            }
        }

        const isTarget = Math.abs(m.goal - targetCgpa) < 0.01;
        const tr = document.createElement('tr');
        if (isTarget) tr.className = 'target-row';

        tr.innerHTML = `
            <td class="fw-bold">${m.goal.toFixed(2)} ${isTarget ? '<span class="badge bg-primary ms-1" style="font-size: 0.55rem;">YOUR TARGET</span>' : ''}</td>
            <td class="text-muted">${m.name}</td>
            <td class="text-end">${reqSgpaDisplay}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderUnifiedGradeAdvice(requiredSgpa, remainingCount, targetCgpa, maxPossibleCgpa) {
    const adviceEl = document.getElementById('cgpa-grade-advice');
    if (!adviceEl) return;

    if (remainingCount === 0) {
        adviceEl.innerHTML = `
            <div class="d-flex align-items-center gap-2 text-success">
                <i data-lucide="check-circle-2" style="width: 16px;"></i>
                <span>All 8 semester SGPAs entered. Degree journey complete!</span>
            </div>
        `;
        return;
    }

    if (requiredSgpa > 10.0) {
        adviceEl.innerHTML = `
            <div class="text-danger mb-1 fw-bold"><i data-lucide="alert-triangle" style="width: 14px;"></i> Target Above Maximum Bound</div>
            <div>The target CGPA of <strong>${targetCgpa.toFixed(2)}</strong> exceeds the maximum achievable CGPA of <strong>${maxPossibleCgpa.toFixed(2)}</strong>. To maximize your outcome, target straight <strong>S Grades (10 points)</strong> in all future subjects!</div>
        `;
    } else if (requiredSgpa >= 9.5) {
        adviceEl.innerHTML = `
            <div class="text-warning mb-1 fw-bold">🎯 Extreme Focus: Straight S Grades</div>
            <div>To hit <strong>${requiredSgpa.toFixed(2)} SGPA</strong>, you will need nearly all <strong>S Grades (10.0)</strong> with at most one <strong>A Grade (9.0)</strong> per semester. Aim for 35+ in internals and 65+ in semester end exams (SEE).</div>
        `;
    } else if (requiredSgpa >= 8.5) {
        adviceEl.innerHTML = `
            <div class="text-info mb-1 fw-bold">🎯 High Performance: S &amp; A Grade Mix</div>
            <div>To reach <strong>${requiredSgpa.toFixed(2)} SGPA</strong>, aim for a distribution of approx <strong>60% S Grades (10.0)</strong> and <strong>40% A Grades (9.0)</strong> across all major theory and laboratory subjects.</div>
        `;
    } else if (requiredSgpa >= 7.5) {
        adviceEl.innerHTML = `
            <div class="text-primary mb-1 fw-bold">🎯 Balanced Strategy: A &amp; B Grades</div>
            <div>To reach <strong>${requiredSgpa.toFixed(2)} SGPA</strong>, target a solid mix of <strong>A Grades (9.0)</strong> and <strong>B Grades (8.0)</strong>. Consistently score 25+ in internals to make semester exams smooth.</div>
        `;
    } else {
        adviceEl.innerHTML = `
            <div class="text-success mb-1 fw-bold">🎯 Comfortable Target: Consistent Pass &amp; B Grades</div>
            <div>Maintaining average <strong>B &amp; C grades (7.0 - 8.0)</strong> and clearing all subjects without backlogs will easily secure your target CGPA of <strong>${targetCgpa.toFixed(2)}</strong>!</div>
        `;
    }
}

function loadUnifiedCgpaDemo() {
    const branchSelect = document.getElementById('cgpa-branch-select');
    if (branchSelect) branchSelect.value = 'CSE';
    
    const targetInput = document.getElementById('cgpa-target-input');
    if (targetInput) targetInput.value = '8.75';

    renderUnifiedCgpaSemesterCards();

    // Fill Sem 1-4 demo values
    const demoValues = { 1: "8.20", 2: "8.45", 3: "8.60", 4: "8.70" };
    for (let i = 1; i <= 8; i++) {
        const inp = document.getElementById(`sem-sgpa-input-${i}`);
        if (inp) {
            inp.value = demoValues[i] || '';
        }
    }

    whatIfOverrides = {};
    calculateUnifiedCgpa();
}

function resetUnifiedCgpa() {
    for (let i = 1; i <= 8; i++) {
        const inp = document.getElementById(`sem-sgpa-input-${i}`);
        if (inp) inp.value = '';
    }
    whatIfOverrides = {};
    localStorage.removeItem('gmrit_unified_cgpa_state');
    calculateUnifiedCgpa();
}

async function copyUnifiedCgpaSummary() {
    const currentCgpa = document.getElementById('cgpa-result-val') ? document.getElementById('cgpa-result-val').textContent : '0.00';
    const targetCgpa = document.getElementById('cgpa-target-input') ? document.getElementById('cgpa-target-input').value : '8.50';
    const reqSgpa = document.getElementById('cgpa-req-sgpa-val') ? document.getElementById('cgpa-req-sgpa-val').textContent : '0.00';
    const credits = document.getElementById('cgpa-credits-val') ? document.getElementById('cgpa-credits-val').textContent : '0/160';
    const maxCgpa = document.getElementById('cgpa-max-cgpa-val') ? document.getElementById('cgpa-max-cgpa-val').textContent : '10.00';

    const text = `📊 GMRIT Academic Plan Summary\n• Current CGPA: ${currentCgpa}\n• Credits Completed: ${credits}\n• Desired Target 8-Sem CGPA: ${targetCgpa}\n• Required SGPA for Remaining Sems: ${reqSgpa}\n• Max Possible CGPA: ${maxCgpa}\nGenerated via GMRIT Marks Calculator`;

    try {
        await navigator.clipboard.writeText(text);
        const icon = document.getElementById('cgpa-copy-icon');
        if (icon) {
            icon.setAttribute('data-lucide', 'check');
            lucide.createIcons();
            setTimeout(() => {
                icon.setAttribute('data-lucide', 'copy');
                lucide.createIcons();
            }, 2000);
        }
        alert('Academic Prediction Summary copied to clipboard!');
    } catch (e) {
        console.error('Clipboard copy failed:', e);
    }
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

// Results Portal
const RESULTS_URL = "https://gmrit.edu.in/examination/results.php";
const RESULTS_DIRECT_URL = "http://115.241.205.4/examresults/BTechReg4thSemApr2026Batch2024Rnd2s7ns.aspx";

let resultsLoaded = false;

function loadResultsInFrame() {
    const iframe = document.getElementById('results-iframe');
    const wrap = document.getElementById('results-iframe-wrap');
    const loading = document.getElementById('results-loading');
    const notice = document.getElementById('results-blocked-notice');

    if (!iframe) return;

    // Show spinner, hide iframe & notice
    if (loading) loading.classList.remove('hidden');
    if (wrap) wrap.classList.add('hidden');
    if (notice) notice.classList.add('hidden');

    // Load the URL with cache-busting only on refresh
    iframe.src = RESULTS_URL;

    // Safety timeout — if nothing happens in 10s, show blocked notice
    clearTimeout(window._resultsTimeout);
    window._resultsTimeout = setTimeout(() => {
        const stillLoading = loading && !loading.classList.contains('hidden');
        if (stillLoading) handleIframeError();
    }, 10000);
}

function refreshResults() {
    resultsLoaded = false;
    const iframe = document.getElementById('results-iframe');
    if (iframe) iframe.src = 'about:blank';
    setTimeout(loadResultsInFrame, 100);
}

function handleIframeLoad(iframe) {
    clearTimeout(window._resultsTimeout);

    const loading = document.getElementById('results-loading');
    const wrap = document.getElementById('results-iframe-wrap');
    const notice = document.getElementById('results-blocked-notice');

    // If src is still about:blank, ignore
    if (!iframe.src || iframe.src === 'about:blank') return;

    // Try to detect a blocked/empty page (same-origin only)
    try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body && doc.body.innerHTML.trim() === '') {
            handleIframeError();
            return;
        }
    } catch (e) {
        // Cross-origin — assume loaded successfully
    }

    // Show iframe, hide spinner
    if (loading) loading.classList.add('hidden');
    if (notice) notice.classList.add('hidden');
    if (wrap) wrap.classList.remove('hidden');
    resultsLoaded = true;
}

function handleIframeError() {
    clearTimeout(window._resultsTimeout);
    const loading = document.getElementById('results-loading');
    const wrap = document.getElementById('results-iframe-wrap');
    const notice = document.getElementById('results-blocked-notice');

    if (loading) loading.classList.add('hidden');
    if (wrap) wrap.classList.add('hidden');
    if (notice) {
        notice.classList.remove('hidden');
        lucide.createIcons();
    }
}



// --- Review System Logic ---

function openReviewModal() {
    const overlay = document.getElementById('review-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.style.opacity = '1', 10);
    }
}

function closeReviewModal() {
    const overlay = document.getElementById('review-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.classList.add('hidden'), 500);
        localStorage.setItem('review_dismissed', 'true');
    }
}

function setRating(rating) {
    document.getElementById('review-rating').value = rating;
    const stars = document.querySelectorAll('.star-rating');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.fill = '#f59e0b';
            star.style.color = '#f59e0b';
        } else {
            star.style.fill = 'none';
            star.style.color = '#6c757d'; // muted color
        }
    });
}

async function submitReview() {
    const text = document.getElementById('review-text').value.trim();
    const rating = document.getElementById('review-rating').value;
    const name = localStorage.getItem('calculator_user_name') || 'Anonymous';
    
    if (!text) {
        alert('Please enter a review text.');
        return;
    }
    
    if (rating === '0' || !rating) {
        alert('Please select a star rating.');
        return;
    }
    
    const btn = document.getElementById('submit-review-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<div class="spinner-border spinner-border-sm" role="status"></div> Submitting...';
    btn.disabled = true;

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, rating, text })
        });

        if (!response.ok) throw new Error('Submission failed');
        
        alert('Thank you for your review!');
        document.getElementById('review-text').value = '';
        localStorage.setItem('review_submitted', 'true');
        closeReviewModal();
    } catch (e) {
        console.error('Review submission error:', e);
        alert('Failed to submit review. Please try again later.');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// --- Admin Dashboard Additions ---

function showAdminTab(tabName) {
    document.getElementById('admin-visitors-btn').classList.remove('active');
    document.getElementById('admin-reviews-btn').classList.remove('active');
    
    document.getElementById(`admin-${tabName}-btn`).classList.add('active');
    
    document.getElementById('visitor-list-content').classList.add('hidden');
    document.getElementById('review-list-content').classList.add('hidden');
    
    if (tabName === 'visitors') {
        document.getElementById('visitor-list-content').classList.remove('hidden');
    } else if (tabName === 'reviews') {
        document.getElementById('review-list-content').classList.remove('hidden');
        loadReviews();
    }
}

async function loadReviews() {
    const content = document.getElementById('review-list-content');
    content.innerHTML = `
        <div class="text-center py-5">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-2 text-muted">Fetching reviews...</p>
        </div>
    `;

    try {
        const response = await fetch('/api/reviews');
        if (!response.ok) throw new Error('Failed to fetch reviews');
        
        const reviews = await response.json();
        
        if (reviews.length === 0) {
            content.innerHTML = '<p class="text-center text-muted py-5">No reviews yet.</p>';
            return;
        }

        let html = '<div class="list-group list-group-flush mb-4">';
        reviews.forEach(review => {
            let starsHtml = '';
            for(let i=0; i<5; i++) {
                if(i < review.rating) {
                    starsHtml += '<i data-lucide="star" style="width: 14px; color: #f59e0b; fill: #f59e0b;"></i>';
                } else {
                    starsHtml += '<i data-lucide="star" style="width: 14px; color: #6c757d;"></i>';
                }
            }
            
            html += `
                <div class="list-group-item bg-transparent border-primary border-opacity-10 py-3 px-0">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <div class="fw-bold text-white">${review.name || 'Anonymous'}</div>
                        <div class="text-muted small" style="font-size: 0.65rem;">${new Date(review.timestamp).toLocaleString()}</div>
                    </div>
                    <div class="mb-2">${starsHtml}</div>
                    <p class="mb-0 text-muted small" style="word-break: break-word;">${review.text}</p>
                </div>
            `;
        });
        html += '</div>';
        
        content.innerHTML = html;
        lucide.createIcons();
    } catch (e) {
        console.error("Reviews fetch failed:", e);
        content.innerHTML = `
            <div class="alert alert-warning">
                Unable to load reviews. Please try again.
            </div>
        `;
    }
}
