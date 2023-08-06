import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiArrowBack, BiLogInCircle } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import { useRecoilState } from "recoil";
import { nicknameState, boardSizeState } from "../../../recoil/atoms";
import LoginFormMember from "../blocks/LoginFormMember";
import useMemberApi from "../../../api/useMemberApi";

const LoginMember = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [nickname, setNickname] = useRecoilState(nicknameState);
  // eslint-disable-next-line no-unused-vars
  const [boardSize, setBoardSize] = useRecoilState(boardSizeState);

  const { navigateToBack, navigateToRegisterMember, navigateToMainPlanet } =
    useNavigation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const member = {
      email,
      password,
    };
    try {
      const response = await useMemberApi.membersPostLogin(member);
      if (response.status === 200) {
        alert("로그인이 완료되었습니다.");
        console.log(response.resultData);
        sessionStorage.setItem("accessToken", response.resultData.accessToken);
        setBoardSize(response.resultData.purchasedBoard);
        setNickname(response.resultData.nickname);
        navigateToMainPlanet();
      } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (e) {
      console.log(e);
      alert("로그인에 실패하였습니다.");
    }
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
      onClick: handleLogin,
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
        <LoginFormMember
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </form>
      <Footer1 buttons={buttonsFooter} email={email} password={password} />
    </div>
  );
};

export default LoginMember;
