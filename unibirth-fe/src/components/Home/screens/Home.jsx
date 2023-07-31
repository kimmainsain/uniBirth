import React, { useEffect } from "react";
import Footer1 from "../../../common/blocks/Footer1";
import Button1 from "../../../common/atoms/Button1";

import { useNavigation } from "../../../hooks/useNavigation";
import Space from "../blocks/Space";
import { Canvas, useThree } from "@react-three/fiber";

const Home = () => {
  const { navigateToMainPlanet } = useNavigation();

  const buttons = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "시작하기",
      onClick: navigateToMainPlanet,
    },
  ];

  function SetCanvasSize() {
    const { gl } = useThree();

    useEffect(() => {
      gl.setSize(1000, 800);
    }, [gl]);

    return null;
  }

  return (
    <div className="relative h-screen w-screen">
      <p className="absolute left-1/3 top-10 z-10 font-TAEBAEKmilkyway text-2xl text-white">
        세상에서 가장 빛나는 너의 별
      </p>
      <p className="absolute left-1/3 top-20 z-10 font-TAEBAEKmilkyway text-4xl text-white">
        uni-Birth
      </p>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
        <Footer1 buttons={buttons} />
      </div>
      <div className="absolute top-0 z-0 h-full w-full">
        <Canvas camera={{ position: [0, -50, 0] }}>
          <SetCanvasSize />
          <color attach="background" args={["black"]} />
          <Space />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
