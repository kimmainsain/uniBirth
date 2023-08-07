import React from "react";
import InputEmail from "../../../common/atoms/InputEmail";
import InputPassword from "../../../common/atoms/InputPassword";

const LoginForm = ({ email, setEmail, password, setPassword }) => {
  return (
    <div className="m-20 flex-col items-center justify-center space-y-5">
      <InputEmail
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default LoginForm;
