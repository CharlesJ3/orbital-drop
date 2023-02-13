import React from 'react';
import Enemy from '../Enemy/Enemy';
import './DungeonEnemies.scss';

// Enemy Positions set previously by DungeonEnemies prop
// Enemies will pick a random ship and start moving towards it
// Once it is in place it will hold still and fire at the ship
const setCurrentClosestEnemy = (enemy, enemyPosition) => {
	enemy.position.set(enemyPosition.x, enemyPosition.y, enemyPosition.z);
};

export default function DungeonEnemies({
	dungeonEnemyList,
	dungeons,
	battleMode,
	labels,
	checkCurrentEnemy,
	setCurrentDungeonPositions,
}) {
	const x = Object.entries(dungeonEnemyList[dungeons.currentDungeon]);

	return (
		<>
			{x[0][1].map((enemy, index) => {
				return (
					<Enemy
						key={enemy + index}
						currentEnemy={enemy}
						battleMode={battleMode}
						labels={labels}
						checkCurrentEnemy={checkCurrentEnemy}
						dungeonEnemyList={dungeonEnemyList}
						dungeonPosition={dungeonEnemyList[dungeons.currentDungeon]['waveOnePositions'][index]}
						setCurrentDungeonPositions={setCurrentDungeonPositions}
					/>
				);
			})}
		</>
	);
}
