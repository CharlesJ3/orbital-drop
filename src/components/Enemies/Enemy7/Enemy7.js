import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import React, { useRef } from 'react';

// Import images for textureLoader
import Earthyf3 from '../../../images/earthyf3.jpg';
import Shiny from '../../../images/shiny.jpg';
import Bumpy from '../../../images/bumpy.jpg';
import Cloud1 from '../../../images/cloud1.jpg';

const colorSelector = {
	thin: 0.1,
	thin2: 0.2,
	thin3: 0.3,
	med: 0.4,
	med2: 0.5,
	med3: 0.6,
	heavy: 0.7,
	heavy2: 0.8,
	heavy3: 0.9,
	full: 1,
	toxicGreen: 0x588222,
	plum: 0xd694e1,
	turquoise: 0x57ced7,
	studio: 0x844aaf,
	raven: 0x696f7a,
	burgundy: 0x85052f,
	jazzberry: 0xa91e60,
	amaranth: 0xe12a48,
};

function SphereInner(props) {
	const sphereLoader = useLoader(THREE.TextureLoader, Earthyf3);
	const earthShinyLoader = useLoader(THREE.TextureLoader, Shiny);
	const earthBumpyLoader = useLoader(THREE.TextureLoader, Bumpy);

	return (
		<mesh position={[0, 0, 0]} {...props}>
			<sphereBufferGeometry attach="geometry" args={[2, 32, 32]} />
			<meshPhongMaterial
				attach="material"
				map={sphereLoader}
				bumpMap={earthBumpyLoader}
				specularMap={earthShinyLoader}
				aoMap={earthShinyLoader}
			/>
		</mesh>
	);
}

function SphereOuter(props) {
	const cloud = useLoader(THREE.TextureLoader, Cloud1);

	const ref = useRef();

	useFrame(() => {
		ref.current.rotation.y += 0.0005;
	});

	return (
		<group>
			<mesh position={[0, 0, 0]} {...props} ref={ref}>
				<sphereBufferGeometry attach="geometry" args={[2.06, 32, 32]} />
				<meshPhongMaterial
					attach="material"
					map={cloud}
					color={colorSelector.turquoise}
					opacity={0.15}
					transparent={true}
					side={THREE.DoubleSide}
				/>
			</mesh>
		</group>
	);
}

export default function Enemy(props) {
	return (
		<group>
			<SphereInner {...props} />
			<SphereOuter {...props} />
		</group>
	);
}
