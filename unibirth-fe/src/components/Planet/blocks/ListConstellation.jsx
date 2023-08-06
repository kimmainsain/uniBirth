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

const Scene = ({ constellationList }) => {
  const controlsRef = useRef();
  const [isOrbitActive, setOrbitActive] = useState(true);

  const handleLeftClick = () => {
    const targetX = controlsRef.current.target.x - 50;
    const cameraX = controlsRef.current.object.position.x - 50;

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
    const targetX = controlsRef.current.target.x + 50;
    const cameraX = controlsRef.current.object.position.x + 50;

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
        className="absolute bottom-10 right-20 z-10 flex flex-col text-6xl text-white"
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
          radius={300}
          depth={50}
          count={10000}
          factor={4}
          saturation={1}
          fade
        />
        <MeshConstellation constellationList={constellationList} />
      </Canvas>
    </>
  );
};

export default Scene;
