// @ts-nocheck
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF , useOBJ } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/3d/chess.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

export function ChessPiece() {
  return (
    <Canvas className="w-full h-full">
      <Environment preset="studio" />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}

useGLTF.preload("/3d/chess.glb");
