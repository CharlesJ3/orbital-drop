import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import React, { useRef } from 'react'
import SatelliteInfo from '../SatelliteInfo/SatelliteInfo'
import Enemy1 from '../Enemies/Enemy1/Enemy1'

// Satellite Three is the Large Satellite, lots of these in the end but not as many as Satellite Two
function SatelliteThree(props) {

  const ref = useRef([]);
  const ref2 = useRef([]);

  useFrame(() => (
    ref.current.position.x = Math.cos(Date.now() * 0.00006) * props.posX,
    ref.current.position.y = Math.cos(Date.now() * 0.00006) * props.posY,
    ref.current.position.z = Math.sin(Date.now() * 0.00006) * -props.posZ + 1,
    ref.current.rotation.y = Math.atan2(-ref.current.position.y, -ref.current.position.x),
    ref2.current.position.lerp(new Vector3(0,0,0), 0.0425),
    // Check Laser Position,
    Math.abs(ref2.current.position.x) <= .1 ?
      ref2.current.position.set(
        ref.current.position.x,
        ref.current.position.y,
        ref.current.position.z,
      ) : ''
  ));


  return (
    <group>
      {/* Satellite Three */}
      <mesh
        position={[props.posX, props.posY, -props.posZ]}
        {...props}
        ref={ref}
      >
        <SatelliteInfo tier='three' name={props.name} type={props.type} damage={props.damage} props={props} />
        <Enemy1 />
      </mesh>

      {/* Laser */}
      <mesh position={[5, 5, 5]}
        {...props}
        ref={ref2}
      >
        <sphereBufferGeometry attach="geometry" args={[.25, 32, 32]} />
        <meshPhongMaterial
          attach="material"
          color="blue"
        />
      </mesh>
    </group>
  )
}

export default SatelliteThree;