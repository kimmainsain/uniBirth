import React, { useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { gsap } from "gsap";

const Scene = () => {
  const controlsRef = useRef();

  const handleLeftClick = () => {
    gsap.to(controlsRef.current.target, {
      x: controlsRef.current.target.x - 2,
      onUpdate: () => controlsRef.current.update(),
    });
  };

  const handleRightClick = () => {
    gsap.to(controlsRef.current.target, {
      x: controlsRef.current.target.x + 20,
      onUpdate: () => controlsRef.current.update(),
    });
  };

  // const handleRightClick = () => {
  //   // Add 5 to the x-coordinate of the current target
  //   controlsRef.current.target.x += 2;
  //   controlsRef.current.update();
  // };

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
      <Canvas>
        <OrbitControls ref={controlsRef} />
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
      </Canvas>
    </>
  );
};

export default Scene;
