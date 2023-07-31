import React, { useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";

const ListSectionPlanet = () => {
  const { navigateToDetailPlanet } = useNavigation();
  const tempImages = Array(10).fill("https://picsum.photos/200/200");
  const [images] = useState(tempImages);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`profile-${index}`}
          onClick={navigateToDetailPlanet}
          className="m-4"
        />
      ))}
      <span className="text-white">Planet</span>
    </div>
  );
};

export default ListSectionPlanet;
