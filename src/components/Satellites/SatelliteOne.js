import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import React, { useRef, useState } from 'react'
import SatelliteInfo from '../SatelliteInfo/SatelliteInfo'
import EnemyOne from '../Enemies/Enemy10/Enemy10'
import Enemy from '../Enemy/Enemy';

// Satellite One is the "Pet", or Mothership
function SatelliteOne(props) {

  const locations = [
    [11,12,11],
    [13, 17, 13],
    [15, 20, 15],
    [17, 5, 17],
    [19, 8, 19],
    [21, 11, 21],
    [23, 14, 23],
    [25, 17, 25],
    [27, 20, 27],
    [29, 5, 29],
    [31, 8, 31],
    [33, 11, 33],
    [35, 14, 35],
    [37, 17, 5],
    [39, 20, 7],
    [41, 5, 9],
    [43, 8, 11],
    [45, 11, 13],
    [47, 14, 15],
    [49, 17, 17],
    [51, 20, 19],
    [53, 5, 21],
    [55, 8, 23],
    [57, 11, 25],
    [59, 14, 27],
    [61, 17, 29],
    [63, 20, 31],
    [65, 5, 33],
    [67, 8, 35],
    [69, 11, 5],
    [71, 14, 7],
    [73, 17, 9],
    [75, 20, 11],
    [77, 5, 13],
    [79, 8, 15],
    [81, 11, 17],
    [83, 14, 19],
    [85, 17, 21],
    [87, 20, 23],
    [89, 5, 25],
    [91, 8, 27],
    [93, 11, 29],
    [95, 14, 31],
    [97, 17, 33],
    [99, 20, 35],
    [101, 5, 5],
    [103, 8, 7],
    [105, 11, 9],
    [107, 14, 11],
  ]

  const ref = useRef([]);
  const ref2 = useRef([]);

  useFrame(() => (
    ref.current.position.x = Math.cos(Date.now() * 0.00006) * locations[props.locationNum][0],
    ref.current.position.y = Math.sin(Date.now() * 0.00006) * locations[props.locationNum][1],
    ref.current.position.z = Math.sin(Date.now() * 0.00006) * locations[props.locationNum][2],
    ref.current.rotation.y = Math.atan2(-ref.current.position.x, -ref.current.position.y),
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
      {/* Satellite */}
      <mesh
        position={[locations[props.locationNum][0], locations[props.locationNum][1], locations[props.locationNum][2]]}
        {...props}
        ref={ref}
        rotation={[0, 0, 0]}
      >
        <SatelliteInfo
          tier='one'
          name={props.name}
          type={props.type}
          damage={props.damage}
          props={props}
          settings={props.settings}
        />
        <EnemyOne />
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