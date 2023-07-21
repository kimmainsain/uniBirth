import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import LoginForm from "../blocks/login/LoginForm";
import Footer from "../blocks/login/Footer";
import Earth from "../../../assets/images/earth.png";

const Login = () => {
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
    <div className="flex flex-col items-center">
      <h1>Login</h1>
      <img
        src={Earth}
        alt="Earth"
        className="animate-spin"
        style={{ animationDuration: "250s" }}
        height="200px"
        width="200px"
      />
      <form onSubmit={handleLoginSubmit}>
        <LoginForm
          username={username}
          password={password}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
        />
        <Footer />
      </form>
    </div>
  );
};

export default Login;
