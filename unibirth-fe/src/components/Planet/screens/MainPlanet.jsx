import React from "react";
import Footer1 from "../../../common/blocks/Footer1";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import { BiSearch, BiHomeAlt, BiLogInCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigation } from "../../../hooks/useNavigation";
import ListSectionPlanet from "../blocks/ListSectionPlanet";
import CanvasPlanet from "../blocks/CanvasPlanet";

import { useRecoilValue, useRecoilState } from "recoil";
import { nicknameState, targetNicknameState } from "../../../recoil/atoms";

const MainPlanet = () => {
  const {
    navigateToLoginMember,
    refreshPage,
    navigateToMemberProfile,
    navigateToSearchQuration,
    navigateToDetailPlanet,
  } = useNavigation();

  const nickname = useRecoilValue(nicknameState);
  const [targetNickname, setTargetNickname] =
    useRecoilState(targetNicknameState);

  const token = sessionStorage.getItem("accessToken");

  console.log(targetNickname);

  const mypageClick = () => {
    setTargetNickname(nickname); // 클릭한 유저 닉네임을 targetNicknameState에 저장합니다.
    navigateToMemberProfile(); // 화면 이동을 처리하는 함수를 호출합니다.
  };

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
      onClick: mypageClick,
      icon: <CgProfile />,
    });
  }

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute left-1/2 top-20 z-10 -translate-x-1/2 -translate-y-1/2 transform">
        <ListSectionPlanet />
      </div>
      <CanvasPlanet navigateToDetailPlanet={navigateToDetailPlanet} />
      <div className="absolute bottom-20 left-5 z-10">
        <Footer1 buttons={buttonsFooter} />
      </div>
    </div>
  );
};

export default MainPlanet;
