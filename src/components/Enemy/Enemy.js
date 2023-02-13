import { useLoader, useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import EnemyInfo from '../EnemyInfo/EnemyInfo';

// Import all enemies here
import Enemy1 from '../Enemies/Enemy1/Enemy1';
import Enemy2 from '../Enemies/Enemy2/Enemy2';
import Enemy3 from '../Enemies/Enemy3/Enemy3';
import Enemy4 from '../Enemies/Enemy21/Enemy21';
import Enemy5 from '../Enemies/Enemy4/Enemy4';
import Enemy6 from '../Enemies/Enemy5/Enemy5';
import Enemy7 from '../Enemies/Enemy6/Enemy6';
import Enemy8 from '../Enemies/Enemy7/Enemy7';
import Enemy9 from '../Enemies/Enemy9/Enemy9';

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

let position = [0, 0, 0];
let sendPosition = [0, 0, 0];

function EnemyMesh(currentEnemy) {
	const ref = useRef([]);
	useFrame(
		() => (ref.current.position.x = Math.sin(Date.now() * 0.00005) * position[0]),
		(sendPosition = ref.current.position)
		// (ref.current.rotation.y = Math.atan2(-ref.current.position.x, -ref.current.position.y))
	);

	useEffect(() => {
		if (currentEnemy.battleMode === 'dungeon') {
			const interval = setInterval(() => {
				currentEnemy.setCurrentDungeonPositions(sendPosition);
				if (currentEnemy.health <= 0) {
					currentEnemy.checkCurrentEnemy(currentEnemy);
				}
			}, 1000);
			return () => {
				clearInterval(interval);
			};
		}
	});

	return (
		<mesh position={[position[0], position[1], position[2]]} ref={ref}>
			{/* TODO : change to switch */}
			{/* We'll check on which enemy to load based on the current enemy */}
			{currentEnemy.currentEnemy === 1 ? (
				<Enemy5 />
			) : currentEnemy.currentEnemy === 2 ? (
				<Enemy6 />
			) : currentEnemy.currentEnemy === 3 ? (
				<Enemy7 />
			) : currentEnemy.currentEnemy === 4 ? (
				<Enemy8 />
			) : currentEnemy.currentEnemy === 5 ? (
				<Enemy2 />
			) : currentEnemy.currentEnemy === 6 ? (
				<Enemy3 />
			) : currentEnemy.currentEnemy === 7 ? (
				<Enemy1 />
			) : currentEnemy.currentEnemy === 8 ? (
				<Enemy9 scale={[2.5, 2.5, 2.5]} />
			) : null}
		</mesh>
	);
}

export default function Enemy(currentEnemy) {
	return (
		<>
			{currentEnemy.battleMode === 'farm' ? (
				<group>
					<EnemyInfo
						tier="one"
						name={currentEnemy.name}
						type={currentEnemy.type}
						health={currentEnemy.health}
						maxHealth={currentEnemy.maxHealth}
						shields={currentEnemy.shields}
						maxShield={currentEnemy.maxShield}
						xp={currentEnemy.xp}
						defense={currentEnemy.defense}
						labels={currentEnemy.labels}
						buffs={currentEnemy.buffs}
						debuffs={currentEnemy.debuffs}
						killed={currentEnemy.killed}
						currencyOne={currentEnemy.currencyOne}
						currencyTwo={currentEnemy.currencyTwo}
						currencyTwoChance={currentEnemy.currencyTwoChance}
						currencyThree={currentEnemy.currencyThree}
						currencyThreeChance={currentEnemy.currencyThreeChance}
					/>
					<EnemyMesh currentEnemy={currentEnemy.currentEnemyNumber} battleMode={currentEnemy.battleMode} />
				</group>
			) : currentEnemy.battleMode === 'dungeon' ? (
				((position = currentEnemy.dungeonPosition),
				(
					<group>
						<EnemyInfo
							tier="one"
							name={currentEnemy.currentEnemy.name}
							type={currentEnemy.currentEnemy.type}
							health={currentEnemy.currentEnemy.health}
							maxHealth={currentEnemy.currentEnemy.maxHealth}
							shields={currentEnemy.currentEnemy.shields}
							maxShield={currentEnemy.currentEnemy.maxShield}
							xp={currentEnemy.currentEnemy.xp}
							defense={currentEnemy.currentEnemy.defense}
							labels={currentEnemy.labels}
							buffs={currentEnemy.currentEnemy.buffs}
							debuffs={currentEnemy.currentEnemy.debuffs}
							killed={currentEnemy.currentEnemy.killed}
							currencyOne={currentEnemy.currentEnemy.currencyOne}
							currencyTwo={currentEnemy.currentEnemy.currencyTwo}
							currencyTwoChance={currentEnemy.currentEnemy.currencyTwoChance}
							currencyThree={currentEnemy.currentEnemy.currencyThree}
							currencyThreeChance={currentEnemy.currentEnemy.currencyThreeChance}
						/>
						<EnemyMesh
							currentEnemy={currentEnemy.currentEnemy.currentEnemyNumber}
							battleMode={currentEnemy.battleMode}
							checkCurrentEnemy={currentEnemy.checkCurrentEnemy}
							setCurrentDungeonPositions={currentEnemy.setCurrentDungeonPositions}
							name={currentEnemy.currentEnemy.name}
							type={currentEnemy.currentEnemy.type}
							health={currentEnemy.currentEnemy.health}
							maxHealth={currentEnemy.currentEnemy.maxHealth}
							shields={currentEnemy.currentEnemy.shields}
							maxShield={currentEnemy.currentEnemy.maxShield}
							xp={currentEnemy.currentEnemy.xp}
							defense={currentEnemy.currentEnemy.defense}
							buffs={currentEnemy.currentEnemy.buffs}
							debuffs={currentEnemy.currentEnemy.debuffs}
							killed={currentEnemy.currentEnemy.killed}
							currencyOne={currentEnemy.currentEnemy.currencyOne}
							currencyTwo={currentEnemy.currentEnemy.currencyTwo}
							currencyTwoChance={currentEnemy.currentEnemy.currencyTwoChance}
							currencyThree={currentEnemy.currentEnemy.currencyThree}
							currencyThreeChance={currentEnemy.currentEnemy.currencyThreeChance}
						/>
					</group>
				))
			) : (
				''
			)}
		</>
	);
}
