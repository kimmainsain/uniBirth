// LoginForm.jsx
import React from "react";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "../../../../recoil/atoms";
import { InputField } from "../../atoms/Atoms";

const LoginForm = () => {
  const [username, setUsername] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  return (
    <div className="flex flex-col w-30">
      <InputField
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        autoComplete="username"
      />
      <InputField
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="current-password"
        id="hllo"
      />
    </div>
  );
};

export default LoginForm;
