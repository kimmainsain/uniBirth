import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import Footer1 from "../../../common/blocks/Footer1";
import { BsPinAngle } from "react-icons/bs";
import Button1 from "../../../common/atoms/Button1";
import Header2 from "../../../common/blocks/Header2";

const DetailConstellation = () => {
  const { navigateToBack, navigateToStar } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];

  const buttonsFooter = [
    {
      component: Button1,
      value: "별자리보기",
      onClick: navigateToStar,
    },
    {
      component: Button1,
      value: "찜하기",
      onClick: navigateToStar,
      icon: <BsPinAngle />,
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center space-x-10">
        <Header1 buttons={buttonsHeader} />
        <Header2 />
      </div>
      <h1 className="flex justify-center">별자리 검색 화면입니다.</h1>
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default DetailConstellation;
