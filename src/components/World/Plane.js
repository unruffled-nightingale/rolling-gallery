import { usePlane } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

function Plane({setLoaded}) {
  usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], mass: 0 }))
  const colorMap = useLoader(TextureLoader, 'assets/background.jpeg', () => setLoaded(true))

  return (
    <mesh receiveShadow scale={[200, 0.1, 200]} position={[0,0,0]} >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial 
        map={colorMap} 
        toneMapped={false}
      />
    </mesh>
  )
}

export default Plane;