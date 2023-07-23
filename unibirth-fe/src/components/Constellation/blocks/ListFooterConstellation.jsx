import React from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";

const ListFooterConstellation = () => {
  const { navigateToCreateConstellation } = useNavigation();

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <Button1
        className="font-TAEBAEKmilkyway"
        value="별자리만들기"
        onClick={navigateToCreateConstellation}
      />
    </div>
  );
};

export default ListFooterConstellation;
