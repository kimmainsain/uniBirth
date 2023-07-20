// Blocks.js

import React from "react";
import { InputField, Button } from "../atoms/Atoms";

// Block: Login Form
export const LoginForm = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div>
      <InputField
        type="text"
        name="username"
        value={username}
        onChange={onUsernameChange}
        placeholder="Username"
      />
      <InputField
        type="password"
        name="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <Button type="submit" onClick={onSubmit}>
        Login
      </Button>
    </div>
  );
};
