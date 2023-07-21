import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../common/atoms/Button/BigButton";

const Home = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const profileButtonClick = () => {
    navigate("/profiles");
=======
  const handleButtonClick = () => {
    navigate("/members/login");
>>>>>>> a3291cf61789e91ff1d60258ba205008e36d2ea5
  };

  return (
    <div>
      <h1>홈 화면입니다. </h1>
      <BigButton value="Profile" onClick={profileButtonClick} />
    </div>
  );
};

export default Home;
