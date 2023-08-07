import React, { useRef, useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  BiSolidRightArrow,
  BiSolidLeftArrow,
  BiMoveHorizontal,
} from "react-icons/bi";
import MeshConstellation from "../atoms/MeshConstellation";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { gsap } from "gsap";
import GradientBackground from "../../../common/atoms/GradientBackground";
import MeshHtml from "../atoms/MeshHtml";

const Scene = ({ constellationList }) => {
  const controlsRef = useRef();
  const [isOrbitActive, setOrbitActive] = useState(true);

  // 별자리 보정계수
  const moveNum = 50;
  const num = 50; // 별자리 간격
  const starmultiple = 3; // 별간격
  const xdamper = -10; // x축+- 보정계수
  const handleLeftClick = () => {
    const targetX = controlsRef.current.target.x - moveNum;
    const cameraX = controlsRef.current.object.position.x - moveNum;

    gsap.to(controlsRef.current.target, {
      x: targetX,
      duration: 1.5, // the duration of the animation in seconds
      onUpdate: () => controlsRef.current.update(),
    });

    gsap.to(controlsRef.current.object.position, {
      x: cameraX,
      duration: 1.5,
    });
  };

  const handleRightClick = () => {
    const targetX = controlsRef.current.target.x + moveNum;
    const cameraX = controlsRef.current.object.position.x + moveNum;

    gsap.to(controlsRef.current.target, {
      x: targetX,
      duration: 1.5,
      onUpdate: () => controlsRef.current.update(),
    });

    gsap.to(controlsRef.current.object.position, {
      x: cameraX,
      duration: 1.5,
    });
  };

  const toggleOrbitControl = () => {
    setOrbitActive(!isOrbitActive);
  };

  return (
    <>
      <button
        className="absolute left-10 top-1/2 z-10 flex flex-col text-6xl text-white"
        onClick={handleLeftClick}
      >
        <BiSolidLeftArrow />
      </button>
      <button
        className="absolute right-10 top-1/2 z-10 flex flex-col text-6xl text-white"
        onClick={handleRightClick}
      >
        <BiSolidRightArrow />
      </button>
      <button
        className="absolute bottom-10 right-5
        z-10 flex -translate-x-1/2 flex-col text-6xl text-white"
        onClick={toggleOrbitControl}
      >
        <BiMoveHorizontal style={{ color: isOrbitActive ? "red" : "white" }} />
      </button>
      <Canvas camera={{ position: [0, 0, 50] }}>
        <GradientBackground />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <OrbitControls
          ref={controlsRef}
          enabled={isOrbitActive}
          // enablePan={true}
          enableDamping={false}
        />
        <axesHelper scale={5} />
        <color attach="background" args={["black"]} />
        <Stars
          radius={400}
          depth={10}
          count={10000}
          factor={4}
          saturation={1}
          fade
        />
        <MeshConstellation
          constellationList={constellationList}
          num={num}
          starmultiple={starmultiple}
          xdamper={xdamper}
        />
        <MeshHtml
          constellationList={constellationList}
          moveNum={moveNum}
          xdamper={xdamper}
        />
      </Canvas>
    </>
  );
};

export default Scene;
