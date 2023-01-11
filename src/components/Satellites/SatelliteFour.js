import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import React, { useRef } from 'react';
import SatelliteInfo from '../SatelliteInfo/SatelliteInfo';
import Enemy2 from '../Enemies/Enemy2/Enemy2';

// Satellite Four is the Titan Satellite, not many of these in the end
function SatelliteFour(props) {
	const ref = useRef([]);
	const ref2 = useRef([]);

	useFrame(
		() => (
			(ref.current.position.x = Math.cos(Date.now() * 0.00006) * -props.posX + 1),
			(ref.current.position.y = Math.sin(Date.now() * 0.00006) * -props.posY + 1),
			(ref.current.position.z = Math.cos(Date.now() * 0.00006) * props.posZ),
			(ref.current.rotation.y = Math.atan2(-ref.current.position.x, -ref.current.position.y)),
			ref2.current.position.lerp(new Vector3(0, 0, 0), 0.0425),
			// Check Laser Position,
			Math.abs(ref2.current.position.x) <= 0.1
				? ref2.current.position.set(ref.current.position.x, ref.current.position.y, ref.current.position.z)
				: ''
		)
	);

	return (
		<group>
			{/* Satellite Four */}
			<mesh position={[-props.posX, -props.posY, props.posZ]} {...props} ref={ref}>
				<SatelliteInfo tier="four" name={props.name} type={props.type} damage={props.damage} props={props} />
				<Enemy2 />
			</mesh>

			{/* Laser */}
			<mesh position={[5, 5, 5]} {...props} ref={ref2}>
				<sphereBufferGeometry attach="geometry" args={[0.25, 32, 32]} />
				<meshPhongMaterial attach="material" color="purple" />
			</mesh>
		</group>
	);
}

export default SatelliteFour;
