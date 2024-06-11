"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function CanModel() {
  const ref = useRef();
  const obj = useLoader(OBJLoader, "/redbull.obj");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.2 + Math.cos(t / 4.5) / 5,
      Math.sin(t / 4) / 4,
      0.4 - (1 + Math.sin(t / 4)) / 5
    );
    ref.current.position.y = -2.5;
    ref.current.position.x = 0;
  });

  return <primitive ref={ref} object={obj} />;
}

export function CanScene() {
  return (
    <div className="h-[80vh] w-[30vw] flex flex-col items-end bg-transparent">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [4, 0, 0],
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 0, 0]} angle={0.1} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <CanModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function CanSceneHome() {
  return (
    <div className="h-[50vh] w-[30vw] flex flex-col items-end bg-transparent">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [4, 0, 0],
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 0, 0]} angle={0.1} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <CanModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
