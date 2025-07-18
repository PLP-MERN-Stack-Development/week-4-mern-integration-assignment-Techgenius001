import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import PostView from "./pages/PostView";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEditPost from "./pages/CreateEditPost";

const App = () => {
  const { user, logout } = React.useContext(AuthContext);
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <>
              {" "}
              | <Link to="/create">Create Post</Link> |{" "}
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              {" "}
              | <Link to="/login">Login</Link> |{" "}
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/create" element={<CreateEditPost />} />
          <Route path="/edit/:id" element={<CreateEditPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
