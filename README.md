# 🤖 AI Chatbot – Full Stack (ChatGPT / Gemini Style)

A modern full-stack AI chatbot built using **React (Vite)** and **FastAPI**, featuring a ChatGPT-style interface with a Gemini-inspired landing screen and Markdown support.

---

## 🚀 Features

* 💬 ChatGPT-style chat interface
* ✨ Gemini-inspired clean landing screen
* 🌙 Dark / Light theme toggle
* 📝 Markdown formatting (bold, lists, code blocks)
* 📁 Conversation history sidebar
* ✏️ Rename chat support
* ⚡ FastAPI REST API integration
* 🔐 Secure API key management using `.env`

---

## 🛠 Tech Stack

### 🔹 Frontend

* React (Vite)
* JavaScript
* Custom CSS
* React Markdown
* Remark GFM

### 🔹 Backend

* FastAPI
* Python
* Uvicorn
* Pydantic
* LLM API Integration

---

## 📂 Project Structure

```
ai-chatbot-project/
│
├── backend/
│   ├── app/
│   ├── main.py
│   ├── requirements.txt
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## ⚙️ Installation Guide

### 🔹 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-chatbot-project.git
cd ai-chatbot-project
```

---

## 🔹 2. Backend Setup

```bash
cd backend
python -m venv venv
```

Activate virtual environment:

**Windows:**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside backend folder:

```
GROQ_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## 🔹 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🧠 What I Learned

* Full-stack integration (React + FastAPI)
* REST API communication
* Environment configuration management
* Git & version control best practices
* Modern AI chat UI/UX design
* Markdown rendering inside chat applications

---

## 🌟 Future Improvements

* User authentication
* Database-backed chat storage
* Streaming AI responses
* Docker containerization
* Deployment on Vercel + Render
* Persistent chat history

---

## 👩‍💻 Author

**Tejaswini**
CSE (Data Science) Student
Passionate about AI, Full Stack Development & Building Intelligent Applications 🚀

---

## 📄 License

This project is open-source and available under the MIT License.
