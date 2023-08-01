import React, { useState, useEffect } from "react";
import usePlanetApi from "../../../api/usePlanetApi";

const ListSectionPlanet = () => {
  const [planetList, setPlanetList] = useState({
    planetList: [
      {
        planetId: 0,
        planetTitle: "",
        glftUrl: "",
        glft_size: 50,
        x: 0,
        y: 0,
        z: 0,
      },
    ],
  });
  const getPlanetList = async () => {
    const response = await usePlanetApi.planetsGetPlanetList();
    console.log(response);
    setPlanetList(response.resultData);
  };

  useEffect(() => {
    getPlanetList();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {planetList?.planetList.map((planet) => (
        <div key={planet.planetId}> {planet.planetTitle}</div>
      ))}
      <span className="text-white">Planet</span>
    </div>
  );
};

export default ListSectionPlanet;
