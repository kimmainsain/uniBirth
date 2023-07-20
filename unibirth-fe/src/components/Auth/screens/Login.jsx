import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import { LoginForm } from "../blocks/Blocks";
import Footer from "../blocks/Footer";

export const Login = () => {
  const navigate = useNavigate(); // Updated usage

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = () => {
    // Handle login submission here
    // For demonstration purposes, we'll just log the credentials
    console.log("Username:", username);
    console.log("Password:", password);

    // After successful login, navigate to a different screen (e.g., Dashboard)
    navigate("/dashboard"); // Updated navigation
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleLoginSubmit}
      />
      <Footer />
    </div>
  );
};
