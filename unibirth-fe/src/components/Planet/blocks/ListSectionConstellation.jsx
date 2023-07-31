import React, { useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";

const ListSectionConstellation = () => {
  const { navigateToDetailConstellation } = useNavigation();
  const tempImages = Array(10).fill("https://picsum.photos/200/200");
  const [images] = useState(tempImages);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`profile-${index}`}
          onClick={navigateToDetailConstellation}
          className="m-4"
        />
      ))}
      <span>Planet</span>
    </div>
  );
};

export default ListSectionConstellation;
