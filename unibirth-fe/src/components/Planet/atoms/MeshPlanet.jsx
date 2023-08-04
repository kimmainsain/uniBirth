import React from "react";
import { Html } from "@react-three/drei";
import earth1 from "../../../assets/images/earth1.jpg";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const MeshPlanet = (navigateToDetailPlanet) => {
  const texture = useLoader(THREE.TextureLoader, earth1);
  const num = 30;
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
    <>
      {planetList?.map((planet, index) => (
        <group key={index}>
          <mesh
            position={[planet[0], planet[1], planet[2]]}
            onClick={() => navigateToDetailPlanet(planet[4])}
          >
            <sphereGeometry args={[3, 32, 32]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#ffffff"
              // emissive="#fbf59b"
              emissiveIntensity={1}
              // emissiveIntensity={starList.starList[index].brightness}
            />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Html position={[planet[0] - 1, planet[1] + 5, planet[2]]}>
            <div
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {planet[3]}
            </div>
          </Html>
        </group>
      ))}
    </>
  );
};

export default MeshPlanet;
