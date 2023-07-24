import React from "react";
import Footer1 from "../../../common/blocks/Footer1";
import ArticleHome from "../blocks/ArticleHome";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import { BiSearch, BiHomeAlt, BiLogInCircle } from "react-icons/bi";

import { useNavigation } from "../../../hooks/useNavigation";

const Home = () => {
  const { navigateToLogin, navigateToDetailConstellation, refreshPage } =
    useNavigation();

  const buttons = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별자리검색",
      onClick: navigateToDetailConstellation,
      icon: <BiSearch />,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "홈",
      onClick: refreshPage,
      icon: <BiHomeAlt />,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "로그인",
      onClick: navigateToLogin,
      icon: <BiLogInCircle />,
    },
  ];

  return (
    <div>
      <h1>홈 화면입니다. </h1>
      <ArticleHome />
      <Footer1 buttons={buttons} />
    </div>
  );
};

export default Home;
