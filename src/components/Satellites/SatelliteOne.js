import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import React, { useRef, useState } from 'react'
import SatelliteInfo from '../SatelliteInfo/SatelliteInfo'

// Satellite One is the "Pet", or Mothership
function SatelliteOne(props) {

  const locations = [
    [11,12,11],
  ]

  const ref = useRef([]);
  const ref2 = useRef([]);

  useFrame(() => (
    ref.current.position.x = Math.cos(Date.now() * 0.00006) * locations[props.locationNum][0],
    ref.current.position.y = Math.sin(Date.now() * 0.00006) * locations[props.locationNum][1],
    ref.current.position.z = Math.sin(Date.now() * 0.00006) * locations[props.locationNum][2],
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
      {/* Satellite */}
      <mesh
        position={[locations[props.locationNum][0], locations[props.locationNum][1], locations[props.locationNum][2]]}
        {...props}
        ref={ref}
      >
        <SatelliteInfo
          tier='one'
          name={props.name}
          type={props.type}
          damage={props.damage}
          props={props}
          settings={props.settings}
        />
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial
          attach="material"
          color='red'
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
          color='red'
        />
      </mesh>
    </group>
  )
}

export default SatelliteOne;