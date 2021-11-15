/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Enemy1.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.CubeAction.play();
    actions.CubeAction2.play();
    actions.CubeAction3.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube003"
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0.01, -1.21, 0.02]}
        scale={0.36}
      />
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials.Material1}
        position={[0.11, 0.26, 0]}
        scale={0.36}
      />
      <mesh
        name="Cube001"
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 0.27, 0.01]}
        scale={0.36}
      />
    </group>
  )
}

useGLTF.preload('/Enemy1.gltf')