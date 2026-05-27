import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";
import "./FieldScene.css";

type FieldSceneProps = {
  activeSection: string;
  progress: number;
};

const sectionIntensity: Record<string, number> = {
  basecamp: 0.2,
  signal: 0.82,
  descent: 1,
  terrain: 0.95,
  contact: 0.7,
};

const sectionAccent: Record<string, string> = {
  basecamp: "#82f7b5",
  signal: "#64d9ff",
  descent: "#d7fff0",
  terrain: "#82f7b5",
  contact: "#64d9ff",
};

function CameraRig({ activeSection, progress }: FieldSceneProps) {
  const { camera } = useThree();

  useFrame(() => {
    const sectionShift = {
      x:
        activeSection === "basecamp"
          ? 0.85
          : activeSection === "signal"
            ? 0.55
            : activeSection === "descent"
              ? 0.08
              : activeSection === "terrain"
                ? -0.45
                : -0.2,
      y:
        activeSection === "descent"
          ? 1.08
          : activeSection === "terrain"
            ? 0.72
            : activeSection === "contact"
              ? 1.4
              : 1.55,
      z:
        activeSection === "basecamp"
          ? 7.9
          : activeSection === "signal"
            ? 6.85
            : activeSection === "descent"
              ? 5.15
              : activeSection === "terrain"
                ? 4.35
                : 5.8,
    };

    camera.position.lerp(
      new THREE.Vector3(
        sectionShift.x - progress * 0.55,
        sectionShift.y,
        sectionShift.z - progress * 0.35,
      ),
      0.035,
    );
    camera.lookAt(1.35 - progress * 1.3, -0.55 - progress * 0.4, -5.1);
  });

  return null;
}

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
      const terrainStage = activeSection === "terrain" || activeSection === "contact";
      meshRef.current.rotation.x = -1.2 + progress * 0.3;
      meshRef.current.rotation.z = -0.32 + progress * 0.56;
      meshRef.current.position.x = (terrainStage ? 2.2 : 4.1) - progress * 1.7;
      meshRef.current.position.y = (terrainStage ? -2.75 : -3.45) + progress * 1.35;
      meshRef.current.position.z = -6.2 + intensity * 0.95;
    }

    if (materialRef.current) {
      const sectionBoost = activeSection === "terrain" ? 0.22 : activeSection === "descent" ? 0.12 : 0;
      materialRef.current.opacity =
        0.06 + intensity * 0.23 + sectionBoost + Math.sin(elapsed * 0.7) * 0.018;
      materialRef.current.color.set(activeSection === "signal" ? "#64d9ff" : "#82f7b5");
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
  const previousProgressRef = useRef(progress);
  const scrollEnergyRef = useRef(0);
  const intensity = sectionIntensity[activeSection] ?? 0.35;

  const geometry = useMemo(() => {
    const count = 820;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 1.2 + Math.random() * 11.5;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 8.8;

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
    const scrollDelta = Math.abs(progress - previousProgressRef.current);
    previousProgressRef.current = progress;
    scrollEnergyRef.current = Math.max(
      scrollEnergyRef.current * 0.9,
      Math.min(scrollDelta * 95, 1),
    );
    const scrollEnergy = scrollEnergyRef.current;

    if (pointsRef.current) {
      const signalSpin = activeSection === "signal" ? 0.11 : 0.018;
      pointsRef.current.rotation.y = elapsed * (signalSpin + scrollEnergy * 0.22) + progress * 0.9;
      pointsRef.current.rotation.x = Math.sin(elapsed * 0.12) * 0.04;
      pointsRef.current.position.x = 2.6 - progress * 0.65;
      pointsRef.current.position.y = -0.15 + progress * 0.2;
    }

    if (materialRef.current) {
      const isSignal = activeSection === "signal";
      materialRef.current.opacity =
        0.14 + intensity * 0.38 + (isSignal ? 0.18 : 0) + scrollEnergy * 0.28;
      materialRef.current.size =
        (isSignal ? 0.07 : activeSection === "descent" ? 0.064 : 0.038) + scrollEnergy * 0.045;
      materialRef.current.color.set(sectionAccent[activeSection] ?? "#64d9ff");
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
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ScrollSparks({ activeSection, progress }: FieldSceneProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const previousProgressRef = useRef(progress);
  const energyRef = useRef(0);

  const geometry = useMemo(() => {
    const count = 420;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 12;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 7.5;
      positions[index * 3 + 2] = -3.5 - Math.random() * 6.5;
    }

    const sparks = new THREE.BufferGeometry();
    sparks.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return sparks;
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const scrollDelta = Math.abs(progress - previousProgressRef.current);
    previousProgressRef.current = progress;
    energyRef.current = Math.max(energyRef.current * 0.88, Math.min(scrollDelta * 140, 1));
    const energy = energyRef.current;

    if (pointsRef.current) {
      pointsRef.current.position.x = 1.2 - progress * 1.8;
      pointsRef.current.position.y = Math.sin(elapsed * 0.7) * 0.18;
      pointsRef.current.rotation.z = elapsed * (0.015 + energy * 0.22);
      pointsRef.current.rotation.y = progress * 1.4 + energy * 0.35;
    }

    if (materialRef.current) {
      materialRef.current.opacity = 0.02 + energy * 0.68;
      materialRef.current.size = 0.018 + energy * 0.07;
      materialRef.current.color.set(activeSection === "terrain" ? "#82f7b5" : "#d7fff0");
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} position={[1.2, 0, -4.2]}>
      <pointsMaterial
        ref={materialRef}
        color="#d7fff0"
        size={0.02}
        transparent
        opacity={0.02}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RouteLine({ activeSection, progress }: FieldSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const glowMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const pulseMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const intensity = sectionIntensity[activeSection] ?? 0.35;

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.2, -1.8, -5.5),
      new THREE.Vector3(-2.8, -0.4, -5.8),
      new THREE.Vector3(-0.7, -0.9, -5.1),
      new THREE.Vector3(1.8, 0.4, -5.7),
      new THREE.Vector3(4.7, -0.2, -5.2),
      ]),
    [],
  );

  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 128, 0.014, 8, false), [curve]);
  const glowGeometry = useMemo(() => new THREE.TubeGeometry(curve, 128, 0.055, 8, false), [curve]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const lineColor = activeSection === "signal" ? "#64d9ff" : "#82f7b5";

    if (meshRef.current) {
      meshRef.current.rotation.z = -0.08 + progress * 0.28;
      meshRef.current.position.x = 2.8 - progress * 0.95;
      meshRef.current.position.y = -0.4 + Math.sin(elapsed * 0.4) * 0.03;
    }

    if (glowRef.current) {
      glowRef.current.rotation.copy(meshRef.current?.rotation ?? new THREE.Euler());
      glowRef.current.position.copy(meshRef.current?.position ?? new THREE.Vector3());
    }

    if (pulseRef.current) {
      const routeProgress = (elapsed * 0.18 + progress * 1.8) % 1;
      const point = curve.getPointAt(routeProgress);
      pulseRef.current.position.set(
        point.x + 2.8 - progress * 0.95,
        point.y - 0.4 + Math.sin(elapsed * 0.4) * 0.03,
        point.z,
      );
      pulseRef.current.scale.setScalar(1.2 + Math.sin(elapsed * 4) * 0.28);
    }

    if (materialRef.current) {
      materialRef.current.opacity = 0.22 + intensity * 0.44;
      materialRef.current.color.set(lineColor);
    }

    if (glowMaterialRef.current) {
      glowMaterialRef.current.opacity = 0.06 + intensity * 0.17;
      glowMaterialRef.current.color.set(lineColor);
    }

    if (pulseMaterialRef.current) {
      pulseMaterialRef.current.opacity = 0.62 + intensity * 0.38;
      pulseMaterialRef.current.color.set(lineColor);
    }
  });

  return (
    <>
      <mesh ref={glowRef} geometry={glowGeometry} position={[2.8, -0.4, 0]}>
        <meshBasicMaterial
          ref={glowMaterialRef}
          color="#82f7b5"
          transparent
          opacity={0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={meshRef} geometry={geometry} position={[2.8, -0.4, 0]}>
        <meshBasicMaterial
          ref={materialRef}
          color="#82f7b5"
          transparent
          opacity={0.36}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.15, 18, 18]} />
        <meshBasicMaterial
          ref={pulseMaterialRef}
          color="#82f7b5"
          transparent
          opacity={0.72}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

