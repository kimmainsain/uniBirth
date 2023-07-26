import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Button3 from "../../../common/atoms/Button3";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigation } from "../../../hooks/useNavigation";
import MemberSectionProfile from "../blocks/MemberSectionProfile";
import ConstellationSectionProfile from "../blocks/ConstellationSectionProfile";

const MemberProfile = () => {
  const { navigateToMessageBox } = useNavigation();
  const { navigateToBack, navigateToModifyProfile } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <IoIosArrowBack />,
    },
    {
      component: Button3,
      className: "font-TAEBAEKmilkyway",
      value: "준혁의 프로필",
      onClick: navigateToModifyProfile,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      onClick: navigateToMessageBox,
      icon: <LuMessagesSquare />,
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
