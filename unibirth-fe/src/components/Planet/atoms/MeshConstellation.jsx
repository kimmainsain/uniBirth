import React from "react";

const MeshConstellation = () => {
  const handleBoxClick = (event) => {
    console.log(event.object);
  };
  return (
    <mesh
      position={[0, 0, 0]}
      onClick={(event) => {
        handleBoxClick(event);
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="hotpink"
        emissive="hotpink"
        emissiveIntensity={5}
      />
    </mesh>
  );
};

export default MeshConstellation;
