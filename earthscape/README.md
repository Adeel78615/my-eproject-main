# EarthScape Climate Intelligence Platform

A comprehensive, production-grade web application for monitoring global climate change.

## Tech Stack & Architecture

- **Frontend**: Next.js 16 (App Router), Tailwind CSS, Zustand, NextAuth.js
- **Backend**: Python FastAPI, Motor (Async MongoDB), Socket.io (ASGI), PyJWT, bcrypt
- **Database**: MongoDB
- **Real-Time Data**: Socket.io real-time feed streaming live data updates every 3 seconds from backend to frontend
- **ML Analytics**: Anomaly detection (Z-Score), Trend Prediction (Linear Regression), and Correlation Matrix (Pearson) ported 1:1 to Python

---

## Directory Structure

```
earthscape/
├── frontend/               # Next.js Web App
└── backend/                # FastAPI Python Backend
```

---

## Setup & Running Instructions

### 1. Database Setup
Make sure you have MongoDB running locally at `mongodb://localhost:27017`.

### 2. Backend (FastAPI) Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv .venv
   # Windows:
   .venv\Scripts\activate
   # macOS/Linux:
   source .venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Seed the database (generates sample users, alerts, readings, and reports):
   ```bash
   python seed.py
   ```
5. Start the FastAPI server (running on port `8000` with Socket.io ASGI app):
   ```bash
   python main.py
   ```

### 3. Frontend (Next.js) Setup
1. Navigate to the frontend folder in a new terminal window:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Run the development server (running on port `3000` proxying API and socket calls to backend):
   ```bash
   npm run dev
   ```

---

## Demo Credentials

- **Admin**: `admin@earthscape.io` / `password123`
- **Analyst**: `james@earthscape.io` / `password123`
- **Viewer**: `emily@earthscape.io` / `password123`

