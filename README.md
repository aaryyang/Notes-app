# Notes App (MERN Stack)

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). This project allows users to create, view, update, and delete notes with a modern, responsive UI.

---

## Features
- Create, read, update, and delete notes
- Responsive and modern UI (Tailwind CSS + DaisyUI)
- RESTful API with Express.js
- MongoDB for persistent storage
- Rate limiting with Upstash Redis
- Toast notifications for user feedback

---

## Tech Stack
- **Frontend:** React, Tailwind CSS, DaisyUI, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), Upstash Redis, dotenv

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas account (or local MongoDB)
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Notes-app.git
   cd Notes-app
   ```

2. **Install dependencies:**
   ```bash
   npm install --prefix BACKEND
   npm install --prefix FRONTEND
   ```

3. **Set up environment variables:**
   - In `BACKEND/.env`:
     ```env
     MONGO_URI=your_mongodb_connection_string
     UPSTASH_REDIS_REST_URL=your_upstash_redis_url
     UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
     ```

4. **Run the app locally:**
   - Start backend:
     ```bash
     npm run dev --prefix BACKEND
     ```
   - Start frontend (in a new terminal):
     ```bash
     npm run dev --prefix FRONTEND
     ```

---

## Usage
- Visit the home page to view all notes
- Click "Create New Note" to add a note
- Click on a note to view or edit
- Delete notes as needed

---

## Deployment
- You can deploy this app on Render, Vercel, or any platform that supports Node.js and static site hosting.
- Make sure to set environment variables in your deployment settings.

---

## Credits
- Built with help from [freeCodeCamp.org](https://www.freecodecamp.org/)
- Thanks to MongoDB Atlas, Upstash, Tailwind CSS, and DaisyUI

---

## License
MIT
