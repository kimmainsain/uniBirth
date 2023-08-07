// import React from "react";
import React from "react";
// import usePlanetApi from "../../../api/usePlanetApi";
import { useNavigation } from "../../../hooks/useNavigation";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import { gsap } from "gsap";
import * as THREE from "three";
import earth1 from "./earth1.jpg";

const ListSectionPlanet = () => {
  const { navigateToDetailPlanet } = useNavigation();
  // planet raw data, num: 행성간 거리

  const texture = useLoader(THREE.TextureLoader, earth1);

  const num = 15;
  const planetList = [
    [num, 0, 0, "planet1", 1],
    [num * Math.sin(45), 0, num * Math.sin(45), "planet2", 2],
    [0, 0, num, "planet3", 3],
    [-num * Math.sin(45), 0, num, "planet4", 4],
    [-num, 0, 0, "planet5", 5],
    [-num * Math.sin(45), 0, -num * Math.sin(45), "planet6", 6],
    [0, 0, -num, "planet7", 7],
    [num * Math.sin(45), 0, -num * Math.sin(45), "planet8", 8],
  ];

  return (
    <div className="flex h-72 flex-row flex-wrap justify-center">
      <Canvas camera={{ position: [10, 10, 50] }}>
        <OrbitControls enableDamping dampingFactor={0.05} enabled={true} />
        <axesHelper scale={5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <color attach="background" args={["black"]} />
        {planetList.map((planet, index) => (
          <group key={index}>
            <mesh
              position={[planet[0], planet[1], planet[2]]}
              onClick={() => navigateToDetailPlanet(planet[4])}
            >
              <sphereGeometry args={[3, 32, 32]} />
              <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                // emissive="#fbf59b"
                emissiveIntensity={100}
                // emissiveIntensity={starList.starList[index].brightness}
              />
              <meshBasicMaterial map={texture} />
            </mesh>
            <Text
              position={[planet[0], planet[1] + 4, planet[2]]}
              color="#ffffff" // Optional: choose the color of the text
              anchorX="center" // Optional: horizontal alignment
              anchorY="middle" // Optional: vertical alignment
              fontSize={3} // Optional: font sizeq
            >
              {planet[3]}
            </Text>
          </group>
        ))}
      </Canvas>
      <span className="text-white">Planet</span>
    </div>
  );
};

export default ListSectionPlanet;
