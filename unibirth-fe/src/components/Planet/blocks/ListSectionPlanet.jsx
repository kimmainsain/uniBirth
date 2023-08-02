import React, { useState, useEffect } from "react";
import usePlanetApi from "../../../api/usePlanetApi";
import { useNavigation } from "../../../hooks/useNavigation";

const ListSectionPlanet = () => {
  const { navigateToDetailPlanet } = useNavigation();

  const [planetList, setPlanetList] = useState({
    planetList: [],
  });
  const getPlanetList = async () => {
    const response = await usePlanetApi.planetsGetPlanetList();
    console.log(response);
    setPlanetList(response.resultdata);
  };

  useEffect(() => {
    getPlanetList();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {planetList?.planetList.map((planet) => (
        <div
          key={planet.planetId}
          onClick={() => navigateToDetailPlanet(planet.planetId)}
        >
          {" "}
          {planet.planetTitle}
        </div>
      ))}
      <span className="text-white">Planet</span>
    </div>
  );
};

export default ListSectionPlanet;
