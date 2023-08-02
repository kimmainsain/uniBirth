import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import ListSectionConstellation from "../blocks/ListSectionConstellation";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import { Canvas } from "@react-three/fiber";
import Space from "../../Home/blocks/Space";
// import { Canvas } from "@react-three/fiber";

const DetailPlanet = () => {
  const { navigateToMainPlanet, navigateToRegisterConstellation } =
    useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToMainPlanet,
      icon: <BiSearch />,
    },
  ];
  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별자리 만들기",
      onClick: navigateToRegisterConstellation,
    },
  ];

  return (
    <div className="relative h-screen w-screen">
      <div className="">
        <Header1 buttons={buttonsHeader} />
        <h1>별자리 리스트 화면입니다.d</h1>
        <ListSectionConstellation />
        <Footer1 buttons={buttonsFooter} />
      </div>
      <Canvas camera={{ position: [0, -50, 0] }}>
        <color attach="background" args={["black"]} />
        <Space />
      </Canvas>
    </div>
  );
};

export default DetailPlanet;
