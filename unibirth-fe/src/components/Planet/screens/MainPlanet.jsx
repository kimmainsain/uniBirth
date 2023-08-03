import React from "react";
import Footer1 from "../../../common/blocks/Footer1";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import { BiSearch, BiHomeAlt, BiLogInCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigation } from "../../../hooks/useNavigation";
import ListSectionPlanet from "../blocks/ListSectionPlanet";
import CanvasPlanet from "../blocks/CanvasPlanet";

import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../recoil/atoms";

const MainPlanet = () => {
  const {
    navigateToLoginMember,
    refreshPage,
    navigateToMemberProfile,
    navigateToSearchQuration,
  } = useNavigation();

  const nickname = useRecoilValue(nicknameState);
  console.log("nickname은", nickname);

  const token = sessionStorage.getItem("accessToken");

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별자리검색",
      onClick: navigateToSearchQuration,
      icon: <BiSearch />,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "홈",
      onClick: refreshPage,
      icon: <BiHomeAlt />,
    },
  ];

  if (token === null) {
    buttonsFooter.push({
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "로그인",
      onClick: navigateToLoginMember,
      icon: <BiLogInCircle />,
    });
  } else {
    buttonsFooter.push({
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "마이페이지",
      onClick: navigateToMemberProfile,
      icon: <CgProfile />,
    });
  }

  return (
    <div>
      <h1>행성들이 보입니다. </h1>
      <ListSectionPlanet />
      <CanvasPlanet />
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default MainPlanet;
