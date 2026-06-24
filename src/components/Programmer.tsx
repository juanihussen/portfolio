"use client";

import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Programmer() {
  const group = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, "/imagen.png");

  useEffect(() => {
    if (texture) {
      texture.premultiplyAlpha = false;
    }
  }, [texture]);

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.03;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.008;
    }
  });

  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  const height = 1.0;
  const width = height * aspect;

  return (
    <group ref={group} scale={2.0}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          map={texture}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
