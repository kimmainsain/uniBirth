import React from "react";
import Header1 from "../../../common/blocks/Header1";
import Button2 from "../../../common/atoms/Button2";
import { useNavigation } from "../../../hooks/useNavigation";
import { BiSearch } from "react-icons/bi";
import ConstellationSectionProfile from "../blocks/ConstellationSectionProfile";
import MemberSectionProfile from "../blocks/MemberSectionProfile";

const MemberProfile = () => {
  const { navigateToBack } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
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
