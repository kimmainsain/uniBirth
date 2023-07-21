import React from "react";
import ProfilePictureInput from "../blocks/signup/ProfilePictureInput";
import SignupForm from "../blocks/signup/SignupForm";
import Header from "../blocks/signup/Header";
import { Text } from "../../../assets/fonts/text";

const SignUp = () => {
  return (
    <div>
      <Header />
      <ProfilePictureInput />
      <SignupForm />
      <hr />
      <Text text="회원가입 푸터입니다" />
    </div>
  );
};

export default SignUp;
