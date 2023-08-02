import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import SignupFormMember from "../blocks/SignupFormMember";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import { useRecoilState } from "recoil";
import { nicknameState } from "../../../recoil/atoms";
import useMemberApi from "../../../api/useMemberApi";

const RegisterMember = () => {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { navigateToBack, navigateToLoginMember } = useNavigation();
  const joinMember = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const member = {
      nickname,
      email,
      password,
    };
    try {
      const response = await useMemberApi.membersPutUpdate(member);
      console.log(response);
      alert("회원가입이 완료되었습니다.");
      navigateToLoginMember();
    } catch (e) {
      console.log(e);
      alert("회원가입에 실패하였습니다.");
    }

    console.log(
      `Nickname: ${nickname}, Email: ${email}, Password: ${password}, confirmPassword: ${confirmPassword}`,
    );
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
      value: "회원가입",
      onClick: joinMember,
    },
  ];

  return (
    <div className="items-cneter flex flex-col justify-center space-y-5">
      <Header1 buttons={buttonsHeader} />
      <form>
        <SignupFormMember
          nickname={nickname}
          setNickname={setNickname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <Footer1
          buttons={buttonsFooter}
          nickname={nickname}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          joinMember={joinMember}
        />
      </form>
    </div>
  );
};

export default RegisterMember;
