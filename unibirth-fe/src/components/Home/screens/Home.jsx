import React from "react";
import Footer1 from "../../../common/blocks/Footer1";
import Button1 from "../../../common/atoms/Button1";

import { useNavigation } from "../../../hooks/useNavigation";

const Home = () => {
  const { navigateToListPlanet } = useNavigation();

  const buttons = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "시작하기",
      onClick: navigateToListPlanet,
    },
  ];

  return (
    <div>
      <h1>홈 화면입니다. </h1>
      <Footer1 buttons={buttons} />
    </div>
  );
};

export default Home;
