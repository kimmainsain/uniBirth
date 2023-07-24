import React from "react";
import Button1 from "../../../common/atoms/Button1";
import { FaStarAndCrescent } from "react-icons/fa";
import { useNavigation } from "../../../hooks/useNavigation";

const ConstellationSectionProfile = () => {
  const { navigateToListConstellation } = useNavigation();
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <h1>별자리 섹션 프로필 화면입니다. </h1> 오른쪽 별 클릭
      <FaStarAndCrescent onClick={navigateToListConstellation} />
      <Button1 value="참여한 별자리" className="font-TAEBAEKmilkyway" />
      <Button1 value="핀한 별자리" className="font-TAEBAEKmilkyway" />
    </div>
  );
};

export default ConstellationSectionProfile;
