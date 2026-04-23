# Posh Paws Boarding — Full-Stack Application

## Overview

Posh Paws Boarding is a full-stack web application designed to manage pet boarding reservations. This project is an enhanced version of an original Java-based system, expanded into a modern MERN stack application.

The system allows customers to create reservations and administrators to manage bookings through a dynamic interface supported by a backend API and database.

---

## Live Demo

🔗 https://poshpawsboarding.netlify.app/

---

## Features

### Customer Functionality

* Register and log in
* Create boarding reservations
* Automatic suite assignment based on availability
* Lookup reservations using the reservation ID

### Admin Functionality

* View all reservations
* Search by reservation ID, pet name, or pet type
* Sort reservations (name, type, check-out date)
* Update reservation details
* Delete reservations

---

## Tech Stack

**Frontend**

* React
* React Router
* CSS Modules

**Backend**

* Node.js
* Express

**Database**

* MongoDB

---

## Project Structure

```bash
posh-paws-boarding/
├── client/          # React frontend
├── routes/          # Express routes
├── controllers/     # Business logic
├── models/          # MongoDB schemas
├── utils/           # Algorithms (search, sort, suite assignment)
├── server.js        # Backend entry point
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/posh-paws-boarding.git
cd posh-paws-boarding
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd client
npm install
cd ..
```

### 4. Create `.env` file

```env
MONGO_URI=mongodb://localhost:27017/posh-paws-boarding
PORT=5000
```

### 5. Run the application

**Backend**

```bash
node server.js
```

**Frontend**

```bash
cd client
npm start
```

---

## API Endpoints

### Reservations

* `POST /api/reservations` → Create reservation
* `GET /api/reservations/:id` → Get reservation
* `PUT /api/reservations/:id` → Update reservation
* `DELETE /api/reservations/:id` → Delete reservation

### Users

* `POST /api/users/register`
* `POST /api/users/login`

---

## Key Concepts Demonstrated

* Full-stack architecture (MERN)
* RESTful API design
* CRUD operations
* Algorithm implementation (search, sort, assignment)
* Component-based frontend development
* Integrated MongoDB Atlas
* Deployed backend API (Render)

---

## Future Improvements

* Add authentication security (JWT)
* Improve mobile responsiveness

---

## Author

Calvin Kugonza
Computer Science Capstone — SNHU
