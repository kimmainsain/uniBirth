import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import LoginFormMember from "../blocks/LoginFormMember";

const RegisterMember = () => {
  const { navigateToBack, navigateToLoginMember } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiArrowBack />,
    },
  ];
  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원가입",
      onClick: navigateToLoginMember,
    },
  ];
  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <LoginFormMember />
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default RegisterMember;
