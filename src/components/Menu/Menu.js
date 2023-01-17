import React from 'react';
import './Menu.scss';
import styled from 'styled-components';
import { ClampToEdgeWrapping } from 'three';

// Styled Components

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`;

const Menu = ({
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
}) => {
	const menuSwitch = (menu) => {
		switch (menu) {
			case 1:
				// This should be refactored to not change the display, but instead
				// to check a menu state and change it as required.
				if (document.querySelector('.menu__one').style.opacity != 1) {
					document.querySelector('.menu__one').style.opacity = 1;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'auto';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-battle').classList.add('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				} else {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				}
				break;
			case 2:
				if (document.querySelector('.menu__two').style.opacity != 1) {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 1;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'auto';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-ships').classList.add('active-main-menu');
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				} else {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				}
				break;
			case 3:
				if (document.querySelector('.menu__three').style.opacity != 1) {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 1;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'auto';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-talents').classList.add('active-main-menu');
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				} else {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				}
				break;
			case 4:
				if (document.querySelector('.menu__four').style.opacity != 1) {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 1;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'auto';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-auras').classList.add('active-main-menu');
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				} else {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				}
				break;
			case 5:
				if (document.querySelector('.menu__five').style.opacity != 1) {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 1;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'auto';
					document.querySelector('#menu-prestige').classList.add('active-main-menu');
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
				} else {
					document.querySelector('.menu__one').style.opacity = 0;
					document.querySelector('.menu__two').style.opacity = 0;
					document.querySelector('.menu__three').style.opacity = 0;
					document.querySelector('.menu__four').style.opacity = 0;
					document.querySelector('.menu__five').style.opacity = 0;
					document.querySelector('.menu__one').style.pointerEvents = 'none';
					document.querySelector('.menu__two').style.pointerEvents = 'none';
					document.querySelector('.menu__three').style.pointerEvents = 'none';
					document.querySelector('.menu__four').style.pointerEvents = 'none';
					document.querySelector('.menu__five').style.pointerEvents = 'none';
					document.querySelector('#menu-battle').classList.remove('active-main-menu');
					document.querySelector('#menu-ships').classList.remove('active-main-menu');
					document.querySelector('#menu-talents').classList.remove('active-main-menu');
					document.querySelector('#menu-auras').classList.remove('active-main-menu');
					document.querySelector('#menu-prestige').classList.remove('active-main-menu');
				}
				break;
			case 6:
				document.querySelector('.menu__one__content__farm').style.display = 'inherit';
				document.querySelector('.menu__one__content__dungeon').style.display = 'none';
				document.querySelector('.menu__one__content__raid').style.display = 'none';
				break;
			case 7:
				document.querySelector('.menu__one__content__farm').style.display = 'none';
				document.querySelector('.menu__one__content__dungeon').style.display = 'inherit';
				document.querySelector('.menu__one__content__raid').style.display = 'none';
				break;
			case 8:
				document.querySelector('.menu__one__content__farm').style.display = 'none';
				document.querySelector('.menu__one__content__dungeon').style.display = 'none';
				document.querySelector('.menu__one__content__raid').style.display = 'inherit';
				break;
			default:
				break;
		}
	};

	const menuSwitchShips = (menu) => {
		switch (menu) {
			case 1:
				// This should be refactored to not change the display, but instead
				// to check a menu state and change it as required.
				if (document.querySelector('.shipOne').style.display !== 'inherit') {
					document.querySelector('.shipOne').style.display = 'inherit';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'none';
				} else {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'none';
				}
				break;
			case 2:
				if (document.querySelector('.shipTwo').style.display !== 'inherit') {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'inherit';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'none';
				} else {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'none';
				}
				break;
			case 3:
				if (document.querySelector('.shipThree').style.display !== 'inherit') {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'inherit';
					document.querySelector('.shipFour').style.display = 'none';
				} else {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'none';
				}
				break;
			case 4:
				if (document.querySelector('.shipFour').style.display !== 'inherit') {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'inherit';
				} else {
					document.querySelector('.shipOne').style.display = 'none';
					document.querySelector('.shipTwo').style.display = 'none';
					document.querySelector('.shipThree').style.display = 'none';
					document.querySelector('.shipFour').style.display = 'none';
				}
				break;
			default:
				break;
		}
	};

	// Enemy Rotation
	const enemyRotation = (enemy) => {
		switch (enemy) {
			case 1:
				return 'one';
				break;
			case 2:
				return 'two';
				break;
			case 3:
				return 'three';
				break;
			case 4:
				return 'four';
				break;
			case 5:
				return 'five';
				break;
			case 6:
				return 'six';
				break;
			case 7:
				return 'seven';
				break;
			case 8:
				return 'eight';
				break;
			default:
				return 'one';
				break;
		}
	};

	// Enemies
	const iterateEnemies = (allEnemies) => {
		const enemyList = [];

		for (const check in allEnemies) {
			if (allEnemies.hasOwnProperty(check)) {
				const enemy = allEnemies[check];
				enemyList.push(
					<div
						onClick={() => setEnemy(check)}
						key={enemy.name}
						className={enemy.boss ? 'boss' : enemy.miniboss ? 'miniboss' : 'normal'}
					>
						<span className="title">{enemy.name}</span>
						<div className="topPanel">
							<div className="enemyHealth section">
								Health <br />
								<span>{enemy.health}</span>
							</div>
							<div className="enemyShields section">
								Shields <br />
								<span>{enemy.shields}</span>
							</div>
							<div className="enemyAbsorb section">
								Absorb <br />
								<span>{enemy.absorb}</span>
							</div>
						</div>
						<div className="rightPanel">
							<div className="section">
								<br />
								<span>
									Destruction <br />
									{enemy.currencyOne}
								</span>
							</div>
							<div className="section">
								<br />
								<span>
									Research <br />
									{enemy.currencyTwo} : {enemy.currencyTwoChance}
								</span>
							</div>
							<div className="section">
								<br />
								<span>
									Prestige <br />
									{enemy.currencyThree} : {enemy.currencyThreeChance}
								</span>
							</div>
						</div>
						<div className="leftPanel">
							<div className="section">
								<br />
								<span>
									Experience <br />
									{enemy.xp}
								</span>
							</div>
							<div className="section">
								<br />
								<span>
									Defense <br />
									{enemy.defense}
								</span>
							</div>
							<div className="section">
								<br />
								<span>
									First Kill? <br />
									{enemy.killed ? 'Killed' : 'Not Killed'}
								</span>
							</div>
						</div>
						<div className="centerImage" style={{ backgroundImage: `url(${enemy.background})` }}></div>
						<div className="bottomPanel">
							<div className="description">
								<span>{enemy.description}</span>
							</div>
						</div>
					</div>
				);
			}
		}

		return <div className="enemyList">{enemyList}</div>;
	};

	const iterateShips = (ships) => {
		const shipList = [];

		for (const check in ships) {
			if (ships.hasOwnProperty(check)) {
				const ship = ships[check];

				shipList.push(
					<div key={ship.name} className="shipSectionInternal">
						<div className="shipSectionInternal__title">
							<div>{ship.name}</div>
						</div>
						<div className="shipSectionInternal__image" style={{ backgroundImage: `url(${ship.image})` }}></div>
						<div className="shipSectionInternal__info">
							<div>
								{' '}
								<span className="infoTitle">Damage: </span> <br />
								{ship.baseDamage}
							</div>
							<div>
								{' '}
								<span className="infoTitle">Active? </span> <br />
								{ship.active ? 'Yes' : 'No'}
							</div>
							<div>
								{' '}
								<span className="infoTitle">Damage: </span> <br />
								{ship.baseDamage}
							</div>
						</div>
						<div className="shipSectionInternal__description">
							<div>{ship.description}</div>
						</div>
					</div>
				);
			}
		}

		return <div className="shipList">{shipList}</div>;
	};

	const currentSelectedEnemy = (currentEnemy) => {
		return (
			<div>
				<div
					key={currentEnemy.name}
					className={currentEnemy.boss ? 'boss' : currentEnemy.miniboss ? 'miniboss' : 'normal'}
				>
					<span className="title">{currentEnemy.name}</span>
					<div className="topPanel">
						<div className="currentEnemyHealth section">
							Health <br />
							<span>{currentEnemy.health}</span>
						</div>
						<div className="currentEnemyShields section">
							Shields <br />
							<span>{currentEnemy.shields}</span>
						</div>
						<div className="currentEnemyAbsorb section">
							Absorb <br />
							<span>{currentEnemy.absorb}</span>
						</div>
					</div>
					<div className="rightPanel">
						<div className="section">
							<br />
							<span>
								Destruction <br />
								{currentEnemy.currencyOne}
							</span>
						</div>
						<div className="section">
							<br />
							<span>
								Enemy Research <br />
								{currentEnemy.currencyTwo} : {currentEnemy.currencyTwoChance}
							</span>
						</div>
						<div className="section">
							<br />
							<span>
								Prestige <br />
								{currentEnemy.currencyThree} : {currentEnemy.currencyThreeChance}
							</span>
						</div>
					</div>
					<div className="leftPanel">
						<div className="section">
							<br />
							<span>
								Experience <br />
								{currentEnemy.xp}
							</span>
						</div>
						<div className="section">
							<br />
							<span>
								Defense <br />
								{currentEnemy.defense}
							</span>
						</div>
						<div className="section">
							<br />
							<span>
								First Kill? <br />
								{currentEnemy.killed ? 'Killed' : 'Not Killed'}
							</span>
						</div>
					</div>
					<div className="centerImage" style={{ backgroundImage: `url(${currentEnemy.background})` }}></div>
					<div className="bottomPanel">
						<div className="description">
							<span>{currentEnemy.description}</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const enemyNumberSelection = () => {
		const enemies = Object.entries(allEnemies);

		let buttonList = [];

		for (const check in enemies) {
			if (enemies.hasOwnProperty(check)) {
				const enemy = enemies[check];
				buttonList.push(
					<button
						key={enemy[1].name}
						className={`enemy-button killed-${enemy[1].killed} boss-${enemy[1].boss} miniboss-${enemy[1].miniboss} ${
							enemy[1].currentEnemyNumber === currentEnemy.currentEnemyNumber ? 'selected-enemy' : ''
						}`}
						id={`enemy-${enemy[1].currentEnemyNumber}`}
						onClick={() => {
							setEnemy(enemy[0]);
						}}
					>
						{`Enemy: ${enemy[1].currentEnemyNumber}`}
					</button>
				);
			}
		}

		return (
			<div>
				<div>{buttonList}</div>
				<div>{currentSelectedEnemy(currentEnemy)}</div>
			</div>
		);
	};

	const selectEnemy = (allEnemies, selectedEnemy) => {};

	return (
		<div>
			<div className="mainMenuBackground">
				<div className="mainMenu">
					{/* Our Enemy Control panel stuck on the UI */}
					<section id="menu-battle" onClick={() => menuSwitch(1)}>
						BATTLE
					</section>
					<section id="menu-ships" onClick={() => menuSwitch(2)}>
						SHIPS
					</section>
					<section id="menu-talents" onClick={() => menuSwitch(3)}>
						TALENTS
					</section>
					<section id="menu-auras" onClick={() => menuSwitch(4)}>
						AURAS
					</section>
					<section id="menu-prestige" onClick={() => menuSwitch(5)}>
						PRESTIGE
					</section>
					{/* <div className="mainMenu__enemyControls">
						<span className="mainMenu__enemyControls__title">Enemy: {currentEnemy}</span>
						<div>
							<button onClick={() => setEnemy(enemyRotation(currentEnemy > 5 ? currentEnemy - 5 : currentEnemy))}>
								-5
							</button>
							<button onClick={() => setEnemy(enemyRotation(currentEnemy > 1 ? currentEnemy - 1 : currentEnemy))}>
								-1
							</button>
						</div>
						<div>
							<button onClick={() => setEnemy(enemyRotation(currentEnemy < 8 ? currentEnemy + 1 : currentEnemy))}>
								+1
							</button>
							<button onClick={() => setEnemy(enemyRotation(currentEnemy < 4 ? currentEnemy + 5 : currentEnemy))}>
								+5
							</button>
						</div>
					</div> */}
				</div>
			</div>
			{/* TODO : All of these need to be refactored into individual components */}
			<div className="menu">
				<div className="menu__one">
					<div className="menu__one__title">Enemies</div>
					<div className="menu__one__buttons">
						<button key={'farm-button'} onClick={() => menuSwitch(6)} className="menu__one__buttons__farm">
							Farm
						</button>
						<button key={'dungeon-button'} onClick={() => menuSwitch(7)} className="menu__one__buttons__dungeon">
							Dungeon
						</button>
						<button key={'raid-button'} onClick={() => menuSwitch(8)} className="menu__one__buttons__raid">
							Raid
						</button>
					</div>
					<div className="menu__one__content">
						<div className="menu__one__content__farm">
							<div className="farm-section-select">{}</div>
							<div className="farm-section-show">{enemyNumberSelection(allEnemies)}</div>
						</div>
						<div className="menu__one__content__dungeon">TODO</div>
						<div className="menu__one__content__raid">TODO</div>
					</div>
				</div>
				<div className="menu__two">
					<div className="menu__two__title">Ships</div>
					<div className="addSatellites">
						<button onClick={() => setSatellites(1, 1, 'Test Name')}>Add 1 Tier 1 Ship</button>
						<button onClick={() => setSatellites(2, 1, 'Test Name')}>Add 1 Tier 2 Ship</button>
						<button onClick={() => setSatellites(3, 1, 'Test Name')}>Add 1 Tier 3 Ship</button>
						<button onClick={() => setSatellites(4, 1, 'Test Name')}>Add 1 Tier 4 Ship</button>
					</div>
					{/* <div className="menu__two__content">
						<section onClick={() => menuSwitchShips(1)}>Mothership</section>
						<section onClick={() => menuSwitchShips(2)}>Small</section>
						<section onClick={() => menuSwitchShips(3)}>Large</section>
						<section onClick={() => menuSwitchShips(4)}>Titan</section>
					</div>
					<div className="addSatellites">
						<button onClick={() => setSatellites(1, 1, 'Test Name')}>Add 1 Tier 1 Ship</button>
						<button onClick={() => setSatellites(2, 1, 'Test Name')}>Add 1 Tier 2 Ship</button>
						<button onClick={() => setSatellites(3, 1, 'Test Name')}>Add 1 Tier 3 Ship</button>
						<button onClick={() => setSatellites(4, 1, 'Test Name')}>Add 1 Tier 4 Ship</button>
					</div>
					<div className="shipOne shipSection">
						{iterateShips(tierOneSatellites)}
						<div className="shipSection__details">
							<div className="pages">PLACEHOLDER 1/5</div>
							<div className="title">Equipment</div>
							<div className="equipment">
								<div className="equipmentOne">
									<div className="equipmentTitle">Weapon</div>
									<br />
									<div className="piece">
										{currentEquipment.ship1Equipment1 !== false
											? currentEquipment.ship1Equipment1
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentTwo">
									<div className="equipmentTitle">Chassis</div>
									<br />
									<div className="piece">
										{currentEquipment.ship1Equipment2 !== false
											? currentEquipment.ship1Equipment2
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentThree">
									<div className="equipmentTitle">Motor</div>
									<br />
									<div className="piece">
										{currentEquipment.ship1Equipment3 !== false
											? currentEquipment.ship1Equipment3
											: 'No Equipment Available'}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="shipTwo shipSection">
						{iterateShips(tierTwoSatellites)}
						<div className="shipSection__details">
							<div className="pages">PLACEHOLDER 1/5</div>
							<div className="title">Equipment</div>
							<div className="equipment">
								<div className="equipmentOne">
									<div className="equipmentTitle">Weapon</div>
									<br />
									<div className="piece">
										{currentEquipment.ship2Equipment1 !== false
											? currentEquipment.ship2Equipment1
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentTwo">
									<div className="equipmentTitle">Chassis</div>
									<br />
									<div className="piece">
										{currentEquipment.ship2Equipment2 !== false
											? currentEquipment.ship2Equipment2
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentThree">
									<div className="equipmentTitle">Motor</div>
									<br />
									<div className="piece">
										{currentEquipment.ship2Equipment3 !== false
											? currentEquipment.ship2Equipment3
											: 'No Equipment Available'}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="shipThree shipSection">
						{iterateShips(tierThreeSatellites)}
						<div className="shipSection__details">
							<div className="pages">PLACEHOLDER 1/5</div>
							<div className="title">Equipment</div>
							<div className="equipment">
								<div className="equipmentOne">
									<div className="equipmentTitle">Weapon</div>
									<br />
									<div className="piece">
										{currentEquipment.ship3Equipment1 !== false
											? currentEquipment.ship3Equipment1
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentTwo">
									<div className="equipmentTitle">Chassis</div>
									<br />
									<div className="piece">
										{currentEquipment.ship3Equipment2 !== false
											? currentEquipment.ship3Equipment2
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentThree">
									<div className="equipmentTitle">Motor</div>
									<br />
									<div className="piece">
										{currentEquipment.ship3Equipment3 !== false
											? currentEquipment.ship3Equipment3
											: 'No Equipment Available'}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="shipFour shipSection">
						{iterateShips(tierFourSatellites)}
						<div className="shipSection__details">
							<div className="pages">PLACEHOLDER 1/5</div>
							<div className="title">Equipment</div>
							<div className="equipment">
								<div className="equipmentOne">
									<div className="equipmentTitle">Weapon</div>
									<br />
									<div className="piece">
										{currentEquipment.ship4Equipment1 !== false
											? currentEquipment.ship4Equipment1
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentTwo">
									<div className="equipmentTitle">Chassis</div>
									<br />
									<div className="piece">
										{currentEquipment.ship4Equipment2 !== false
											? currentEquipment.ship4Equipment2
											: 'No Equipment Available'}
									</div>
								</div>
								<div className="equipmentThree">
									<div className="equipmentTitle">Motor</div>
									<br />
									<div className="piece">
										{currentEquipment.ship4Equipment3 !== false
											? currentEquipment.ship4Equipment3
											: 'No Equipment Available'}
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<div className="menu__three"></div>
				<div className="menu__four"></div>
				<div className="menu__five"></div>
			</div>
		</div>
	);
};

export default Menu;
