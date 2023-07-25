import React from "react";
import InputImage from "../atoms/InputImage";
import InputPassword from "../../../common/atoms/InputPassword";
import Inputnickname from "../atoms/Inputnickname";
import InputPasswordConfirm from "../atoms/InputPasswordConfirm";
import InputEmail from "../../../common/atoms/InputEmail";

const MemberRegistrationForm = ({
  image,
  setImage,
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form className="items-cneter flex flex-col justify-center">
      <InputImage value={image} onChange={(e) => setImage(e.target.value)} />
      <Inputnickname
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <InputEmail
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputPasswordConfirm />
    </form>
  );
};

export default MemberRegistrationForm;
