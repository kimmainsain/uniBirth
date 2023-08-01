import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Button3 from "../../../common/atoms/Button3";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigation } from "../../../hooks/useNavigation";
import MemberSectionProfile from "../blocks/MemberSectionProfile";
import ConstellationSectionProfile from "../blocks/ConstellationSectionProfile";

const MemberProfile = () => {
  const {
    navigateToMessageBox,
    navigateToModifyProfile,
    navigateToMainPlanet,
  } = useNavigation();

  const handleLogout = () => {
    sessionStorage.clear();
    navigateToMainPlanet();
  };

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToMainPlanet,
      icon: <IoIosArrowBack />,
    },
    {
      component: Button3,
      className: "font-TAEBAEKmilkyway",
      value: "사용자의 프로필",
      onClick: navigateToModifyProfile,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      onClick: navigateToMessageBox,
      icon: <LuMessagesSquare />,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "로그아웃",
      onClick: handleLogout,
      icon: <BiLogInCircle />,
    },
  ];

  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <h1>회원 프로필 화면입니다.</h1>
      <MemberSectionProfile />
      <ConstellationSectionProfile />
    </div>
  );
};

export default MemberProfile;
