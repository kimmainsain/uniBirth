import React from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import Button1 from "../../../common/atoms/Button1";

const CreateFooterConstellation = () => {
  const { navigateToDrawingConstellation } = useNavigation();

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <Button1
        className="font-TAEBAEKmilkyway"
        value="별자리 그리기"
        onClick={navigateToDrawingConstellation}
      />
    </div>
  );
};

export default CreateFooterConstellation;
