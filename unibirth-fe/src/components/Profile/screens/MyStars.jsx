import React, { useState, useEffect } from "react";
import Header2 from "../../../common/blocks/Header2";
import Button2 from "../../../common/atoms/Button2";
import Button3 from "../../../common/atoms/Button3";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigation } from "../../../hooks/useNavigation";
import useStarApi from "../../../api/useStarApi";
import { useRecoilValue } from "recoil";
import { targetNicknameState } from "../../../recoil/atoms";

const MyStars = () => {
  const { navigateToBack } = useNavigation();

  const targetNickname = useRecoilValue(targetNicknameState);

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
      value: "띄운 별",
    },
  ];

  const [starList, setStarList] = useState([]);

  const getStarList = async () => {
    const response = await useStarApi.starsGetStarList(targetNickname);
    console.log(response.resuldData);
    setStarList(response.resultData);
  };

  useEffect(() => {
    getStarList();
  }, []);

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <h1> 띄운별 리스트입니다..</h1>
      <div className="flex flex-col items-center">
        {starList.map((star) => (
          <div key={star.starId} className="my-4">
            <img src={star.imageUrl} className="avatar" alt="User Avatar" />
            <p>{star.title} 자리</p>
            <p>{star.content}</p>
            <p>{star.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStars;
