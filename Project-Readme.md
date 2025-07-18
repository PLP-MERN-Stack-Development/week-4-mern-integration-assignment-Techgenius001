# MERN Blog Application

## Project Overview

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application. It demonstrates seamless integration between front-end and back-end components, including database operations, API communication, authentication, and state management.

## Features

- RESTful API with Express.js and MongoDB
- React front-end with component architecture
- Full CRUD functionality for blog posts
- User authentication and authorization
- Category management
- Input validation and error handling
- Responsive UI
- (Optional) Advanced features: image uploads, pagination, search/filter, comments

## Directory Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

### 1. Clone the Repository

```
git clone <your-repo-url>
cd week-4-mern-integration-assignment-Techgenius001
```

### 2. Set Up Environment Variables

- Copy `.env.example` to `.env` in both `server` and `client` directories and fill in the required values.

### 3. Install Dependencies

#### Server

```
cd server
npm install
```

#### Client

```
cd ../client
npm install
```

### 4. Start the Development Servers

#### Start Backend

```
cd server
npm run dev
```

#### Start Frontend

```
cd ../client
npm run dev
```

### 5. Access the Application

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000/api](http://localhost:5000/api)

## API Documentation

### Posts

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/:id` - Get a specific blog post
- `POST /api/posts` - Create a new blog post
- `PUT /api/posts/:id` - Update an existing blog post
- `DELETE /api/posts/:id` - Delete a blog post

### Categories

- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a new category

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

## Environment Variables

### Server (`server/.env`)

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### Client (`client/.env`)

```
VITE_API_URL=http://localhost:5000/api
```

## Features Implemented

- Project structure for both client and server
- MongoDB connection using Mongoose
- Express.js server with middleware
- React front-end with Vite and API proxy
- Environment variable management
- CRUD API for posts and categories
- Mongoose models for Post, Category, and User
- Input validation and error handling
- User authentication (register, login)
- State management with React Context and hooks
- API service integration in React
- Forms with validation
- Navigation and routing

## Notes

- Make sure MongoDB is running before starting the backend server.
- For advanced features (image uploads, pagination, search, comments), refer to the codebase and extend as needed.
- For any issues, check the browser console and terminal for error messages.

---

**This README was generated based on the assignment requirements.**
