import React, { useState, useEffect } from "react";
// import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
const ListSectionStar = () => {
  // const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useState({
    starList: [
      {
        starId: 0,
        memberId: 0,
        createdAt: "",
        nickname: "",
        content: "",
        brightness: 0,
        imageUrl: "",
      },
    ],
  });

  useEffect(() => {
    getStarList();
  }, []);

  const getStarList = async () => {
    const response = await useConstellationApi.constellationsGetConstellation();
    console.log(response);
    setStarList(response.resultData);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center">
      1111
      {starList?.starList.map((star) => (
        <div key={star.starId}>{star.nickname}</div>
      ))}
      <span>Planet</span>
    </div>
  );
};

export default ListSectionStar;
