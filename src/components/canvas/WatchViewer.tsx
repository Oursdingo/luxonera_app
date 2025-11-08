'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import Loading from '@/components/ui/Loading'

interface WatchViewerProps {
  modelPath?: string
}

export default function WatchViewer({ modelPath }: WatchViewerProps) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-b from-neutral-50 to-white rounded-lg overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Canvas
          shadows
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={0.5}
            intensity={1}
            castShadow
          />
          <spotLight
            position={[-5, 5, 5]}
            angle={0.3}
            penumbra={0.5}
            intensity={0.5}
          />
          <pointLight position={[0, -5, 0]} intensity={0.3} />

          {/* Environment */}
          <Environment preset="studio" />

          {/* Placeholder Watch Model */}
          <WatchModel />

          {/* Shadow */}
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />

          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
            autoRotate={true}
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </Suspense>

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
        Faites glisser pour faire pivoter • Molette pour zoomer
      </div>
    </div>
  )
}

function WatchModel() {
  // Placeholder 3D object (since we don't have actual .glb files)
  // In production, use useGLTF to load actual watch models
  return (
    <group position={[0, 0, 0]}>
      {/* Watch Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshPhysicalMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Watch Face */}
      <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.85, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>

      {/* Watch Bezel */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.05, 16, 64]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
        />
      </mesh>

      {/* Hour Hand */}
      <mesh position={[0, 0.17, 0.3]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 0.5, 0.02]} />
        <meshStandardMaterial color="#000000" metalness={0.8} />
      </mesh>

      {/* Minute Hand */}
      <mesh position={[0, 0.17, 0.5]} rotation={[-Math.PI / 2, 0, Math.PI / 3]}>
        <boxGeometry args={[0.04, 0.7, 0.02]} />
        <meshStandardMaterial color="#000000" metalness={0.8} />
      </mesh>
    </group>
  )
}
