import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid } from "@react-three/drei";
import * as THREE from "three";

function RouteRibbon() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const angle = t * Math.PI * 2.4;
      const radius = 1.6 + Math.sin(t * Math.PI * 3) * 0.25;
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(t * Math.PI * 2) * 0.35 + 0.1,
          Math.sin(angle) * radius
        )
      );
    }
    return pts;
  }, []);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points, true), [points]);
  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 220, 0.02, 8, true), [curve]);

  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={ref} geometry={geometry}>
      <meshStandardMaterial
        color="#29d3c6"
        emissive="#29d3c6"
        emissiveIntensity={2.2}
        toneMapped={false}
      />
    </mesh>
  );
}

function DashDial() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z -= delta * 0.05;
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#ffb020"
          emissive="#ffb020"
          emissiveIntensity={1.4}
          toneMapped={false}
        />
      </mesh>
      {/* needle */}
      <mesh position={[0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.9, 8]} />
        <meshStandardMaterial color="#ffb020" emissive="#ffb020" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#0b0d10" />
      </mesh>
    </group>
  );
}

function RoadGrid() {
  return (
    <Grid
      position={[0, -1.5, 0]}
      args={[20, 20]}
      cellSize={0.5}
      cellThickness={0.5}
      cellColor="#1b1f26"
      sectionSize={2.5}
      sectionThickness={1}
      sectionColor="#29d3c6"
      fadeDistance={12}
      fadeStrength={1.5}
      infiniteGrid
    />
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [3.4, 1.8, 3.4], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#0b0d10"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={30} color="#ffb020" />
      <pointLight position={[-4, 2, -3]} intensity={20} color="#29d3c6" />
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <group>
          <DashDial />
          <RouteRibbon />
        </group>
      </Float>
      <RoadGrid />
    </Canvas>
  );
}
