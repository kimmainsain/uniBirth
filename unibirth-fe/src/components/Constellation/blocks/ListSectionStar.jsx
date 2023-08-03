import React, { useEffect } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Text, OrbitControls } from "@react-three/drei";
import { starListState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
// import * as THREE from "three";

const ListSectionStar = () => {
  const { constellationId } = useParams();
  const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useRecoilState(starListState);

  useEffect(() => {
    getStarList(constellationId);
  }, [constellationId]);

  const getStarList = async (constellationId) => {
    console.log("consteelationID:", constellationId);
    try {
      const response = await useConstellationApi.constellationsGetConstellation(
        constellationId,
      );
      console.log(" setStarList:", response);
      setStarList(response.resultData);
      console.log(response.resultData);
    } catch (error) {
      console.error("Failed to get star list:", error);
    }
  };

  if (!starList) {
    return <div>Loading...</div>;
  }

  const starPoint = starList?.pointList;
  console.log("starPoint:", starPoint);

  console.log("eeeeeeeeeeeee:", starList);
  console.log(starList?.pointList);
  console.log("5555:", starPoint);

  return (
    <div>
      <Canvas camera={{ position: [10, 10, 50] }}>
        <OrbitControls enableDamping dampingFactor={0.05} enabled={true} />
        <axesHelper scale={5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <color attach="background" args={["black"]} />
        {starPoint?.map((star, index) => (
          <group key={index}>
            <mesh
              position={[star[0], star[1], Math.floor(Math.random() * 11) - 5]}
              onClick={() => navigateToDetailStar(star.starId)}
            >
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                // emissive="#fbf59b"
                emissiveIntensity={1}
                // emissiveIntensity={starList.starList[index].brightness}
              />
            </mesh>
            <Text
              position={[1, 2 + 5, 1]}
              color="#ffffff" // Optional: choose the color of the text
              anchorX="center" // Optional: horizontal alignment
              anchorY="middle" // Optional: vertical alignment
              fontSize={500} // Optional: font sizeq
            >
              {star.statId}
            </Text>
          </group>
        ))}
      </Canvas>
      {starList?.starList.map((star) => (
        <div
          key={star.starId}
          onClick={() => navigateToDetailStar(star.starId)}
          className="absolute left-10 top-80 z-10 flex h-1/5 w-1/5 flex-col space-y-20 text-white"
        >
          <p className="flex w-52 flex-col bg-red-500">
            {star.starId}, {star.nickname} , {star.x}, {star.y}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListSectionStar;
