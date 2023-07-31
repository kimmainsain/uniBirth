import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
// import useStarApi from "../../../hooks/useStarApi";

const DetailStar = () => {
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
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center space-x-10">
        <Header1 buttons={buttonsHeader} />
      </div>
      <h1 className="flex justify-center">별 검색 화면입니다.</h1>
    </div>
  );
};

export default DetailStar;
