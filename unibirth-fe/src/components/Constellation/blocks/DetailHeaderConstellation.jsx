import React from "react";
import Button2 from "../../../common/atoms/Button2";
import { BiArrowBack } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";

const DetailHeaderConstellation = () => {
  const { navigateToBack } = useNavigation();

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <Button2
        className="font-TAEBAEKmilkyway"
        value="뒤로가기"
        onClick={navigateToBack}
        icon={<BiArrowBack />}
      />
    </div>
  );
};

export default DetailHeaderConstellation;
