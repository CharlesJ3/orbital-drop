/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF('/Enemy21.gltf');
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions.SphereAction.play();
		actions.TorusAction.play();
	});

	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				name="Sphere"
				geometry={nodes.Sphere.geometry}
				material={materials.Material1}
				position={[-0.01, 1.37, -0.13]}
				scale={0.54}
			/>
			<mesh
				name="Torus"
				geometry={nodes.Torus.geometry}
				material={materials.Material2}
				position={[-0.03, 0.61, -0.22]}
				scale={1.36}
			/>
			<mesh
				geometry={nodes.Torus001.geometry}
				material={materials.Material3}
				position={[-0.03, 0.64, -0.22]}
				scale={0.77}
			/>
		</group>
	);
}

useGLTF.preload('/Enemy21.gltf');
