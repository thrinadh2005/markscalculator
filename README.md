# GMRIT AR23 Academic Portal 🚀

A high-performance, feature-rich academic management tool tailored for GMRIT students under the **AR23 Regulation**. This portal provides everything from advanced mark predictions and SGPA/CGPA calculations to an AI-driven study planner with offline support.

## 🚀 Live Demo
**[gmritmarks.vercel.app](https://gmritmarks.vercel.app/)**

---

## ✨ Key Features

### 1. Internal Marks Predictor
*   **Target-Driven Analysis**: Calculate exactly how many marks you need in your SEE (Semester End Exams) to achieve your target grade.
*   **Multi-Course Support**: Specialized logic for **Theory (30M)**, **Lab (30M)**, and **Integrated (40M)** course types.
*   **Dynamic Formula**: Uses the exact AR23 formula: `(0.8 * Better + 0.2 * Other) / 40 * 20 + Assignment (30→10)`.

### 2. SGPA & CGPA Calculators
*   **Automated Syllabus**: Pre-loaded curriculum for **CSE, ECE, IT, AI&DS, and AI&ML** for all 8 semesters.
*   **Career Path Support**: Integrated elective management for paths like Full Stack, Cyber Security, and Cloud Computing.
*   **Smart CGPA Tracker**: Automatic credit weighting and degree classification (Distinction, First Class, etc.).

### 3. AI-Driven Study Planner 🧠
*   **Exam-Driven Scheduling**: Generate intelligent study schedules based on exam dates, subject difficulty, and priority.
*   **Dynamic Sessions**: AI analyzes your complexity scoring to recommend optimal session lengths and break intervals.
*   **Dashboards**: Track total study hours, upcoming exams, and preparation progress.

### 4. Advanced Technical Features
*   **Offline First**: Powered by **IndexedDB**, ensuring your data is saved and accessible even without an internet connection.
*   **Real-time Visitor Tracking**: Robust global visitor counter and public history log powered by **MongoDB Atlas**.
*   **Glassmorphism UI**: A premium, responsive dark-themed interface built for a "state-of-the-art" user experience.
*   **Print Ready**: Optimized CSS for generating clean PDF reports of your predictions and results.

---

## 🛠️ Technology Stack

-   **Frontend**: HTML5, Vanilla CSS3 (Glassmorphism), JavaScript (ES6+)
-   **Storage**: IndexedDB (Local/Offline)
-   **Backend**: Node.js via Vercel Serverless Functions
-   **Database**: MongoDB Atlas (Global Stats & Visitor Logs)
-   **Icons**: Lucide Icons
-   **Deployment**: Vercel

---

## ⚙️ Configuration & Deployment

To run this project locally or on your own Vercel instance:

1.  **Environment Variables**:
    Set the following in your Vercel Dashboard or `.env` file:
    - `MONGODB_URI`: Your MongoDB Atlas connection string.

2.  **Vercel Serverless Architecture**:
    The project uses the `api/` directory for serverless functions handling stats and visitor logs.

---

## 👨‍💻 Author
**ADABALA VENKATA THRINADH**
*   [LinkedIn](https://www.linkedin.com/in/venkatathrinadh/)

---

## 📝 License
Created for GMRIT Students. Optimized for high performance and premium aesthetics.
