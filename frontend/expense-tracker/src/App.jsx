import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expanse from "./pages/Dashboard/Expanse";
import UserProvider from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expanse" element={<Expanse />} />
      </Routes>
    </Router>
    </div>
    </UserProvider>
  );
};

export default App;

const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};
