# Thanuja.k Application

## Project Overview

This project is a custom web application built using Python, developed by thanuja.k.

## Features

- Interactive application interface
- Custom user response system
- Handles empty inputs safely
- Secure environment configuration using .env

## Project Preview

![Project Screenshot](screenshot.png)
# NovaDesk — Enterprise AI Customer Support System

A high-performance, multi-tenant **Flask web application** that delivers an intelligent, context-aware customer support assistant. Engineered with **LangChain**, **Groq/Gemini LLM Orchestration**, and **SQLite Persistence**, designed to emulate production-level e-commerce support architectures (e.g., Amazon, Flipkart, Myntra).

> **System Endpoint:** `http://127.0.0.1:5000`

---

## 🏛 System Architecture & Workflow

1. **User Interaction & Session Management:** Authenticated HTTP sessions interact via an asynchronous AJAX-based Chat Interface.
2. **Intent Classification Engine:** Every incoming user payload is evaluated and categorized into 1 of 11 pre-defined support intents (e.g., *Product Inquiry, Order Status, Technical Support, Refunds*).
3. **Knowledge Base Grounding (RAG-lite):** Direct lookup against a structured JSON Knowledge Base prevents hallucination and grounds response contexts.
4. **LLM Inference Execution:** The formatted prompt and conversation buffer are executed via the high-throughput inference engine.
5. **Database Persistence:** Async writes to SQLite preserve complete user chat histories, thread metadata, and session tokens.

---

## ✨ Core Technical Features

* **Multi-Page Web Shell:** Native Flask routing providing Authentication, Interactive Dashboard, Live Chat, User Settings, and Custom Error Handling pages.
* **Intent Classification Pipeline:** Classifies user queries before response generation to ensure accurate system prompts.
* **Non-Repetitive Response Logic:** System prompts enforce semantic variation across repetitive queries while maintaining absolute factual consistency.
* **Session-Based Authentication:** Password hashing using `Werkzeug.security` (`generate_password_hash`, `check_password_hash`) and route protection via custom `@login_required` decorators.
* **Persistent Conversation Memory:** SQLite relational database storing normalized `users`, `conversations`, and `messages` tables.

---

## 📂 Project Directory Structure

AI-Customer-Support-Assistant/
├── app.py # Flask Application Entry Point & Route Handlers
├── chatbot.py # Core LLM Chain & Intent Engine Logic
├── config.py # Centralized Environment & App Configuration
├── requirements.txt # Python Dependency Declarations
├── README.md # Technical Documentation
├── .env.example # Template for Environment Secrets
├── .gitignore # Git Version Control Exclusion Rules
│
├── instance/
│ └── database.db # SQLite Relational Database Storage
│
├── data/
│ └── knowledge.json # System Knowledge Base for Context Grounding
│
├── templates/ # Jinja2 Dynamic HTML Templates
│ ├── base.html # Master Layout Shell
│ ├── homepage.html # Public Landing Page
│ ├── signin.html # Auth Sign In
│ ├── signup.html # Auth Sign Up
│ ├── dashboard.html # User Analytics & Ticket Summary
│ ├── chat.html # Asynchronous Chat Interface
│ └── partials/ # Modular Layout Components (Navbar, Sidebar)
│
└── static/ # Static Client-Side Assets
    ├── css/ # Modular UI Stylesheets
    └── js/ # Async Event Listeners & Fetch APIs

---

## 🚀 Environment Setup & Deployment

### 1. Repository Cloning & Environment Setup
git clone <your-repository-url>
cd AI-Customer-Support-Assistant
python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate

### 2. Environment Variable Configuration
Create a .env file in the root directory:
FLASK_SECRET_KEY=super_secret_session_key
GROQ_API_KEY=your_groq_api_key_here
# OR
GEMINI_API_KEY=your_gemini_api_key_here

### 3. Database Initialization & Execution
python app.py

---

## 🛡️ Robustness & Fault Tolerance

The application incorporates multi-layered exception boundaries:
* **API Key Validation:** Graceful degradation when LLM keys are missing or unauthorized.
* **Graceful HTTP Failovers:** Native handling for `404 Not Found` and `500 Internal Server Error` routes with dedicated logging in `assistant.log`.
* **Sanitized Inputs:** Strips whitespace and blocks empty payloads before triggering network I/O.
* **Network Timeout Guards:** Fallback responses if upstream LLM APIs experience latency or network drops.

---

## 🛠️ Technology Stack

* **Language:** Python 3.10+
* **Framework:** Flask (Jinja2 Template Engine)
* **LLM Orchestration:** LangChain / Native SDKs
* **Inference Engine:** Groq API / Google Gemini API
* **Database:** SQLite3
* **Frontend:** HTML5, CSS3, JavaScript (Fetch API / Async AJAX)
* **Security:** Werkzeug Security, `python-dotenv`


## Installation

Clone the repository.

    git clone <repository-url>

Install dependencies.

    pip install -r requirements.txt

Create a .env file (refer to .env.example).

    API_KEY=your_api_key_here

Run the application.

    python app.py

## Dependencies

- Python 3.10+
- python-dotenv

---
Developed by **thanuja.k**



