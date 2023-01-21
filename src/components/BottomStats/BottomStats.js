import React from 'react';
import LevelBar from '../LevelBar/LevelBar';
import Resources from '../Resources/Resources';
import Menu from '../Menu/Menu';
import './BottomStats.scss';

function BottomStats({
	currencyOne,
	currencyTwo,
	currencyThree,
	level,
	currentXP,
	maxXP,
	tierOneSatellites,
	tierTwoSatellites,
	tierThreeSatellites,
	tierFourSatellites,
	allEnemies,
	equipment,
	setSatellites,
	setEnemy,
	currentEnemy,
	currentEquipment,
	shipsMenuOptions,
	currentShipsMenu,
}) {
	return (
		<div className="bottomStats">
			<LevelBar level={level} currentXP={currentXP} maxXP={maxXP}></LevelBar>
			<Resources currencyOne={currencyOne} currencyTwo={currencyTwo} currencyThree={currencyThree}></Resources>
			<Menu
				tierOneSatellites={tierOneSatellites}
				tierTwoSatellites={tierTwoSatellites}
				tierThreeSatellites={tierThreeSatellites}
				tierFourSatellites={tierFourSatellites}
				currentEquipment={currentEquipment}
				allEnemies={allEnemies}
				equipment={equipment}
				setSatellites={setSatellites}
				setEnemy={setEnemy}
				currentEnemy={currentEnemy}
				shipsMenuOptions={shipsMenuOptions}
				currentShipsMenu={currentShipsMenu}
			></Menu>
		</div>
	);
}

export default BottomStats;
