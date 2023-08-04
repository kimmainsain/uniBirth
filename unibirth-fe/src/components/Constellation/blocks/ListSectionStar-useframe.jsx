import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useParams } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Text, OrbitControls, Line, Stars } from "@react-three/drei";
import { starListState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import * as THREE from "three";

const ListSectionStar = () => {
  const { constellationId } = useParams();
  const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useRecoilState(starListState);
  const ref = useRef();
  const [closestObject, setClosestObject] = useState(null);

  const SceneComponent = () => {
    const { scene, camera } = useThree();
    const raycaster = new THREE.Raycaster();
    const [intersects, setIntersects] = useState([]);
    console.log(closestObject);
    console.log(intersects);

    useFrame(() => {
      raycaster.setFromCamera(new THREE.Vector2(), camera);
      const intersections = raycaster.intersectObjects(scene.children, true);

      // If there are intersections, find the closest one
      if (intersections.length > 0) {
        const [closestIntersection] = intersections.sort(
          (a, b) => a.distance - b.distance,
        );
        const distance = closestIntersection.distance;
        // console.log(distance);

        // If the distance is less than the threshold, update the closest object
        const threshold = 10; // You can adjust this value
        if (distance < threshold) {
          setClosestObject(closestIntersection.object);
        } else {
          setClosestObject(null);
        }
      } else {
        setClosestObject(null);
      }

      setIntersects(intersections);
    });
  };

  useEffect(() => {
    getStarList(constellationId);
    console.log("ref:", ref);
  }, [constellationId]);

  const getStarList = async (constellationId) => {
    console.log("consteelationID:", constellationId);
    try {
      const response = await useConstellationApi.constellationsGetConstellation(
        constellationId,
      );
      console.log(" setStarList:", response);
      setStarList(response.resultData);
      // console.log("starList:", starList);
    } catch (error) {
      console.error("Failed to get star list:", error);
    }
  };

  // starPotisions recoil 저장
  const starPoint = starList?.pointList;
  const num = 1.5; // 별 거리 조절
  const starPotisions = starPoint?.map((star) => ({
    x: star[0] * num,
    y: star[1] * num,
    z: (Math.floor(Math.random() * 11) - 5) * num,
    // brightness: starList?.Star.brightness,
    // starId: starList?.Star.starId,
    // memberId: starList?.Star.memberId,
    // imageUrl: starList?.Star.constellationId,
  }));

  const lines = starList?.lineList;

  console.log("lineList:", lines);
  console.log("starPosition:", starPotisions);

  return (
    <div className="relative bottom-0 h-screen">
      <Canvas camera={{ position: [10, 10, 50] }}>
        <OrbitControls enableDamping dampingFactor={0.05} enabled={true} />
        <SceneComponent />
        <axesHelper scale={5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <color attach="background" args={["black"]} />
        {starPotisions?.map((star, index) => (
          <group key={index}>
            <mesh
              ref={ref}
              position={[star.x, star.y, star.z]}
              onClick={() => navigateToDetailStar(index)}
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
            {lines.map((line, index) => (
              <Line
                key={index}
                points={[
                  [
                    starPotisions[line[0]].x,
                    starPotisions[line[0]].y,
                    starPotisions[line[0]].z,
                  ],
                  [
                    starPotisions[line[2]].x,
                    starPotisions[line[2]].y,
                    starPotisions[line[2]].z,
                  ],
                ]}
                color="white"
              />
            ))}
          </group>
        ))}
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation (default=0)
          fade // Faded dots (default=false)
        />
      </Canvas>
      {closestObject && (
        <div className="bg-red-500 text-white">이자식들아!!!!</div>
      )}
    </div>
  );
};

export default ListSectionStar;
