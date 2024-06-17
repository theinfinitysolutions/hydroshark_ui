import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function LemonModelAlt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/can_lemon/model.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(0, 1.5 + t / 3, 0);
    // ref.current.rotation.set(0, Math.cos(t / 1.5), 0.1);

    ref.current.position.y = props.positiony;
    ref.current.position.x = props.positionx + -Math.sin(t / 1.5) * 0.5;
    ref.current.position.z = props.positionz;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.lemon_can.geometry} material={materials.can} />
      <mesh geometry={nodes.lemon_can_1.geometry} material={materials.inage} />
    </group>
  );
}

useGLTF.preload("/model.gltf");
