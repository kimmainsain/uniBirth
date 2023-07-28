import React from "react";

function Space() {
  return (
    <>
      <directionalLight />
      <mesh>
        <directionalLight />
        <boxGeometry scale={[1, 1, 1]} />
        <meshStandardMaterial color="#e67e22" />
      </mesh>
    </>
  );
}

export default Space;

// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// function Stars() {
//   const starsRef = useRef();

//   const [starGeo, starMaterial] = useMemo(() => {
//     const starGeo = new THREE.BufferGeometry();
//     const vertices = [];
//     const velocity = [];
//     const acceleration = [];

//     for (let i = 0; i < 6000; i++) {
//       vertices.push(
//         Math.random() * 600 - 300,
//         Math.random() * 600 - 300,
//         Math.random() * 600 - 300,
//       );
//       velocity.push(0);
//       acceleration.push(0.02);
//     }

//     starGeo.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(vertices, 3),
//     );
//     starGeo.setAttribute(
//       "velocity",
//       new THREE.Float32BufferAttribute(velocity, 1),
//     );
//     starGeo.setAttribute(
//       "acceleration",
//       new THREE.Float32BufferAttribute(acceleration, 1),
//     );

//     const sprite = new THREE.TextureLoader().load("star.png");
//     const starMaterial = new THREE.PointsMaterial({
//       color: 0xaaaaaa,
//       size: 1,
//       map: sprite,
//     });

//     return [starGeo, starMaterial];
//   }, []);

//   useFrame(() => {
//     const position = starsRef.current.geometry.attributes.position;
//     const velocity = starsRef.current.geometry.attributes.velocity;
//     const acceleration = starsRef.current.geometry.attributes.acceleration;

//     for (let i = 0; i < position.count; i++) {
//       velocity.array[i] += acceleration.array[i];
//       position.array[i * 3 + 1] -= velocity.array[i];

//       if (position.array[i * 3 + 1] < -200) {
//         position.array[i * 3 + 1] = 200;
//         velocity.array[i] = 0;
//       }
//     }

//     position.needsUpdate = true;

//     starsRef.current.rotation.y += 0.002;
//   });

//   return (
//     <>
//       <points ref={starsRef}>
//         <bufferGeometry attach="geometry" {...starGeo} />
//         <pointsMaterial attach="material" {...starMaterial} />
//       </points>
//       <mesh>
//         <sphereGeometry attach="geometry" args={[50, 32, 32]} />
//         <meshBasicMaterial attach="material" color={0x7777ff} />
//       </mesh>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Canvas
//       camera={{
//         fov: 60,
//         aspect: window.innerWidth / window.innerHeight,
//         near: 1,
//         far: 1000,
//         position: [0, 0, 1],
//         rotation: [Math.PI / 2, 0, 0],
//       }}
//     >
//       <Stars />
//     </Canvas>
//   );
// }

// ddd
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// let scene, camera, renderer, stars, starMaterial, starGeo;

// function init() {
//   //create scene object
//   scene = new THREE.Scene();

//   //setup camera with facing upward
//   camera = new THREE.PerspectiveCamera(
//     60,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000,
//   );
//   camera.position.z = 1;
//   camera.rotation.x = Math.PI / 2;

//   //setup renderer
//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   createStars();

//   animate();
// }

// function createStars() {
//   starGeo = new THREE.BufferGeometry();
//   let vertices = [];
//   let velocity = [];
//   let acceleration = [];

//   for (let i = 0; i < 6000; i++) {
//     vertices.push(
//       Math.random() * 600 - 300,
//       Math.random() * 600 - 300,
//       Math.random() * 600 - 300,
//     );
//     velocity.push(0);
//     acceleration.push(0.02);
//   }

//   starGeo.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(vertices, 3),
//   );
//   starGeo.setAttribute(
//     "velocity",
//     new THREE.Float32BufferAttribute(velocity, 1),
//   );
//   starGeo.setAttribute(
//     "acceleration",
//     new THREE.Float32BufferAttribute(acceleration, 1),
//   );

//   let sprite = new THREE.TextureLoader().load("star.png");
//   starMaterial = new THREE.PointsMaterial({
//     color: 0xaaaaaa,
//     size: 1,
//     map: sprite,
//   });

//   stars = new THREE.Points(starGeo, starMaterial);
//   scene.add(stars);
//   let sphereGeometry = new THREE.SphereGeometry(50, 32, 32);
//   let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff });
//   let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//   scene.add(sphere);
// }

// //rendering loop
// function animate() {
//   let position = stars.geometry.attributes.position;
//   let velocity = stars.geometry.attributes.velocity;
//   let acceleration = stars.geometry.attributes.acceleration;

//   for (let i = 0; i < position.count; i++) {
//     velocity.array[i] += acceleration.array[i];
//     position.array[i * 3 + 1] -= velocity.array[i];

//     if (position.array[i * 3 + 1] < -200) {
//       position.array[i * 3 + 1] = 200;
//       velocity.array[i] = 0;
//     }
//   }

//   position.needsUpdate = true;

//   stars.rotation.y += 0.002;

//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

// init();
