import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import Footer1 from "../../../common/blocks/Footer1";
import Button1 from "../../../common/atoms/Button1";
import ListSectionStar from "../blocks/ListSectionStar";

const DetailConstellation = () => {
  const { navigateToBack, navigateToRegisterStar } = useNavigation();

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];

  const buttonsFooter = [
    {
      component: Button1,
      value: "참여하기",
      onClick: navigateToRegisterStar,
    },
  ];

  return (
    <div>
      <div className="absolute left-1/3 top-20 z-10 flex flex-col space-y-2 space-y-5 p-4">
        <Header1 buttons={buttonsHeader} />
      </div>
      <ListSectionStar className="relative left-0 top-0 z-0 h-full w-full" />
      <div className="absolute bottom-20 left-1/3 z-10 flex flex-col space-y-2 space-y-5 p-4">
        <Footer1
          className="absolute right-1/2 top-0 z-10 flex flex-col space-y-2 space-y-5 p-4"
          buttons={buttonsFooter}
        />
      </div>
    </div>
  );
};

export default DetailConstellation;
