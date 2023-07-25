import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Header2 from "../../../common/blocks/Header2";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigation } from "../../../hooks/useNavigation";

const Followers = () => {
  const { navigateToProfile } = useNavigation();
  const { navigateToFollowings } = useNavigation();

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToProfile,
      icon: <IoIosArrowBack />,
    },
  ];

  const buttonsHeader2 = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "팔로잉",
      onClick: navigateToFollowings,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "팔로워",
    },
  ];

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <Header1 buttons={buttonsHeader2} />
      <h1> 팔로워 리스트입니다..</h1>
    </div>
  );
};

export default Followers;