function ScanRings({ activeSection, progress }: FieldSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.MeshBasicMaterial[]>([]);
  const intensity = sectionIntensity[activeSection] ?? 0.35;

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.x = 3.35 - progress * 2.2;
      groupRef.current.position.y = -0.25 + progress * 0.72;
      groupRef.current.position.z = -5.9 + progress * 1.2;
      groupRef.current.rotation.z = elapsed * (activeSection === "descent" ? 0.16 : 0.045);
    }

    materialRefs.current.forEach((material, index) => {
      const pulse = (Math.sin(elapsed * 1.8 - index * 0.9) + 1) * 0.5;
      const terrainFade = activeSection === "terrain" || activeSection === "contact" ? 0.45 : 1;
      material.opacity = (0.04 + intensity * 0.08 + pulse * 0.1) * terrainFade;
      material.color.set(index % 2 ? "#64d9ff" : "#82f7b5");
    });
  });

  return (
    <group ref={groupRef} position={[3.35, -0.25, -5.9]} rotation={[0.35, -0.22, 0]}>
      {[1.1, 1.65, 2.25, 2.9, 3.6].map((radius, index) => (
        <mesh key={radius}>
          <torusGeometry args={[radius, 0.007, 8, 160]} />
          <meshBasicMaterial
            ref={(material) => {
              if (material) {
                materialRefs.current[index] = material;
              }
            }}
            color={index % 2 ? "#64d9ff" : "#82f7b5"}
            transparent
            opacity={0.08}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function NatureGrowth({ activeSection, progress }: FieldSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.MeshBasicMaterial[]>([]);
  const pointMaterialRef = useRef<THREE.PointsMaterial>(null);
  const isNatural =
    activeSection === "descent" ||
    activeSection === "terrain" ||
    activeSection === "contact";

  const vineGeometries = useMemo(
    () =>
      [
        [-4.2, -2.2, -5.9, -1.8, -0.6, -5.4, 1.2, -1.3, -5.7],
        [-3.3, -3.1, -6.4, -0.9, -1.2, -5.7, 2.9, -2.2, -5.3],
        [-1.6, -2.6, -4.9, 0.6, -0.9, -5.5, 3.6, -1.1, -6.1],
        [-4.8, -1.4, -6.7, -2.1, 0.2, -5.9, 0.9, -0.1, -5.2],
      ].map(([x1, y1, z1, x2, y2, z2, x3, y3, z3]) => {
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(x1, y1, z1),
          new THREE.Vector3(x2, y2, z2),
          new THREE.Vector3(x3, y3, z3),
        );
        return new THREE.TubeGeometry(curve, 96, 0.011, 6, false);
      }),
    [],
  );

  const fireflyGeometry = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = -4 + Math.random() * 8;
      positions[index * 3 + 1] = -2.9 + Math.random() * 3.4;
      positions[index * 3 + 2] = -6.4 + Math.random() * 2.8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const naturalOpacity =
      activeSection === "terrain" ? 0.62 : activeSection === "descent" ? 0.38 : 0.22;

    if (groupRef.current) {
      groupRef.current.position.x = -0.6 - progress * 0.55;
      groupRef.current.position.y = -0.25 + Math.sin(elapsed * 0.45) * 0.08;
      groupRef.current.rotation.z = -0.12 + progress * 0.28;
    }

    materialRefs.current.forEach((material, index) => {
      const wave = (Math.sin(elapsed * 1.2 + index) + 1) * 0.5;
      material.opacity = isNatural ? naturalOpacity + wave * 0.12 : 0.02;
    });

    if (pointMaterialRef.current) {
      pointMaterialRef.current.opacity = isNatural ? naturalOpacity * 0.72 : 0.015;
      pointMaterialRef.current.size = activeSection === "terrain" ? 0.055 : 0.035;
    }
  });

  return (
    <group ref={groupRef} position={[-0.6, -0.25, 0]}>
      {vineGeometries.map((geometry, index) => (
        <mesh key={index} geometry={geometry}>
          <meshBasicMaterial
            ref={(material) => {
              if (material) {
                materialRefs.current[index] = material;
              }
            }}
            color={index % 2 ? "#64d9ff" : "#82f7b5"}
            transparent
            opacity={0.02}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
      <points geometry={fireflyGeometry}>
        <pointsMaterial
          ref={pointMaterialRef}
          color="#d7fff0"
          size={0.035}
          transparent
          opacity={0.02}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function StormHalo({ activeSection, progress }: FieldSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const isStorm = activeSection === "descent";

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (meshRef.current) {
      const scale = 1 + Math.sin(elapsed * 0.8) * 0.04 + progress * 0.2;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.z = elapsed * 0.08;
    }

    if (materialRef.current) {
      materialRef.current.opacity = isStorm ? 0.42 : 0.055;
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
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function SceneContents(props: FieldSceneProps) {
  return (
    <>
      <fog attach="fog" args={["#050809", 7, 18]} />
      <CameraRig {...props} />
      <ScanRings {...props} />
      <TerrainSurface {...props} />
      <SignalParticles {...props} />
      <ScrollSparks {...props} />
      <RouteLine {...props} />
      <NatureGrowth {...props} />
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
