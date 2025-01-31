import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";

export default function Model({ zoom, opacity }: { zoom: boolean; opacity: number }) {
  const obj = useLoader(OBJLoader, "/assets/body.obj");

  useEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "blue",
          transparent: true,
          opacity: opacity, 
          metalness: 0.3,
          roughness: 0.7,
          wireframe: true,
        });
      }
    });
  }, [opacity]);

  return (
    <group 
      position={[0, -3, 0]} 
      scale={zoom ? [0.12, 0.12, 0.12] : [0.1, 0.1, 0.1]} 
    >
      <primitive object={obj} />
    </group>
  );
}
