"use client";
import React, { useRef, useEffect, Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import dynamic from "next/dynamic";
import MangoModel from "./MangoModel";
import LemonModel from "./LemonModel";
import { motion } from "framer-motion";
import { extend } from "@react-three/fiber";
extend({ OrbitControls, motion });

export function CanSceneTransition() {
  return (
    <div className=" w-full h-full  flex flex-col ">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [16, 0, 0],
        }}
      >
        <ambientLight />
        <spotLight position={[0, 0, 0]} angle={0.1} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset={"sunset"} />
        <Suspense fallback={null}>
          <MangoModel positiony={-8} positionx={0} positionz={0} />
          <LemonModel positiony={-8} positionx={-2} positionz={8} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function LandingSceneLemon() {
  return (
    <div className=" w-full h-full  flex flex-col ">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [16, 0, -5],
        }}
      >
        <ambientLight />
        <spotLight position={[0, 5, 0]} angle={0.1} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset={"sunset"} />
        <Suspense fallback={null}>
          <LemonModel fast={"a"} positiony={-8} positionx={0} positionz={-2} />
          <MangoModel fast={"a"} positiony={-8} positionx={2} positionz={8} />
        </Suspense>
      </Canvas>
    </div>
  );
}
