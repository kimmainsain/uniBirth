import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../common/atoms/Button/BigButton";
// import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/members/login");
  };

  return (
    <div>
      <h1>Home</h1>
      <BigButton value="Login" onClick={handleButtonClick} />
      <BigButton value="home" onClick={() => navigate("/")} />
    </div>
  );
};

export default Home;
