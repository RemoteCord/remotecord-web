"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { type Object3D, type Mesh, MathUtils } from "three";
import { Lights } from "./light";
import useWindow from "@/hooks/useWindow";

interface GLTFResult {
  nodes: {
    Curve: Mesh;
    [key: string]: Object3D;
  };
  materials: {
    [key: string]: unknown;
  };
}

const ModelContent = () => {
  const { isDesktop } = useWindow();
  const groupRef = useRef<any>(null);
  const [position, setPosition] = useState({
    x: -3.5,
    y: -3,
    z: 0,
  });

  const [size, setSize] = useState(70);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("isDesktop", isDesktop);
    if (isDesktop) {
      setPosition({
        x: -3.2,
        y: -3,
        z: 0,
      });
      setSize(65);
    } else {
      setPosition({
        x: -2.3,
        y: -1.5,
        z: 0,
      });
      setSize(45);
    }
  }, [isDesktop]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (groupRef.current) {
      if (isDesktop) {
        const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
        const mouseY = (mousePosition.y / window.innerHeight) * 2 - 1;

        const maxRotationAngle = 0.3;

        const targetRotationY = mouseX * maxRotationAngle;
        const targetRotationX = mouseY * maxRotationAngle;
        const targetRotationZ = MathUtils.clamp(
          mouseX * mouseY * 0.1,
          -maxRotationAngle / 3,
          maxRotationAngle / 3
        );

        // Z grows based on scroll
        const minZ = 0;
        const maxZ = 2; // how much it comes forward
        // const targetZ = minZ + maxZ * scrollProgress;
        const targetZ = 0;
        groupRef.current.rotation.y = MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotationY,
          0.05
        );
        groupRef.current.rotation.x = MathUtils.lerp(
          groupRef.current.rotation.x,
          targetRotationX,
          0.05
        );
        groupRef.current.rotation.z = MathUtils.lerp(
          groupRef.current.rotation.z,
          targetRotationZ,
          0.03
        );

        groupRef.current.position.z = MathUtils.lerp(
          groupRef.current.position.z,
          targetZ,
          0.05
        );
      } else {
        // Mobile auto rotation animation
        const autoRotationY = Math.sin(elapsedTime * 0.5) * 0.5; // slow & soft left-right
        const autoRotationX = Math.cos(elapsedTime * 0.3) * 0.05; // subtle up-down

        groupRef.current.rotation.y = MathUtils.lerp(
          groupRef.current.rotation.y,
          autoRotationY,
          0.03
        );
        groupRef.current.rotation.x = MathUtils.lerp(
          groupRef.current.rotation.x,
          autoRotationX,
          0.03
        );
      }
    }
  });

  // Desktop -3.5 -3 0
  // Mobile -3.5 -3 0

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
        material={materials["SVGMat.001"] as any}
        position={[position.x, position.y, position.z]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={size}
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
