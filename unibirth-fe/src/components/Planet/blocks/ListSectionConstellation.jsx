import React, { useState, useEffect } from "react";
// import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";

const ListSectionConstellation = () => {
  // const { navigateToDetailConstellation } = useNavigation();
  const [constellationList, setConstellationList] = useState({
    constellationList: [
      {
        constellationId: 0,
        title: "",
        boardSize: 0,
        lineList: [
          {
            y1: 0,
            x1: 0,
            y2: 0,
            x2: 0,
          },
        ],
        x: 0,
        y: 0,
      },
    ],
  });
  const getConstellationList = async () => {
    const response = await useConstellationApi.constellationsGetConstellation(
      1,
    );
    console.log(response);
    setConstellationList(response.resultData);
  };

  useEffect(() => {
    getConstellationList();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {constellationList?.constellationList.map((constellation) => (
        <div key={constellation.constellationId}>{constellation.title}</div>
      ))}
    </div>
  );
};

export default ListSectionConstellation;
