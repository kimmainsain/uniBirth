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
    const jwt = sessionStorage.getItem("accessToken");
    console.log(jwt);
    const response = await useConstellationApi.constellationsGetPlanet(
      planetId,
      jwt,
    );
    console.log(planetId);
    console.log(response);
    setConstellationList(response.resultData);
  };

  useEffect(() => {
    getConstellationList(planetId);
  }, [planetId]);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      1233
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
