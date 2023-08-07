import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Text, OrbitControls, Line, Stars } from "@react-three/drei";
import { starListState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import * as THREE from "three";

const ListSectionStar = () => {
  const ref = useRef();
  const { constellationId } = useParams();
  const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useRecoilState(starListState);
  const [boxtitle, setBoxtitle] = useState("");
  const [boxcontent, setBoxcontent] = useState("");
  const [tooltipStyle, setTooltipStyle] = useState({ display: "none" });

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
  // const znum = (Math.floor(Math.random() * 11) - 5) * num;
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

  const handleBoxClick = (event, box) => {
    console.log("event:", event);
    console.log("box:", box);
    // Determine the coordinates of the mouse in normalized device coordinates (-1 to +1)
    const mouse = new THREE.Vector2();
    mouse.x = event.clientX + 100;
    mouse.y = event.clientY - 100;
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log(mouse);
    // const rect = event.target.getBoundingClientRect();
    setTooltipStyle({
      left: `${mouse.x}px`,
      top: `${mouse.y}px`,
      display: "block",
    });
    setBoxtitle(box.title);
    setBoxcontent(box.content);
  };

  return (
    <div className="relative bottom-0 h-screen">
      <Canvas camera={{ position: [10, 10, 50] }}>
        <OrbitControls enableDamping dampingFactor={0.05} enabled={true} />
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
              onClick={() => handleBoxClick(event, index)}
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
      <div>
        <div
          className={`
  absolute z-50 -translate-x-1/2 -translate-y-1/2 transform 
  rounded-lg bg-white p-2 
  ${tooltipStyle.display === "none" ? "hidden" : ""}`}
          style={{ left: tooltipStyle.left, top: tooltipStyle.top }}
        >
          <div className="flex flex-col font-TAEBAEKmilkyway">
            <p className="font-bold">{boxtitle}뭐하냐고</p>
            <p>{boxcontent}뭐하냐고</p>
            <button
              className="rounded-lg bg-red-500 text-white"
              onClick={() => navigateToDetailStar()}
            >
              이동하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSectionStar;
