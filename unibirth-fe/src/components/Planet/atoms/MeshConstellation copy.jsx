import React, { useMemo } from "react";

const MeshConstellation = ({ constellationList }) => {
  const handleBoxClick = (constellationId, title) => {
    console.log(
      `Clicked on constellation: ${constellationId}, title: ${title}`,
    );
  };

  const constellationMeshes = useMemo(
    () =>
      constellationList?.constellationList.flatMap((constellation) => {
        const { boardSize, constellationId, imageUrl, lineList, title } =
          constellation;

        return lineList.flatMap((line, index) => {
          const [x1, y1, z1, x2, y2, z2] = line;

          return (
            <>
              <mesh
                key={`${constellationId}-${index}-1`}
                position={[x1, y1, z1]}
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
                position={[x2, y2, z2]}
                onClick={() => handleBoxClick(constellationId, title)}
              >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                  color="hotpink"
                  emissive="hotpink"
                  emissiveIntensity={5}
                />
              </mesh>
            </>
          );
        });
      }),
    [constellationList],
  );
  // return (
  //   <mesh
  //     key={constellationId}
  //     position={[x, y, z]}
  //     onClick={() => handleBoxClick(constellationId, title)}
  //   >
  //     <sphereGeometry args={[1, 32, 32]} />
  //     <meshStandardMaterial
  //       color="hotpink"
  //       emissive="hotpink"
  //       emissiveIntensity={5}
  //     />
  //   </mesh>
  // );

  return <>{constellationMeshes}</>;
};

export default MeshConstellation;
