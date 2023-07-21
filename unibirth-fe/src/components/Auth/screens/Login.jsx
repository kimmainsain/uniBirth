import React from "react";
import BackSmallButton from "../../../common/atoms/Button/BackSmallButton";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <BackSmallButton onClick={() => navigate("/")} />
    </div>
  );
};
