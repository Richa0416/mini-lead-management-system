# 🚀 Mini Lead Management CRM

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing customer leads efficiently. Users can create, view, update, delete, search, paginate, and export leads in CSV format.

---

## 🌐 Live Demo

**Frontend:** https://mini-lead-management-system-git-main-richa-s-projects3.vercel.app/

**Backend API:** https://mini-crm-backend-tq51.onrender.com

---

## ✨ Features

### 📊 Dashboard
- Displays the total number of leads.
- Shows the total number of unique companies.
- Updates automatically whenever a lead is added, edited, or deleted.

---

### ➕ Add New Lead
- Create a new lead by entering:
  - Name
  - Email
  - Phone Number
  - Company
- Validates all required fields before submission.
- Ensures email format is valid.
- Accepts only 10-digit phone numbers.
- Displays success/error notifications using React Toastify.

---

### ✏️ Edit Lead
- Edit any existing lead with a single click.
- Form automatically loads the selected lead's information.
- Updates are reflected instantly in both the database and UI.

---

### 🗑️ Delete Lead
- Delete leads securely.
- Displays a confirmation dialog before deletion.
- Automatically refreshes the lead list after successful deletion.

---

### 🔍 Search Functionality
- Search leads in real time.
- Search works across:
  - Name
  - Email
  - Company
- Results update instantly as the user types.

---

### 📄 Pagination
- Displays **5 leads per page**.
- Previous and Next buttons for smooth navigation.
- Automatically updates page count after search, addition, or deletion.

---

### 📥 Export to CSV
- Export all filtered leads into a CSV file.
- Downloads include:
  - Name
  - Email
  - Phone Number
  - Company

---

### 🔔 Toast Notifications
- Success notification after:
  - Adding a lead
  - Updating a lead
  - Deleting a lead
- Warning notifications for invalid input.
- Error notifications for failed API requests.

---

### 📱 Responsive UI
- Fully responsive design.
- Optimized for:
  - Desktop
  - Tablet
  - Mobile devices

---

### 🌐 REST API Integration
- Complete CRUD operations using Express.js APIs.
- Axios used for frontend-backend communication.
- MongoDB Atlas used for persistent cloud storage.

---

### ☁️ Deployment
- Frontend deployed on **Vercel**.
- Backend deployed on **Render**.
- Database hosted on **MongoDB Atlas**.
- Live application accessible from anywhere.

---

### 🛡️ Form Validation
- Required field validation.
- Email format validation.
- Phone number validation (10 digits).
- Prevents invalid data from being submitted.

---

### 💾 Persistent Database
- Lead data is stored securely in MongoDB Atlas.
- Data remains available after page refreshes or application restarts.

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
