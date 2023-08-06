import React from "react";
import { Html } from "@react-three/drei";
import { useNavigation } from "../../../hooks/useNavigation";

const MeshHtml = ({ constellationList, moveNum, xdamper }) => {
  const handleBoxClick = () => (event, constellation) => {
    console.log("event:", event);
    console.log("constellation:", constellation);
  };

  const { navigateToDetailConstellation } = useNavigation();

  const handleConstellationClick = (constellationId) => {
    navigateToDetailConstellation(constellationId);
  };

  console.log("constellationList:", constellationList);
  return (
    <>
      {constellationList?.constellationList.map((constellation, index) => (
        <group key={index}>
          <Html position={[index * moveNum + xdamper, -10, 0]}>
            <div
              style={{
                color: "white",
                fontSize: "24x",
                textAlign: "center",
              }}
              onClick={handleBoxClick({ event, constellation })}
            >
              <div className="h-40 w-40 space-y-5">
                <div className="flex justify-center">
                  <div className="flex w-24 flex-row items-center justify-between">
                    <p className="text-2lg">{constellation.constellationId}</p>
                    <p>{constellation.title}</p>
                  </div>
                  <div>{constellation.content}</div>
                </div>
                <button
                  className="w-40 rounded-full bg-red-500 p-2 text-white"
                  onClick={() =>
                    handleConstellationClick(constellation.constellationId)
                  }
                >
                  별자리 이동하기
                </button>
                <img src={constellation.imageUrl} />
              </div>
            </div>
          </Html>
        </group>
      ))}
    </>
  );
};

export default MeshHtml;
