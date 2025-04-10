"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { Object3D, Mesh, MathUtils } from "three";
import { Lights } from "./light";

interface GLTFResult {
  nodes: {
    Curve: Mesh;
    [key: string]: Object3D;
  };
  materials: {
    [key: string]: any;
  };
}

const ModelContent = () => {
  const groupRef = useRef<any>(null);
  const gltf = useLoader(
    GLTFLoader,
    "/model/logo.glb"
  ) as unknown as GLTFResult;
  const { nodes, materials } = gltf;

  return (
    <group ref={groupRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.001"]}
        position={[-3.5, -3, 0]}
        rotation={[Math.PI / 2.2, 0, 0.25]}
        scale={70}
      />
    </group>
  );
};

export const Model = () => {
  const [opacity, setOpacity] = useState(0); // Empieza en 0 (invisible)
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animar la opacidad del canvas
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (canvasRef.current) {
      timeoutId = setTimeout(() => {
        setOpacity(1); // Al cabo de un tiempo aumenta la opacidad
      }, 300); // Puede ajustar el tiempo de inicio de la animación
    }

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        minWidth: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity, // Animar la opacidad aquí
          transition: "opacity 1s ease-out", // Transición suave
        }}
      >
        <Lights />
        <Suspense fallback={null}>
          <ModelContent />
        </Suspense>
      </Canvas>
    </div>
  );
};
