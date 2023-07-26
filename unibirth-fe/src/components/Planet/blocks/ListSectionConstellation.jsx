import React from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import constellation1 from "../../../assets/images/constellation.png";

const ListSectionConstellation = () => {
  const { navigateToDetailConstellation } = useNavigation();

  return (
    <div className="bg-blue-200">
      <img
        src={constellation1}
        onClick={navigateToDetailConstellation}
        alt="별자리 이미지 예시"
      />
      <span>Planet</span>
    </div>
  );
};

export default ListSectionConstellation;
