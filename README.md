# 🚀 Mini Lead Management CRM

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing customer leads efficiently. Users can create, view, update, delete, search, paginate, and export leads in CSV format.

---

## 🌐 Live Demo

**Frontend:** https://mini-lead-management-system-git-main-richa-s-projects3.vercel.app/

**Backend API:** https://mini-crm-backend-tq51.onrender.com

---

## ✨ Features

- ✅ Add new leads
- ✅ Edit existing leads
- ✅ Delete leads
- ✅ Search leads by Name, Email, or Company
- ✅ Pagination
- ✅ Export leads to CSV
- ✅ Form validation
- ✅ Responsive UI
- ✅ Toast notifications
- ✅ MongoDB Atlas integration
- ✅ REST API

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- React Toastify
- React CSV
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```
mini-crm/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

### Backend Setup

```bash
cd server

npm install
```

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string

PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client

npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/leads` | Get all leads |
| POST | `/api/leads` | Create a lead |
| PUT | `/api/leads/:id` | Update a lead |
| DELETE | `/api/leads/:id` | Delete a lead |

---

## 📷 Features Preview

- Dashboard
- Add Lead Form
- Search Leads
- Edit Lead
- Delete Lead
- Pagination
- Export CSV

---

## 🚀 Future Improvements

- Authentication (JWT)
- Lead Status Management
- Dashboard Analytics
- Sorting
- Advanced Filters
- Dark Mode
- User Roles
- Email Notifications

---

## 👩‍💻 Author

**Richa Ranjan**


---

## 📄 License

This project is developed for learning purposes.
