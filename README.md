# Meghana Dasari — Personal Portfolio

A modern personal portfolio website built to showcase my skills, projects, and experience in software development, artificial intelligence, and data science.

## 🚀 Tech Stack

**Frontend**
- React.js
- Vite
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## ✨ Features

- Personal introduction and portfolio sections
- Projects showcase
- Contact form connected to a backend API
- Contact messages stored in MongoDB Atlas
- REST API integration
- Environment-based configuration for sensitive credentials

## 📁 Project Structure

```text
meghana-portfolio/
├── frontend/
│   ├── public/
│   └── src/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/meghana-1603/meghana-portfolio.git
cd meghana-portfolio
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your own connection string. Never commit your `.env` file or publish database credentials.

Start the backend:

```bash
node server.js
```

The backend runs at `http://localhost:5000`.

### 3. Set up the frontend

Open a second terminal from the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 📬 Contact Form

The contact form sends user-submitted information to the Express backend through a REST API. The backend validates the required fields and stores contact messages in MongoDB Atlas.

## 🔐 Security

- Database credentials are stored in environment variables.
- The backend `.env` file is excluded using `.gitignore`.
- Never share database passwords or commit secret credentials.

## 👩‍💻 Author

**Meghana Dasari**

B.Tech — Data Science and Artificial Intelligence

GitHub: [@meghana-1603](https://github.com/meghana-1603)

---

Thank you for visiting my portfolio repository!
