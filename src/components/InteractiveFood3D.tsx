import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const DosaAssembly = ({ scrollProgress }: { scrollProgress: number }) => {
  const ringRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  // Generate "Spice" particles
  const particles = useMemo(() => {
    const coords = new Float32Array(1500);
    for (let i = 0; i < 1500; i++) {
        coords[i] = (Math.random() - 0.5) * 15;
    }
    return coords;
  }, []);

  useFrame((state) => {
    const isMobile = state.viewport.width < 6;
    const aspect = state.viewport.aspect;
    
    // Visibility Control for "Empty Screen" moment (Interlude)
    const opacityFactor = THREE.MathUtils.smoothstep(scrollProgress, 0.08, 0.12) * (1 - THREE.MathUtils.smoothstep(scrollProgress, 0.35, 0.4));
    const dishOpacity = 1 - opacityFactor;

    // Dynamic scale based on viewport width
    const baseScale = Math.min(state.viewport.width * 0.4, 2.8);
    const cameraZ = isMobile ? 9 : 6 / Math.min(aspect, 1.2);

    // Rotation and Scaling of the "Dosa"
    if (ringRef.current) {
      ringRef.current.rotation.y = scrollProgress * Math.PI * 6;
      ringRef.current.rotation.x = scrollProgress * 1.5;
      ringRef.current.scale.setScalar((0.1 + scrollProgress * baseScale) * dishOpacity);
      ringRef.current.position.y = (0.5 - scrollProgress) * 2;
      (ringRef.current.material as THREE.MeshStandardMaterial).opacity = dishOpacity;
      (ringRef.current.material as THREE.MeshStandardMaterial).transparent = true;
    }

    // Particle behavior (Spices flying)
    if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.005;
        const scaleFactor = 1 - Math.min(scrollProgress * 2, 1);
        particlesRef.current.scale.setScalar((baseScale * 0.4 + scaleFactor * 2) * dishOpacity);
        (particlesRef.current.material as THREE.PointsMaterial).opacity = dishOpacity * 0.5;
        (particlesRef.current.material as THREE.PointsMaterial).transparent = true;
    }

    // Camera movement - Adaptive FOV feel
    state.camera.position.z = cameraZ;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      {/* Golden Dosa Geometry */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.2, 0.04, 16, 100]} />
        <meshStandardMaterial 
          color="#f1c40f" 
          emissive="#d35400" 
          emissiveIntensity={1.5} 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Red Chilli Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#e74c3c" transparent opacity={0.5} />
      </points>

      <Environment preset="night" />
      <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={15} blur={2.5} far={4} />
    </group>
  );
};

const InteractiveFood3D = ({ progress }: { progress: number }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      zIndex: 0, 
      pointerEvents: 'none',
      background: 'black'
    }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <DosaAssembly scrollProgress={progress} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#e67e22" />
      </Canvas>
    </div>
  );
};

export default InteractiveFood3D;
