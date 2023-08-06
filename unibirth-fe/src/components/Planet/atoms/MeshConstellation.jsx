import React, { useMemo } from "react";
import { Line } from "@react-three/drei";

const MeshConstellation = ({ constellationList }) => {
  const handleBoxClick = (constellation, constellationId, title) => {
    console.log(
      `Clicked on constellation: ${constellationId}, title: ${title}`,
    );
    console.log("event:", event);
  };

  const constellationMeshes = useMemo(
    () =>
      constellationList?.constellationList.flatMap((constellation) => {
        const { boardSize, constellationId, imageUrl, lineList, title } =
          constellation;

        console.log(constellation);

        const num = 30;
        const starmultiple = 3;

        return lineList.flatMap((line, index) => {
          const [y1, x1, z1, y2, x2, z2] = line;

          return (
            <>
              <mesh
                key={`${constellationId}-${index}-1`}
                position={[
                  x1 * starmultiple + num * index,
                  y1 * starmultiple,
                  z1 * starmultiple,
                ]}
                onClick={() =>
                  handleBoxClick(constellationId, title, boardSize, imageUrl)
                }
              >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                  color="hotpink"
                  emissive="hotpink"
                  emissiveIntensity={5}
                />
              </mesh>
              <mesh
                key={`${constellationId}-${index}-2`}
                position={[
                  x2 * starmultiple + num * index,
                  y2 * starmultiple,
                  z2 * starmultiple,
                ]}
                onClick={() =>
                  handleBoxClick(constellation, constellationId, title)
                }
              >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                  color="hotpink"
                  emissive="hotpink"
                  emissiveIntensity={5}
                />
              </mesh>
              <mesh>
                <Line
                  key={index}
                  points={[
                    [
                      x1 * starmultiple + num * index,
                      y1 * starmultiple,
                      z1 * starmultiple,
                    ],
                    [
                      x2 * starmultiple + num * index,
                      y2 * starmultiple,
                      z2 * starmultiple,
                    ],
                  ]}
                  color="white"
                />
              </mesh>
            </>
          );
        });
      }),
    [constellationList],
  );

  return <>{constellationMeshes}</>;
};

export default MeshConstellation;
