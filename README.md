# College Dispensary Management System
### Motilal Nehru National Institute of Technology, Allahabad

A web-based dispensary management system for MNNIT Allahabad that allows students to view their medical history and enables admin/staff to manage records, medicines, and dispensary operations.

---

## Tech Stack

**Frontend:** React.js, Vite, Material UI, Axios, React Router, React Toastify

**Backend:** Node.js, Express.js

**Database:** MongoDB (Mongoose)

**Authentication:** JWT (JSON Web Tokens) + HTTP-only Cookies

---

## Features

### Student
- Login and view personal medical history
- View dispensary facilities
- View nearby hospitals
- View gallery and events

### Admin / Staff
- Register and manage students
- Add and manage medicines (Stock View)
- Add medical history records for students
- View records by date/month/year
- Search student history by roll number
- Manage dispensary staff
- Upload gallery images
- Post new events/notifications

---

## Project Structure

    College-Dispensary-Management-System/
    ├── backend/
    │   ├── Authentication/      # JWT auth middleware
    │   ├── Controllers/         # Business logic
    │   ├── Models/              # MongoDB schemas
    │   ├── Routes/              # API routes
    │   ├── index.js             # Server entry point
    │   └── .env                 # Environment variables
    │
    └── frontendDispensary/
        └── src/
            ├── components/      # Reusable components
            ├── pages/
            │   ├── Admin/       # Admin pages
            │   ├── Student/     # Student dashboard
            │   ├── Home/        # Public home page
            │   └── Login/       # Login & Register
            └── App.jsx

---

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB connection (local or Atlas)

### Backend Setup

    cd backend
    npm install

Create a `.env` file in the `backend` folder:

    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    EMAIL=your_gmail@gmail.com
    EMAIL_PASSWORD=your_gmail_app_password

Start the backend:

    node index.js

### Frontend Setup

    cd frontendDispensary
    npm install
    npm run dev

Frontend runs on: `http://localhost:5173`  
Backend runs on: `http://localhost:4000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/logout` | Logout |
| POST | `/api/auth/register` | Student Register |
| GET | `/api/history/get` | Get student history |
| GET | `/api/history/get-history` | Get history by date |
| POST | `/api/history/add` | Add medical record |
| GET | `/api/medicine/get` | Get all medicines |
| GET | `/api/facility/get` | Get facilities |
| GET | `/api/hospital/get` | Get nearby hospitals |

---

## Team

Developed as a college group project.

---

## Institution

**Motilal Nehru National Institute of Technology (MNNIT)**  
Prayagraj, UP - 211004
