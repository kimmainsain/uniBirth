import React from "react";
import Button1 from "../../../common/atoms/Button1";
import { BsPinAngle } from "react-icons/bs";
import { useNavigation } from "../../../hooks/useNavigation";

const DetailFooterConstellation = () => {
  const { navigateToStar } = useNavigation();

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <Button1
        className="font-TAEBAEKmilkyway"
        value="별자리보기"
        onClick={navigateToStar}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="찜하기"
        onClick={navigateToStar}
        icon={<BsPinAngle />}
      ></Button1>
    </div>
  );
};

export default DetailFooterConstellation;
