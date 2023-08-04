import React, { useEffect, useState } from "react";
import usePlanetApi from "../../../api/usePlanetApi";
import { useNavigation } from "../../../hooks/useNavigation";

const ListSectionPlanet = () => {
  const { navigateToDetailPlanet } = useNavigation();
  const [planetList, setPlanetList] = useState({
    planetList: [],
  });

  const getPlanetList = async () => {
    const response = await usePlanetApi.planetsGetPlanetList();
    setPlanetList(response.resultData);
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
          className="cursor-pointer rounded-lg bg-gray-300 p-4"
        >
          <p>
            {planet.title} {planet.gltfUrl}
          </p>
        </div>
      ))}
      <span className="text-white">Planet</span>
    </div>
  );
};

export default ListSectionPlanet;
