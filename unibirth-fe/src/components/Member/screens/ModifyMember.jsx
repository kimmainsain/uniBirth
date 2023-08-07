import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import ModifyFormMember from "../blocks/ModifyFormMember";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import { useRecoilState } from "recoil";
import { nicknameState } from "../../../recoil/atoms";
import useMemberApi from "../../../api/useMemberApi";

const RegisterMember = () => {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { navigateToBack, navigateToMemberProfile } = useNavigation();
  const modifyMember = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const member = {
      nickname,
      password,
    };
    try {
      const response = await useMemberApi.membersPutUpdate(member);
      console.log(response);
      setNickname(member.nickname);
      alert("회원정보 수정이 완료되었습니다..");
      navigateToMemberProfile();
    } catch (e) {
      console.log(e);
      alert("회원정보 수정에 실패하였습니다.");
    }

    console.log(
      `Nickname: ${nickname}, Password: ${password}, confirmPassword: ${confirmPassword}`,
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
      value: "회원정보 수정",
      onClick: modifyMember,
    },
  ];

  return (
    <div className="items-cneter flex flex-col justify-center space-y-5">
      <Header1 buttons={buttonsHeader} />
      <form>
        <ModifyFormMember
          nickname={nickname}
          setNickname={setNickname}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <Footer1
          buttons={buttonsFooter}
          nickname={nickname}
          password={password}
          confirmPassword={confirmPassword}
          joinMember={modifyMember}
        />
      </form>
    </div>
  );
};

export default RegisterMember;
