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
      <Header1
        className="absolute left-0 top-0 z-10 flex flex-col space-y-2 space-y-5 bg-red-500 p-4"
        buttons={buttonsHeader}
      />
      <h1>여기서 별 리스트가 나와야합니다</h1>
      <ListSectionStar className="relative left-0 top-0 z-0 h-full w-full" />
      <Footer1
        className="absolute right-0 top-0 z-10 flex flex-col space-y-2 space-y-5 p-4"
        buttons={buttonsFooter}
      />
    </div>
  );
};

export default DetailConstellation;
