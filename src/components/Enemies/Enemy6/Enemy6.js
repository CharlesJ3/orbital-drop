import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import React, { useRef} from 'react'

// Import images for textureLoader
import Earthyf2 from '../../../images/earthyf2.jpg';
import Shiny from '../../../images/shiny.jpg';
import Bumpy from '../../../images/bumpy.jpg';
import Cloud1 from '../../../images/cloud1.jpg';

const colorSelector = {
  thin: .1,
  thin2: .2,
  thin3: .3,
  med: .4,
  med2: .5,
  med3: .6,
  heavy: .7,
  heavy2: .8,
  heavy3: .9,
  full: 1,
  toxicGreen: 0x588222,
  plum: 0xD694E1,
  turquoise: 0x57CED7,
  studio: 0x844AAF,
  raven: 0x696F7A,
  burgundy: 0x85052F,
  jazzberry: 0xA91E60,
  amaranth: 0xE12A48
}

function SphereInner(props) {

  const sphereLoader = useLoader(THREE.TextureLoader, Earthyf2);
  const earthShinyLoader = useLoader(THREE.TextureLoader, Shiny);
  const earthBumpyLoader = useLoader(THREE.TextureLoader, Bumpy);

  return (
    <mesh position={[0, 0, 0]}
      {...props}
    >
      <sphereBufferGeometry attach="geometry" args={[2, 32, 32]} />
      <meshPhongMaterial
        attach="material"
        map={sphereLoader}
        bumpMap={earthBumpyLoader}
        specularMap={earthShinyLoader}
        aoMap={earthShinyLoader}
      />
    </mesh>
  )
}

function SphereOuter(props) {

  const cloud = useLoader(THREE.TextureLoader, Cloud1);

  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <group>
      <mesh position={[0, 0, 0]}
        {...props}
        ref={ref}
      >
        <sphereBufferGeometry attach="geometry" args={[2.06, 32, 32]} />
        <meshPhongMaterial
          attach="material"
          map={cloud}
          color={colorSelector.turquoise}
          opacity={.15}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

export default function Enemy(props) {
  return (
    <group>
      <SphereInner {...props} />
      <SphereOuter {...props} />
    </group>
  )
}