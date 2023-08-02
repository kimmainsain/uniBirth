import React, { useState, useEffect } from "react";
import useConstellationApi from "../../../api/useConstellationApi";
import { useNavigation } from "../../../hooks/useNavigation";
import { useParams } from "react-router-dom";
const ListSectionConstellation = () => {
  const { planetId } = useParams();
  const { navigateToDetailConstellation } = useNavigation();
  const [constellationList, setConstellationList] = useState({
    constellationList: [
      {
        constellationId: 0,
        title: "",
        boardSize: 0,
        lineList: [],
        x: 0,
        y: 0,
      },
    ],
  });
  const getConstellationList = async (planetId) => {
    console.log(planetId);
    const response = await useConstellationApi.constellationsGetPlanet(
      planetId,
    );
    console.log("리스폰스", response);
    setConstellationList(response.resultData);
  };

  useEffect(() => {
    getConstellationList(planetId);
  }, [planetId]);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {constellationList?.constellationList.map((constellation) => (
        <div
          key={constellation.constellationId}
          onClick={() =>
            navigateToDetailConstellation(constellation.constellationId)
          }
          className="bg-blue-500"
        >
          {constellation.title}
        </div>
      ))}
    </div>
  );
};

export default ListSectionConstellation;
