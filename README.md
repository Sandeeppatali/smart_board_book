# 🖥️ Smart Board Booking App

A full-stack web app for **faculty to book smart boards in classrooms**.

-   **Frontend:** Vite + React\
-   **Backend:** Node.js + Express + MongoDB (Atlas)\
-   **Deployment:** Vercel (frontend) + Render/Vercel (backend)

------------------------------------------------------------------------

## 🚀 Features

-   Faculty **registration & login**\
-   View available classrooms by branch\
-   **Book smart boards** by date & time slot\
-   Manage personal bookings\
-   Admin dashboard for monitoring

------------------------------------------------------------------------

## 📂 Project Structure

    smart-board-booking/
     ├── frontend/     # Vite + React (UI)
     └── backend/      # Node.js + Express (API)

------------------------------------------------------------------------

## ⚡ Frontend Setup (Vite + React)

``` bash
# go to frontend folder
cd frontend

# install dependencies
npm install

# run development server
npm run dev
```

➡️ The frontend uses **VITE_API_URL** to connect to backend.\
Create a `.env` file in `frontend/`:

``` env
VITE_API_URL=http://localhost:5000/api
```

------------------------------------------------------------------------

## ⚙️ Backend Setup (Node + Express)

``` bash
# go to backend folder
cd backend

# install dependencies
npm install

# run backend server
npm start
```

------------------------------------------------------------------------

## 🔗 API Routes

  Method   Route                       Description
  -------- --------------------------- --------------------------------
  GET      `/`                         Health check
  POST     `/api/auth/register`        Faculty registration
  POST     `/api/auth/login`           Faculty login
  GET      `/api/bookings/mine`        Get logged-in faculty bookings
  POST     `/api/bookings`             Create new booking
  GET      `/api/classrooms/:branch`   List classrooms by branch


------------------------------------------------------------------------

## ✅ Usage

1.  Faculty registers and logs in\
2.  Selects branch → classroom → date → time slot\
3.  Books smart board\
4.  Can view or cancel bookings

------------------------------------------------------------------------

## 👨‍💻 Tech Stack

-   **Frontend:** React, Vite, Axios\
-   **Backend:** Node.js, Express, JWT, Bcrypt, Mongoose\
-   **Database:** MongoDB Atlas\
-   **Deployment:** Vercel + Render

------------------------------------------------------------------------

## 📜 License

MIT License
