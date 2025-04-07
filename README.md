# 🔐 Full Stack Authentication App (NestJS + React + TypeScript)

A secure, production-ready full-stack authentication application featuring a backend built with **NestJS** and a frontend built with **React + TypeScript**.

---

## ✨ Features

### ✅ Backend (NestJS)
- User Sign-Up & Sign-In
- Password hashing with Bcrypt
- JWT-based authentication
- Protected route: `/users/profile`
- CORS enabled for cross-origin access
- Global error handling
- Rate limiting (brute-force protection)
- Swagger documentation
- MongoDB integration via Mongoose

### ✅ Frontend (React + Vite + TypeScript)
- Sign-Up & Sign-In forms with real-time validation
- Form validation using Zod + React Hook Form
- Axios-based API calls
- Welcome page after login
- Token handling via `localStorage`
- Route navigation with React Router
- Logout button
- Global SCSS styling with custom Google Fonts

---

## 🧰 Tech Stack

| Layer     | Tech                                   |
|-----------|----------------------------------------|
| Frontend  | React, TypeScript, Vite, SCSS, Zod     |
| Backend   | NestJS, TypeScript, Mongoose, Bcrypt   |
| Auth      | JWT                                     |
| DB        | MongoDB                                 |
| Docs      | Swagger (OpenAPI)                       |

---

## ⚙️ Getting Started

### 📦 Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally or on cloud (e.g. MongoDB Atlas)

---

## 📁 Backend Setup

```bash
cd authentication
npm install

### 🔐 Create `.env` in the root of the backend:

```env
MONGO_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=supersecret
PORT=3000

### 🚀 Run the server
npm run start:dev

### 📚 Swagger Docs
Access at: http://localhost:3000/api

### 💻 Frontend Setup
cd auth-frontend
npm install

### 🚀 Run the app
npm run dev

Access at: http://localhost:5173

### ✅ Bonus Features
- Rate limiting with @nestjs/throttler

- Global error handling filter

- Custom SCSS styling

- Google Fonts support

- Responsive design-ready

