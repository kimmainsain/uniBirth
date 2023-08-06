import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <orbitControls
      args={[camera, domElement]}
      enableZoom={true}
      enablePan={true}
      panSpeed={0.5}
      // ...
    />
  );
};
