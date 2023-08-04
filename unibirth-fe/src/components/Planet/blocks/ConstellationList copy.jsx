import React, { useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Line, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Controls = React.forwardRef((props, ref) => {
  useFrame((state) => ref.current && ref.current.update());
  return <OrbitControls ref={ref} {...props} />;
});

Controls.displayName = "Controls";

const CameraController = () => {
  const { camera } = useThree();
  const controlsRef = useRef();

  window.camera = camera;
  window.controlsRef = controlsRef;

  // useFrame callback will run on every frame render.
  useFrame(() => {
    if (controlsRef.current) {
      //   Set target of controls to [0,0,0].
      controlsRef.current.target.set(0, 0.5, 0);
      controlsRef.current.update(); // remember to call the update method when you change properties of controls.
    }
  });

  return <Controls enabled={true} ref={controlsRef} dampingFactor={0.01} />;
};

const StarCanvas = () => {
  //   const [selectedStar, setSelectedStar] = useState(null);
  const [stars, setStars] = useState([]);
  const [boxes, setBoxes] = useState([
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6],
    [-1, 2, 3],
  ]);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [zCoord, setZCoord] = useState(0);
  const [lines, setLines] = useState([]);
  const [lineStart, setLineStart] = useState(0);
  const [lineEnd, setLineEnd] = useState(0);

  const handleCreateStar = () => {
    setBoxes((oldBoxes) => [...oldBoxes, { x: xCoord, y: yCoord, z: zCoord }]);
  };
  const handleCreateLine = () => {
    const start = boxes[lineStart];
    const end = boxes[lineEnd];
    setLines((oldLines) => [...oldLines, { start, end }]);

    console.log(boxes);
  };

  const createStar = (x, y, z) => {
    const newStar = { x, y, z };
    setStars([...stars, newStar]);
  };

  // Call this function in your UI buttons
  const moveCamera = (x, y, z) => {
    window.camera.position.x += x;
    window.camera.position.y += y;
    window.camera.position.z += z;
  };

  window.moveCamera = moveCamera; // expose the function to global so you can call it outside Canvas

  const handleDeleteBox = (indexToRemove) => {
    setBoxes((oldBoxes) =>
      oldBoxes.filter((_, index) => index !== indexToRemove),
    );
  };
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute left-16 top-20 z-10 flex flex-col p-4">
        <input
          type="number"
          placeholder="X"
          onChange={(e) => {
            setXCoord(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Y"
          onChange={(e) => setYCoord(e.target.value)}
        />
        <input
          type="number"
          placeholder="Z"
          onChange={(e) => setZCoord(e.target.value)}
        />
        <button className="bg-blue-500" onClick={handleCreateStar}>
          Create box
        </button>
      </div>
      <div className="absolute left-0 top-0 z-10 p-4">
        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={() =>
            createStar(
              Math.random() * 10 - 5,
              Math.random() * 10 - 5,
              Math.random() * 10 - 5,
            )
          }
        >
          Create a stars
        </button>
        <button
          className="ml-4 rounded bg-red-500 p-2 text-white"
          onClick={() => setStars([])}
        >
          Remove all stars
        </button>
      </div>

      <div className="absolute left-16 top-52 z-10 flex flex-col space-y-2 space-y-5 p-4">
        <input
          type="number"
          placeholder="Start index"
          onChange={(e) => setLineStart(e.target.value)}
        />
        <input
          type="number"
          placeholder="End index"
          onChange={(e) => setLineEnd(e.target.value)}
        />
        <button className="bg-blue-500" onClick={handleCreateLine}>
          Create line
        </button>
      </div>
      <div className="absolute right-0 top-0 z-10 flex flex-col space-y-2 space-y-5 p-4">
        <button
          className=" h-10 w-20 bg-red-500 text-white"
          onClick={() => window.moveCamera(0, 2, 0)}
        >
          Up
        </button>
        <button
          className=" h-10 w-20 bg-blue-500 text-white"
          onClick={() => window.moveCamera(0, -2, 0)}
        >
          Down
        </button>
        <button
          className=" h-10 w-20 bg-green-500 text-white"
          onClick={() => window.moveCamera(-2, 0, 0)}
        >
          Left
        </button>
        <button
          className=" h-10 w-20 bg-yellow-500 text-white"
          onClick={() => window.moveCamera(2, 0, 0)}
        >
          Right
        </button>
      </div>

      <div className="absolute left-10 top-80 z-10 h-1/5 w-1/5 p-2 text-white">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="w-1/4 px-4 py-2">Index</th>
              <th className="w-1/4 px-4 py-2">X</th>
              <th className="w-1/4 px-4 py-2">Y</th>
              <th className="w-1/4 px-4 py-2">Z</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index}</td>
                <td className="border px-4 py-2">{box.x}</td>
                <td className="border px-4 py-2">{box.y}</td>
                <td className="border px-4 py-2">{box.z}</td>
                <button onClick={() => handleDeleteBox(index)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Canvas */}
      <div className="absolute left-0 top-0 h-screen w-screen">
        <Canvas camera={{ position: [5, 5, 5] }}>
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
          </EffectComposer>
          <axesHelper scale={5} />
          <CameraController />

          <color attach="background" args={["black"]} />

          {boxes.map((box, index) => (
            <group key={index}>
              <mesh position={[box[0], box[1], box[2]]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                  color="#00ffff"
                  emissive="#00ffff"
                  //   emissive="#fbf59b"
                  emissiveIntensity={1}
                  //   emissiveIntensity={Math.random() * 0.5 + 0.5}
                />
              </mesh>
              <pointLight
                position={[box.x, box.y, box.z]}
                color="#ffff00"
                intensity={20}
                distance={200}
              />
            </group>
          ))}

          {boxes.map((box, index) => (
            <group key={index}>
              {/* <mesh position={[box[0], box[1], box[2]]}></mesh> */}
              <mesh position={[box.x, box.y, box.z]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                  color="#00ffff"
                  emissive="#00ffff"
                  //   emissive="#fbf59b"
                  emissiveIntensity={1}
                  //   emissiveIntensity={Math.random() * 0.5 + 0.5}
                />
              </mesh>
              <pointLight
                position={[box.x, box.y, box.z]}
                color="#ffff00"
                intensity={20}
                distance={200}
              />
            </group>
          ))}
          {stars.map((star, index) => (
            <Stars
              key={index}
              position={[star.x, star.y, star.z]}
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={1}
              fade
            />
          ))}
          {lines.map((line, index) => (
            <Line
              key={index}
              points={[
                [line.start.x, line.start.y, line.start.z],
                [line.end.x, line.end.y, line.end.z],
              ]}
              color="white"
            />
          ))}
        </Canvas>
      </div>
    </div>
  );
};

export default StarCanvas;
