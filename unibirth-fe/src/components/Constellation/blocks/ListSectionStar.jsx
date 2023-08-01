import React, { useState, useEffect } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useParams } from "react-router-dom";
const ListSectionStar = () => {
  const { constellationId } = useParams();
  const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useState({
    starList: [],
  });

  useEffect(() => {
    getStarList(constellationId);
  }, [constellationId]);

  const getStarList = async (constellationId) => {
    console.log(constellationId);
    try {
      const response = await useConstellationApi.constellationsGetConstellation(
        constellationId,
      );
      console.log(response);
      setStarList(response.resultData);
    } catch (error) {
      console.error("Failed to get star list:", error);
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-center">
      1111
      {starList?.starList.map((star) => (
        <div
          key={star.starId}
          onClick={() => navigateToDetailStar(star.starId)}
          className="bg-red-500"
        >
          {star.nickname}
        </div>
      ))}
      <span>Planet</span>
    </div>
  );
};

export default ListSectionStar;
