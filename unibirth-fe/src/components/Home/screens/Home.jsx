import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../common/atoms/Button/BigButton";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/members/login");
  };

  return (
    <div>
      <h1>홈 화면입니다. </h1>
      <BigButton value="Profile" onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
