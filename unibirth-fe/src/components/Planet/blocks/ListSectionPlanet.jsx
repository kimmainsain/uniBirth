import React from "react";
import { useNavigation } from "../../../hooks/useNavigation";

const ListSectionPlanet = () => {
  const { navigateToDetailPlanet } = useNavigation();

  return (
    <div
      onClick={navigateToDetailPlanet}
      className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-blue-500"
    >
      <span className="text-white">Planet</span>
    </div>
  );
};

export default ListSectionPlanet;
