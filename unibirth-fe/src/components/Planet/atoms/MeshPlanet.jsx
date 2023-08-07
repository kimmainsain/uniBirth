import React, { useRef } from "react";
import { Html } from "@react-three/drei";
import earth1 from "../../../assets/images/earth1.jpg";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";

const MeshPlanet = ({ navigateToDetailPlanet }) => {
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
  const rotationValues = Array(planetList.length)
    .fill()
    .map(() => (Math.random() - 0.5) * 0.005); // Generate random rotation values

  const meshRefs = useRef([]);
  meshRefs.current = [];
  meshRefs.current = planetList.map((_, i) => meshRefs.current[i] ?? useRef());

  useFrame(() => {
    meshRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.rotation.y += rotationValues[index];
        ref.current.rotation.x += rotationValues[index];
      }
    });
  });

  return (
    <>
      {planetList?.map((planet, index) => (
        <group key={index}>
          <mesh
            ref={meshRefs.current[index]}
            position={[planet[0], planet[1], planet[2]]}
            onClick={() => {
              console.log(planet[4]);
              navigateToDetailPlanet(planet[4]);
            }}
          >
            <sphereGeometry args={[3, 32, 32]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              // emissive="#fbf59b"
              emissiveIntensity={10}
              // emissiveIntensity={starList.starList[index].brightness}
            />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Html position={[planet[0], planet[1] + 5, planet[2]]}>
            <div
              style={{
                color: "white",
                fontSize: "24x",
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
