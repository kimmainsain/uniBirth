import React from "react";
import Button1 from "../../../common/atoms/Button1";
import { BiLogInCircle, BiSearch, BiHomeAlt } from "react-icons/bi";
import Button2 from "../../../common/atoms/Button2";

import { useNavigation } from "../../../hooks/useNavigation";

const HomeFooter = () => {
  const { navigateToLogin, navigateToDetailConstellation, refreshPage } =
    useNavigation();

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <Button1
        className="font-TAEBAEKmilkyway"
        value="별자리검색"
        onClick={() => navigateToDetailConstellation(1)}
        icon={<BiSearch />}
      />

      <Button2
        className="font-TAEBAEKmilkyway"
        value="홈"
        onClick={refreshPage}
        icon={<BiHomeAlt />}
      />

      <Button1
        className="font-TAEBAEKmilkyway"
        value="로그인"
        onClick={navigateToLogin}
        icon={<BiLogInCircle />}
      />
    </div>
  );
};

export default HomeFooter;
