# GMRIT AR23 Academic Calculator

A comprehensive tool for GMRIT (AR23 Regulation) students to calculate SGPA, CGPA, and predict required SEE marks for various course types (Theory, Lab, and Integrated).

## Features
- **Internal Predictor**: Calculate required SEE marks based on mid-term performance.
- **SGPA Calculator**: Pre-loaded syllabus for all semesters.
- **Professional Electives**: Dynamic selection for Career Paths (AI&ML, Full Stack, Cyber Security, Cloud Computing).
- **CGPA Calculator**: Automatic calculation of overall CGPA with class classification.
- **Results Portal**: Quick access to official university results.
- **Print Optimization**: Generate clean, single-page reports for SGPA and Internal predictions.


## 🚀 Live Demo
[gmritmarks.vercel.app](https://gmritmarks.vercel.app/)

## ✨ Key Features

- **Multi-Branch Support**: Pre-loaded curriculum for **CSE, ECE, and IT** departments.
- **Internal Predictor**: Calculate exactly how many marks you need in SEE (Semester End Exams) to achieve your target grade based on your internal performance.
- **SGPA Calculator**: Fully automated SGPA calculation with branch-specific subjects for all 8 semesters.
- **Professional Electives**: Dynamic elective selection based on Career Paths:
  - AI & ML
  - Full Stack Development
  - Cyber Security
  - Cloud Computing
- **CGPA Tracker**: Calculate your overall CGPA with automatic credit weighting and degree classification (Distinction, First Class, etc.).
- **Global Visitor Log**: A real-time public log of users visiting the application (powered by Firebase).
- **Modern UI**: A responsive, dark-themed "Glassmorphism" interface optimized for both mobile and desktop use.
- **Print Friendly**: Generate and print clean reports for your SGPA and internal predictions.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Bootstrap 5), JavaScript (ES6+)
- **Icons**: Lucide Icons
- **Backend**: Vercel Serverless Functions (Node.js)
- **Database**: MongoDB Atlas (for visitor logs)
- **APIs**: CounterAPI (for global hit tracking)
- **Deployment**: Vercel

## ⚙️ Configuration

To make the MongoDB connection work, you need to set the following environment variable in your Vercel project dashboard:

- `MONGODB_URI`: `mongodb+srv://marks:<your_password>@marks.vl8wfwx.mongodb.net/?appName=marks`

## 📖 How to Use

1. **Internal Tab**: Select your course type (Theory/Lab/Integrated), enter your mid marks, and see required SEE marks for each grade.
2. **SGPA Tab**: Select your **Branch**, **Semester**, and **Career Path** (if applicable). Enter your grades to see your SGPA instantly.
3. **CGPA Tab**: Your semester credits are automatically fetched based on your branch. Enter your SGPAs to see your cumulative performance.

## 📝 License
Created for GMRIT Students. 


## Deployment
Deployed on Vercel: [gmritmarks.vercel.app](https://gmritmarks.vercel.app/)
