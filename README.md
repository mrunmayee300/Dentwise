# 🦷 Dentwise

**Dentwise** is a modern dental health platform that combines a structured backend with intuitive frontend features to manage dental data, appointments, and user profiles. Built with a scalable Prisma-powered database schema and best-in-class web technologies, Dentwise is designed for developers and healthcare providers looking to build or extend a dental care application.

---
## 🎥 Demo Video

<div>
    <a href="https://www.loom.com/share/f5348bd243044ab4a79203c64c76ad37">
      <p>Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/f5348bd243044ab4a79203c64c76ad37">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/f5348bd243044ab4a79203c64c76ad37-12f1286725e04422-full-play.gif#t=0.1">
    </a>
  </div>


## 📌 Key Features

- 🗃️ **Robust Database Backend**
  - Structured models for users, appointments, treatments, and more using **Prisma ORM**
  - Production-ready schema for relational data management

- 🧠 **Extendable Architecture**
  - Easy to connect to any frontend framework (Next.js, React, Angular, Vue)
  - Ready for REST or GraphQL API integration
  - Optimized for real-world use cases such as patient records and scheduling

- 🤝 **User & Appointment Management**
  - Schema designed for diverse user roles (patients, dentists, admins)
  - Supports appointment booking, status tracking, and data integrity

- 🔒 **Security & Data Integrity**
  - Prisma ensures typesafe database access
  - Designed for safe migrations and consistent schema evolution

---

## 🛠️ Built With

This project uses the following key technologies:

- **Prisma** — ORM for database modeling and queries  
- **Node.js / Express** (or similar) — backend API  
- **PostgreSQL / MySQL / SQLite** — database engines  
- **TypeScript / JavaScript** — codebase language  
- Frontend (optional starter integration):  
  - Next.js / React

---

## 🧠 Database Schema Overview

The Prisma schema includes models for:

- **User** — accounts with personal info, roles, and authentication
- **Profile** — linked personal or professional details
- **Appointment** — scheduling and status
- **Treatment / Records** — dental treatment logs and metadata

These models are defined in `prisma/schema.prisma` and connected through relationships for robust data querying and management.

---

## 🚀 Getting Started

### Prerequisites

Install the following locally:

- Node.js (v16+)
- npm or yarn
- A SQL database (PostgreSQL / MySQL / SQLite)

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/<your-username>/dentwise.git
   cd dentwise
