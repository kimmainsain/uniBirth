import React from "react";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "../../../recoil/atoms";
import InputEmail from "../../../common/atoms/InputEmail";
import InputPassword from "../../../common/atoms/InputPassword";

const LoginForm = () => {
  const [email, setUsername] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  return (
    <div className="m-20 flex flex-col items-center justify-center space-y-5">
      <InputEmail value={email} onChange={(e) => setUsername(e.target.value)} />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default LoginForm;
