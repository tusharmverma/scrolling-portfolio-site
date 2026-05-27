import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";
import "./FieldScene.css";

type FieldSceneProps = {
  activeSection: string;
  progress: number;
};

const sectionIntensity: Record<string, number> = {
  basecamp: 0.12,
  signal: 0.48,
  terrain: 0.72,
  expeditions: 0.86,
  storm: 1,
  contact: 0.58,
};

function TerrainSurface({ activeSection, progress }: FieldSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const intensity = sectionIntensity[activeSection] ?? 0.35;

  const geometry = useMemo(() => {
    const plane = new THREE.PlaneGeometry(24, 16, 72, 48);
    const positions = plane.attributes.position;

    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index);
      const y = positions.getY(index);
      const distance = Math.sqrt(x * x + y * y);
      const ridge =
        Math.sin(x * 0.85) * 0.26 +
        Math.cos(y * 0.72) * 0.2 +
        Math.sin(distance * 1.4) * 0.18;

      positions.setZ(index, ridge);
    }

    plane.computeVertexNormals();
    return plane;
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = -1.22 + progress * 0.14;
      meshRef.current.rotation.z = -0.26 + progress * 0.28;
      meshRef.current.position.x = 4.2 - progress * 0.8;
      meshRef.current.position.y = -3.35 + progress * 0.9;
      meshRef.current.position.z = -6 + intensity * 0.45;
    }

    if (materialRef.current) {
      materialRef.current.opacity =
        0.035 + intensity * 0.12 + Math.sin(elapsed * 0.7) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[4.2, -3.35, -6]}>
      <meshBasicMaterial
        ref={materialRef}
        color="#82f7b5"
        wireframe
        transparent
        opacity={0.14}
        depthWrite={false}
      />
    </mesh>
  );
}

function SignalParticles({ activeSection, progress }: FieldSceneProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const intensity = sectionIntensity[activeSection] ?? 0.35;

  const geometry = useMemo(() => {
    const count = 260;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 2 + Math.random() * 10;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 7;

      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = height;
      positions[index * 3 + 2] = Math.sin(angle) * radius - 6;
    }

    const particles = new THREE.BufferGeometry();
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return particles;
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsed * 0.018 + progress * 0.42;
      pointsRef.current.rotation.x = Math.sin(elapsed * 0.12) * 0.04;
      pointsRef.current.position.x = 2.6 - progress * 0.65;
      pointsRef.current.position.y = -0.15 + progress * 0.2;
    }

    if (materialRef.current) {
      materialRef.current.opacity = 0.08 + intensity * 0.18;
      materialRef.current.size = activeSection === "signal" ? 0.035 : 0.024;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} position={[2.6, -0.15, 0]}>
      <pointsMaterial
        ref={materialRef}
        color="#64d9ff"
        size={0.026}
        transparent
        opacity={0.28}
        depthWrite={false}
      />
    </points>
  );
}

function RouteLine({ activeSection, progress }: FieldSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const intensity = sectionIntensity[activeSection] ?? 0.35;

  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.2, -1.8, -5.5),
      new THREE.Vector3(-2.8, -0.4, -5.8),
      new THREE.Vector3(-0.7, -0.9, -5.1),
      new THREE.Vector3(1.8, 0.4, -5.7),
      new THREE.Vector3(4.7, -0.2, -5.2),
    ]);

    return new THREE.TubeGeometry(curve, 96, 0.012, 6, false);
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.z = -0.08 + progress * 0.28;
      meshRef.current.position.x = 2.8 - progress * 0.95;
      meshRef.current.position.y = -0.4 + Math.sin(elapsed * 0.4) * 0.03;
    }

    if (materialRef.current) {
      materialRef.current.opacity = 0.12 + intensity * 0.28;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[2.8, -0.4, 0]}>
      <meshBasicMaterial
        ref={materialRef}
        color={activeSection === "storm" ? "#ffb15c" : "#82f7b5"}
        transparent
        opacity={0.36}
      />
    </mesh>
  );
}

function StormHalo({ activeSection, progress }: FieldSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const isStorm = activeSection === "storm";

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (meshRef.current) {
      const scale = 1 + Math.sin(elapsed * 0.8) * 0.04 + progress * 0.2;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.z = elapsed * 0.08;
    }

    if (materialRef.current) {
      materialRef.current.opacity = isStorm ? 0.16 : 0.032;
    }
  });

  return (
    <mesh ref={meshRef} position={[4.9, -1.55, -6.6]}>
      <torusGeometry args={[2.2, 0.006, 8, 128]} />
      <meshBasicMaterial
        ref={materialRef}
        color="#ffb15c"
        transparent
        opacity={0.05}
        depthWrite={false}
      />
    </mesh>
  );
}

function SceneContents(props: FieldSceneProps) {
  return (
    <>
      <fog attach="fog" args={["#050809", 7, 18]} />
      <TerrainSurface {...props} />
      <SignalParticles {...props} />
      <RouteLine {...props} />
      <StormHalo {...props} />
    </>
  );
}

export const FieldScene = memo(function FieldScene(props: FieldSceneProps) {
  return (
    <div className="field-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.6, 7.8], fov: 48 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <SceneContents {...props} />
      </Canvas>
    </div>
  );
});
