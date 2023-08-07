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

const Scene = () => {
  const controlsRef = useRef();
  const [isOrbitActive, setOrbitActive] = useState(true);

  const handleLeftClick = () => {
    // Subtract 5 from the x-coordinate of the current target
    controlsRef.current.target.x -= 2;
    controlsRef.current.update();
  };

  const handleRightClick = () => {
    // Add 5 to the x-coordinate of the current target
    controlsRef.current.target.x += 2;
    controlsRef.current.update();
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
      <Canvas camera={{ position: [0, 0, 10] }}>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <OrbitControls ref={controlsRef} enabled={isOrbitActive} />
        <axesHelper scale={5} />
        <color attach="background" args={["black"]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={1}
          fade
        />
        <MeshConstellation />
      </Canvas>
    </>
  );
};

export default Scene;
