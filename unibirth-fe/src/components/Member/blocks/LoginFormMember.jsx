import React from "react";
import { useRecoilState } from "recoil";


const LoginForm = () => {
  const [username, setUsername] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  return (
    <div className="flex items-center justify-center">
      <div>로그인 화면입니다.</div>
    </div>
  );
};

export default LoginForm;
