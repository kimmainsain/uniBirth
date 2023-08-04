import React, { useState, useEffect } from "react";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import useStarApi from "../../../api/useStarApi";
import { useParams } from "react-router-dom";

const DetailStar = () => {
  const { navigateToBack } = useNavigation();
  const { starId } = useParams();
  const [star, setStar] = useState({
    constellationId: 1,
    nickname: "",
    createdAt: "",
    updatedAt: "",
    brightness: 0,
    content: "",
    imageUrl: "",
    alreadyLiked: false,
    mine: false,
  });

  useEffect(() => {
    getStar(starId);
  }, [starId]);

  const getStar = async (starId) => {
    console.log(starId);
    try {
      const response = await useStarApi.starsGetStar(starId);
      console.log(response);
      setStar(response.resultData);
    } catch (error) {
      console.error("Failed to get star:", error);
    }
  };

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
      <div className="bg-red-300">{star.nickname}</div>
      <h1 className="flex justify-center">별을 상세히 봅시다ㅇㅇ</h1>
    </div>
  );
};

export default DetailStar;
