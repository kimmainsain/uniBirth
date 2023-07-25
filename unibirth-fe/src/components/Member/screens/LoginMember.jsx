import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiArrowBack, BiLogInCircle } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import LoginFormMember from "../blocks/LoginFormMember";
import { useRecoilValue } from "recoil";
import { emailState, passwordState } from "../../../recoil/atoms";

const LoginMember = () => {
  const { navigateToBack, navigateToRegisterMember } = useNavigation();

  const email = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLinkClick = () => {
    if (!isValidEmail(email)) {
      window.alert("email을 제대로 입력해주세요");
      return;
    }
    console.log(`Username: ${email}, Password: ${password}`);
  };

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
      value: "로그인",
      onClick: handleLinkClick,
      icon: <BiLogInCircle />,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원가입",
      onClick: navigateToRegisterMember,
    },
  ];
  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <form>
        <LoginFormMember />
      </form>
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default LoginMember;
