import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import React, { useRef } from 'react'
import SatelliteInfo from '../SatelliteInfo/SatelliteInfo'

// Satellite Four is the Titan Satellite, not many of these in the end
function SatelliteFour(props) {

  const ref = useRef([]);
  const ref2 = useRef([]);

  useFrame(() => (
    ref.current.position.x = Math.cos(Date.now() * 0.00006) * -props.posX + 1,
    ref.current.position.y = Math.sin(Date.now() * 0.00006) * -props.posY + 1,
    ref.current.position.z = Math.cos(Date.now() * 0.00006) * props.posZ,
    ref2.current.position.lerp(new Vector3(0,0,0), 0.0425),
    // Check Laser Position,
    Math.abs(ref2.current.position.x) <= .05 ?
      ref2.current.position.set(
        ref.current.position.x,
        ref.current.position.y,
        ref.current.position.z,
      ) : ''
  ));

  return (
    <group>
      {/* Satellite Four */}
      <mesh
        position={[-props.posX, -props.posY, props.posZ]}
        {...props}
        ref={ref}
      >
        <SatelliteInfo tier='four' name={props.name} type={props.type} damage={props.damage} props={props} />
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial
          attach="material"
          color="purple"
        />
      </mesh>

      {/* Laser */}
      <mesh position={[5, 5, 5]}
        {...props}
        ref={ref2}
      >
        <sphereBufferGeometry attach="geometry" args={[.25, 32, 32]} />
        <meshPhongMaterial
          attach="material"
          color="purple"
        />
      </mesh>
    </group>
  )
}

export default SatelliteFour;