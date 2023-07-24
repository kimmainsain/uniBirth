import React from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";
const ConstellationSectionProfile = () => {
  const { navigateToModifyProfile } = useNavigation();
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <Button1
        value="수정"
        className="font-TAEBAEKmilkyway"
        onClick={navigateToModifyProfile}
      />
      <h1>멤버 섹션 프로필 화면입니다.</h1>
    </div>
  );
};

export default ConstellationSectionProfile;
