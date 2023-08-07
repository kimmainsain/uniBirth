import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { OrbitControls, Line, Stars } from "@react-three/drei";
import {
  starListState,
  boxcontentState,
  boxnicknameState,
  boxurlState,
  boxidState,
  boxcreatedState,
  StellaIdState,
} from "../../../recoil/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as THREE from "three";
import GradientBackground from "../../../common/atoms/GradientBackground";

const ListSectionStar = () => {
  const ref = useRef();
  // const tooltipRef = useRef(null);
  const { constellationId } = useParams();
  const setStellaId = useSetRecoilState(StellaIdState);

  const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useRecoilState(starListState);
  const [starListIndex, setStarListIndex] = useState([]);
  // Star box Content
  const [boxcontent, setBoxcontent] = useRecoilState(boxcontentState);
  const [boxnickname, setBoxnickname] = useRecoilState(boxnicknameState);
  const [boxurl, setBoxurl] = useRecoilState(boxurlState);
  const [boxid, setBoxid] = useRecoilState(boxidState);
  const [boxcreated, setBoxcreated] = useRecoilState(boxcreatedState);
  // Sphere Color change
  const [sphereColor, setSphereColor] = useState("#00ffff");
  const changeColor = (event) => {
    setSphereColor(event.target.value);
  };

  // tooltip
  const [tooltipStyle, setTooltipStyle] = useState({ display: "none" });

  const handleBoxClick = ({ event, index }) => {
    console.log(index);
    const mouse = new THREE.Vector2();
    mouse.x = event.clientX + 100;
    mouse.y = event.clientY - 100;
    console.log(mouse.x);
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log(mouse);
    // const rect = event.target.getBoundingClientRect();
    setTooltipStyle({
      left: `${mouse.x}px`,
      top: `${mouse.y}px`,
      display: "block",
    });

    // Set StarBox Content
    console.log("index:", starListIndex[index]);
    setBoxcontent(starListIndex[index]?.content);
    setBoxnickname(starListIndex[index]?.nickname);
    setBoxurl(starListIndex[index]?.imageUrl);
    setBoxid(starListIndex[index]?.starId);
    setBoxcreated(starListIndex[index]?.createdAt);
    console.log("boxid:", boxid);
    console.log("boxurl:", boxurl);
  };
  useEffect(() => {
    getStarList(constellationId);
    setStellaId(constellationId);
    console.log("ref:", ref);
  }, [constellationId]);

  const getStarList = async (constellationId) => {
    // console.log("consteelationID:", constellationId);
    try {
      const response = await useConstellationApi.constellationsGetConstellation(
        constellationId,
      );
      console.log(" setStarList:", response);
      setStarList(response.resultData);
      setStarListIndex(response.resultData.starList);
      // console.log("starList:", starList);
    } catch (error) {
      console.error("Failed to get star list:", error);
    }
  };

  // starPotisions recoil 저장
  const starPoint = starList?.pointList;
  const num = 5; // 별 거리 조절
  const zero = 20;
  // const znum = (Math.floor(Math.random() * 11) - 5) * num;
  const starPotisions = starPoint?.map((star) => ({
    x: star[0] * num - zero,
    y: star[1] * num,
    z: star[2] * num,
    // brightness: starList?.Star.brightness,
    // starId: starList?.Star.starId,
    // memberId: starList?.Star.memberId,
    // imageUrl: starList?.Star.constellationId,
  }));

  const lines = starList?.lineList;

  // console.log("lineList:", lines);
  // console.log("starPosition:", starPotisions);

  return (
    <div className="relative bottom-0 h-screen">
      <Canvas camera={{ position: [0, 0, 70] }}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
          enabled={true}
        />
        <axesHelper scale={5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        {/* <color attach="background" args={["black"]} /> */}
        <GradientBackground />
        {starPotisions?.map((star, index) => (
          <group key={index}>
            <mesh
              ref={ref}
              position={[star.x, star.y, star.z]}
              onClick={(event) => {
                if (starListIndex[index]) {
                  handleBoxClick({ event, index });
                }
              }}
            >
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial
                color={sphereColor}
                emissive={sphereColor}
                // emissive="#fbf59b"
                // emissiveMap={material}
                emissiveIntensity={starListIndex[index]?.brightness + 1 || 0.04}
                // emissiveIntensity={starList.starList[index].brightness}
              />
            </mesh>
            {lines.map((line, index) => (
              <Line
                key={index}
                points={[
                  [line[0] * num - zero, line[1] * num, line[2] * num],
                  [line[3] * num - zero, line[4] * num, line[5] * num],
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
        {/* 별을 클릭했을 때 위치 조정 필요 */}
        <div
          className={`
  absolute z-50 -translate-x-1/2 -translate-y-1/2 transform 
  rounded-lg bg-white p-2 
  ${tooltipStyle.display === "none" ? "hidden" : ""}`}
          style={
            { left: tooltipStyle.left, top: tooltipStyle.top }
            // parseInt(tooltipStyle.left) < 400
            //   ? { left: tooltipStyle.left, top: tooltipStyle.top }
            //   : { left: tooltipStyle.left - 400, top: tooltipStyle.top }
            // right: `${
            //   window.innerWidth -
            //   parseInt(tooltipStyle.left) -
            //   tooltipRef.current.offsetWidth
            // }px`,
            // top: tooltipStyle.top,
          }
        >
          <div className="relative flex flex-col font-TAEBAEKmilkyway">
            <button
              className="absolute right-0 top-0 rounded-lg font-bold"
              onClick={() =>
                setTooltipStyle({ ...tooltipStyle, display: "none" })
              }
            >
              X
            </button>
            <div className="flex-flex-row">
              <div className="flex">
                <img
                  className="rounded-lg"
                  src={boxurl}
                  alt="star"
                  // width="100px"
                  // height="100px"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between p-2">
                  <p className="flex font-bold">{boxnickname}</p>
                  <p className="flex">{boxcreated?.slice(0, 10)}</p>
                </div>
                <p>{boxcontent}</p>
                <p></p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="colorPicker" className="flex">
                Change Color:
              </label>
              <input
                id="colorPicker"
                type="color"
                value={sphereColor}
                onChange={changeColor}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <button
              className="rounded-lg bg-red-500 text-white"
              onClick={() => navigateToDetailStar(boxid)}
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
