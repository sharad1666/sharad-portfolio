# 🚀 Sharad Kumar Yadav – Personal Portfolio

This repository contains my **full-stack personal portfolio website**, built to showcase my projects, blogs, resume, and **live LeetCode achievements**.

The project is developed using **React (Vite)** for the frontend and **Node.js + Express** for the backend, all maintained in a **single GitHub repository**.

---

## 🌐 Live Demo

- **Portfolio Website:** https://<your-frontend-url>
- **Backend API:** https://sharad-portfolio-backend.onrender.com/leetcode
- **LeetCode Profile:** https://leetcode.com/u/yadavsharad172
- **GitHub Profile:** https://github.com/sharad1666

---

## ✨ Features

### 🔹 Frontend (React + Vite)
- Responsive, modern UI with Tailwind CSS
- Smooth animations using Framer Motion
- Pages:
  - Home
  - Projects
  - Blog (Markdown-based)
  - LeetCode (Live stats)
  - Resume (PDF)
- SPA routing using React Router

### 🔹 Backend (Node.js + Express)
- Fetches **live LeetCode data** using official GraphQL API
- Normalized API response for frontend safety
- Handles:
  - Solved problem counts (Easy / Medium / Hard / Total)
  - Contest rating & participation
  - Badge names
- Deployed on **Render**

---

## 🧠 LeetCode Integration (Live Data)

The LeetCode page displays **real-time data**, including:
- Total problems solved
- Difficulty-wise breakdown
- Contest rating
- Contests attended
- Badge names

> Direct frontend access to LeetCode is blocked due to CORS, so a backend proxy is used to securely fetch data.

---

## 🗂 Project Structure

```text
sharad-portfolio/
│
├── frontend/              # React (Vite) frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # Node.js + Express backend
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
└── README.md
⚙️ Tech Stack
Frontend

React

Vite

Tailwind CSS

Framer Motion

React Router

Backend

Node.js

Express

Axios

LeetCode GraphQL API

Deployment

Render (Frontend & Backend)

GitHub (Single repository)

▶️ Running Locally
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/sharad1666/sharad-portfolio.git
cd sharad-portfolio
2️⃣ Start Backend
bash
Copy code
cd backend
npm install
node server.js
Backend runs at:

arduino
Copy code
http://localhost:5000
3️⃣ Start Frontend
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs at:

arduino
Copy code
http://localhost:5173
🚀 Deployment Notes
Frontend and backend are deployed from the same GitHub repository

SPA routing is handled using a _redirects file

Backend may take a few seconds to wake up on free Render tier

📌 Why This Project?
This portfolio demonstrates:

Full-stack development skills

API integration using GraphQL

Real-world deployment workflow

Clean UI/UX design

Production-ready error handling

👨‍💻 Author
Sharad Yadav
PG-DAC Student @ CDAC ACTS Pune
Software Developer | Full-Stack | Problem Solver

GitHub: https://github.com/sharad1666

LeetCode: https://leetcode.com/u/yadavsharad172

