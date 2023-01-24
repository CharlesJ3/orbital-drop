import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Stats } from '@react-three/drei';
import React, { Suspense, useState, useEffect } from 'react';
import './App.scss';
import BottomStats from './components/BottomStats/BottomStats';
import Enemy from './components/Enemy/Enemy';
import SatelliteOne from './components/Satellites/SatelliteOne';
import SatelliteTwo from './components/Satellites/SatelliteTwo';
import SatelliteThree from './components/Satellites/SatelliteThree';
import SatelliteFour from './components/Satellites/SatelliteFour';
import Settings from './components/Settings/Settings';

// Enemy Backgrounds
import EnemyBG1 from './images/Enemy1.gif';
import EnemyBG2 from './images/Enemy2.gif';
import EnemyBG3 from './images/Enemy3.gif';
import EnemyBG4 from './images/Enemy4.gif';
import EnemyBG5 from './images/Enemy5.gif';
import EnemyBG6 from './images/Enemy6.gif';
import EnemyBG7 from './images/Enemy7.gif';
import EnemyBG8 from './images/Enemy8.gif';

function App() {
	const [cameraDefault, setCameraDefault] = useState({
		fov: 75,
		near: 0.01,
		far: 1000,
		position: [0, 0, 35],
		rotation: [0, 0, 0],
	});

	const resetCamera = () => {
		setCameraDefault((prevState) => ({
			fov: 75,
			near: 0.1,
			far: 1000,
			//Camera will not update because of OrbitControls if these are the SAME.
			//Minimal update will cause a refresh but not affect the camera overall
			position: [0, 0, prevState.position[2] - 0.001],
			rotation: [0, 0, 0],
		}));
	};

	/*
	 * All hooks are defined here
	 */

	// TODO : Randomize locations and if already in use random again
	const [locations, setLocations] = useState({
		locations: [
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
		],
	});

	const [battleMode, setBattleMode] = useState({
		battleMode: 'farm',
	});

	// Our satellite information is stored here.
	// TODO: research if this is better to split into multiple hooks
	const [satellites, setSatellitesState] = useState({
		tierOneAmount: 1,
		tierOneDamage: 1,
		tierOneName: 'Shippy',
		tierOneType: 'Main',
		tierOneCost: 1,
		tierTwoAmount: 0,
		tierTwoDamage: 2,
		tierTwoName: 'Butterball',
		tierTwoType: 'Explorer',
		tierTwoCost: 1,
		tierThreeAmount: 0,
		tierThreeDamage: 5,
		tierThreeName: 'Biggie',
		tierThreeType: 'Tanker',
		tierThreeCost: 25,
		tierFourAmount: 0,
		tierFourDamage: 10,
		tierFourName: 'Butch Deadlift',
		tierFourType: 'Titan',
		tierFourCost: 75,
	});

	const [settings, updateSettings] = useState({
		showLabels: true,
		labelSize: 0,
		labelDistance: 0,
		labelScale: true,
	});

	// FARMING
	const [currentEnemy, checkCurrentEnemy] = useState({
		name: 'Simulated Earth',
		boss: false,
		miniboss: false,
		health: 3,
		maxHealth: 3,
		shields: 0,
		maxShield: 0,
		absorb: 0,
		defense: 0,
		xp: 1,
		type: 'Planet (Small)',
		currencyOne: 3,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description:
			'A vision of what Earth once was, perhaps a few thousand years ago. We wonder what has changed since then.',
		background: EnemyBG5,
		currentEnemyNumber: 1,
		buffs: [],
		debuffs: [],
	});

	const [level, levelCheck] = useState({
		level: 1,
		currentXP: 0,
		maxXP: 2,
		//Overflow XP is the additional XP that is added to the current XP when the player levels up.
		overflowXP: 0,
		talentPoints: 0,
		talentPointsMax: 0,
	});

	const [currency, updateCurrency] = useState({
		// Destruction points
		currencyOne: 0,

		// Research points
		currencyTwo: 0,

		// Prestige points
		currencyThree: 0,
	});

	const [currentEquipment, updateEquipment] = useState({
		ship1Equipment1: 'Weapon1Test',
		ship1Equipment2: 'Chassis1Test',
		ship1Equipment3: 'Motor1Test',
		ship2Equipment1: false,
		ship2Equipment2: false,
		ship2Equipment3: false,
		ship3Equipment1: false,
		ship3Equipment2: false,
		ship3Equipment3: false,
		ship4Equipment1: false,
		ship4Equipment2: false,
		ship4Equipment3: false,
	});

	const [shipsMenu, updateShipsMenu] = useState({
		currentOption: 'select',
	});

	/*
	 * All functions are defined here
	 */
	// Lets users toggle Satellite labels
	const toggleLabels = () => {
		updateSettings((prevState) => ({
			...prevState,
			showLabels: !settings.showLabels,
		}));
	};

	// Toggle satellite label size
	const toggleLabelsSize = () => {
		updateSettings((prevState) => ({
			...prevState,
			labelSize: settings.labelSize === 0 ? 1 : settings.labelSize === 1 ? 2 : settings.labelSize === 2 ? 0 : 0,
		}));
	};

	// Level up after checking if the player has enough XP
	const levelUp = () => {
		levelCheck({
			level: level.level + 1,
			currentXP: 0,
			maxXP: level.maxXP + (level.maxXP * 1.25 + 5),
			overflowXP: 0,
		});
	};

	// check level experience before leveling up
	const levelChecker = () => {
		if (level.currentXP >= level.maxXP) {
			levelUp();
		}
	};

	// Check enemy health and reset to max health if it is 0
	const healthChecker = () => {
		if (currentEnemy.health <= 0) {
			giveExperience();
			giveResources();

			checkCurrentEnemy((prevState) => ({
				...prevState,
				health: currentEnemy.maxHealth,
				shields: currentEnemy.maxShield,
			}));
		}
	};

	// Give experience when leveling
	const giveExperience = () => {
		// TODO: Why is this not using the state? Fix immediately.
		level.currentXP += currentEnemy.xp;
		levelChecker();
	};

	// Give resources when killing an enemy
	// TODO: Why is this not using the state? Fix immediately.
	const giveResources = () => {
		currency.currencyOne += currentEnemy.currencyOne;
		currency.currencyTwo += currentEnemy.currencyTwo;
		currency.currencyThree += currentEnemy.currencyThree;
	};

	const setEnemy = (enemyNumber) => {
		checkCurrentEnemy(() => ({
			name: allEnemies[enemyNumber].name,
			boss: allEnemies[enemyNumber].boss,
			miniboss: allEnemies[enemyNumber].miniboss,
			health: allEnemies[enemyNumber].health,
			maxHealth: allEnemies[enemyNumber].health,
			shields: allEnemies[enemyNumber].shields,
			maxShield: allEnemies[enemyNumber].shields,
			absorb: allEnemies[enemyNumber].absorb,
			defense: allEnemies[enemyNumber].defense,
			xp: allEnemies[enemyNumber].xp,
			type: allEnemies[enemyNumber].type,
			currencyOne: allEnemies[enemyNumber].currencyOne,
			currencyTwo: allEnemies[enemyNumber].currencyTwo,
			currencyTwoChance: allEnemies[enemyNumber].currencyTwoChance,
			currencyThree: allEnemies[enemyNumber].currencyThree,
			currencyThreeChance: allEnemies[enemyNumber].currencyThreeChance,
			killed: allEnemies[enemyNumber].killed,
			equipment: {
				weapon: allEnemies[enemyNumber].equipment.weapon,
				chassis: allEnemies[enemyNumber].equipment.chassis,
				motor: allEnemies[enemyNumber].equipment.motor,
			},
			description: allEnemies[enemyNumber].description,
			background: allEnemies[enemyNumber].background,
			currentEnemyNumber: allEnemies[enemyNumber].currentEnemyNumber,
			buffs: allEnemies[enemyNumber].buffs,
			debuffs: allEnemies[enemyNumber].debuffs,
		}));
	};

	const setSatellites = (satellite, amount, damage, name) => {
		switch (satellite) {
			case 1:
				if (satellites.tierOneCost <= currency.currencyOne) {
					updateCurrency((prevState, currencyUpdate = prevState.currencyOne - satellites.tierOneCost) => ({
						...prevState,
						currencyOne: currencyUpdate,
					}));

					// Make sure the player has enough currency to buy the satellite
					setSatellitesState((prevState) => ({
						...prevState,
						tierOneAmount: prevState.tierOneAmount + amount,
						tierOneDamage: prevState.tierOneDamage + amount,
						tierOneName: name,
						tierOneCost: (prevState.tierOneCost * 1.25 + 1.5).toFixed(2),
					}));

					console.log(satellites.tierOneCost);
				}
				break;
			case 2:
				if (satellites.tierTwoCost <= currency.currencyOne) {
					updateCurrency((prevState, currencyUpdate = prevState.currencyOne - satellites.tierTwoCost) => ({
						...prevState,
						currencyOne: currencyUpdate,
					}));

					setSatellitesState((prevState) => ({
						...prevState,
						tierTwoAmount: prevState.tierTwoAmount + amount,
						tierTwoDamage: prevState.tierTwoDamage + amount,
						tierTwoName: name,
						tierTwoCost: (prevState.tierTwoCost * 1.25 + 3).toFixed(2),
					}));
				}
				break;
			case 3:
				if (satellites.tierThreeCost <= currency.currencyOne) {
					updateCurrency((prevState, currencyUpdate = prevState.currencyOne - satellites.tierThreeCost) => ({
						...prevState,
						currencyOne: currencyUpdate,
					}));

					setSatellitesState((prevState) => ({
						...prevState,
						tierThreeAmount: prevState.tierThreeAmount + amount,
						tierThreeDamage: prevState.tierThreeDamage + damage,
						tierThreeName: name,
						tierThreeCost: (prevState.tierThreeCost * 1.25 + 5).toFixed(2),
					}));
				}
				break;
			case 4:
				if (satellites.tierFourCost <= currency.currencyOne) {
					updateCurrency((prevState, currencyUpdate = prevState.currencyOne - satellites.tierFourCost) => ({
						...prevState,
						currencyOne: currencyUpdate,
					}));

					setSatellitesState((prevState) => ({
						...prevState,
						tierFourAmount: prevState.tierFourAmount + amount,
						tierFourDamage: prevState.tierFourDamage + damage,
						tierFourName: name,
						tierFourCost: (prevState.tierFourCost * 1.25 + 15).toFixed(2),
					}));
				}
				break;
			default:
				break;
		}
	};

	const battleModeSelection = (mode) => {
		setBattleMode(mode);
	};

	const shipsMenuOptions = (option) => {
		updateShipsMenu(() => ({
			currentOption: option,
		}));
	};

	// Store all the satellites in arrays
	const final = [];
	const final2 = [];
	const final3 = [];
	const final4 = [];

	for (let index = 0; index < satellites.tierOneAmount; index++) {
		final.push(
			<SatelliteOne
				settings={settings}
				className="satelliteWrapper"
				key={index}
				locationNum={index}
				name={satellites.tierOneName}
				type={satellites.tierOneType}
				amount={satellites.tierOneAmount}
				damage={satellites.tierOneDamage}
				posX={locations.locations[index][0]}
				posY={locations.locations[index][1]}
				posZ={locations.locations[index][2]}
			/>
		);
	}

	for (let index2 = 0; index2 < satellites.tierTwoAmount; index2++) {
		final2.push(
			<SatelliteTwo
				settings={settings}
				className="satelliteWrapper"
				key={index2}
				name={satellites.tierTwoName}
				type={satellites.tierTwoType}
				amount={satellites.tierTwoAmount}
				damage={satellites.tierTwoDamage}
				posX={locations.locations[index2][0]}
				posY={locations.locations[index2][1]}
				posZ={locations.locations[index2][2]}
			/>
		);
	}

	for (let index3 = 0; index3 < satellites.tierThreeAmount; index3++) {
		final3.push(
			<SatelliteThree
				settings={settings}
				className="satelliteWrapper"
				key={index3}
				name={satellites.tierThreeName}
				type={satellites.tierThreeType}
				amount={satellites.tierThreeAmount}
				damage={satellites.tierThreeDamage}
				posX={locations.locations[index3][0]}
				posY={locations.locations[index3][1]}
				posZ={locations.locations[index3][2]}
			/>
		);
	}

	for (let index4 = 0; index4 < satellites.tierFourAmount; index4++) {
		final4.push(
			<SatelliteFour
				settings={settings}
				className="satelliteWrapper"
				key={index4}
				name={satellites.tierFourName}
				type={satellites.tierFourType}
				amount={satellites.tierFourAmount}
				damage={satellites.tierFourDamage}
				posX={locations.locations[index4][0]}
				posY={locations.locations[index4][1]}
				posZ={locations.locations[index4][2]}
			/>
		);
	}

	/* We are going with a DOT effect to limit the calls to
	 *  the attack function. This way we won't have to limit the
	 *  amount of satellites as much.
	 *
	 *  We'll use useEffect to set an interval once and clear it afterwards
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			const totalDamage =
				(satellites.tierOneAmount * satellites.tierOneDamage +
					satellites.tierTwoAmount * satellites.tierTwoDamage +
					satellites.tierThreeAmount * satellites.tierThreeDamage +
					satellites.tierFourAmount * satellites.tierFourDamage) *
				1;
			// TODO: When a shield is depleted, take the remainder of that damage and apply it to the health
			if (currentEnemy.shields > 0 && totalDamage > 0) {
				checkCurrentEnemy((prevState) => ({
					...prevState,
					shields: currentEnemy.shields - (totalDamage - currentEnemy.defense),
				}));
			} else if (currentEnemy.shields <= 0) {
				checkCurrentEnemy((prevState) => ({
					...prevState,
					health: currentEnemy.health - (totalDamage - currentEnemy.defense),
				}));
				healthChecker();
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<>
			{/* Menu */}
			<Settings
				toggleLabels={toggleLabels}
				toggleLabelsSize={toggleLabelsSize}
				settings={settings}
				resetCamera={resetCamera}
			/>
			{/* Canvas - FARMING*/}
			{battleMode.battleMode == 'farm' && (
				<Canvas>
					<PerspectiveCamera
						makeDefault
						fov={cameraDefault.fov}
						position={cameraDefault.position}
						near={cameraDefault.near}
						far={cameraDefault.far}
					/>
					<Suspense fallback={null}>
						<OrbitControls />
						<ambientLight intensity={0.5} />
						<directionalLight position={[250, 25, -25]} intensity={1} />
						<directionalLight position={[-250, -25, 25]} intensity={1} />
						<Enemy
							currentEnemyNumber={currentEnemy.currentEnemyNumber}
							name={currentEnemy.name}
							type={currentEnemy.type}
							xp={currentEnemy.xp}
							defense={currentEnemy.defense}
							health={currentEnemy.health}
							maxHealth={currentEnemy.maxHealth}
							shields={currentEnemy.shields}
							maxShield={currentEnemy.maxShield}
							labels={settings.showLabels}
							killed={currentEnemy.killed}
							buffs={currentEnemy.buffs}
							debuffs={currentEnemy.debuffs}
							currencyOne={currentEnemy.currencyOne}
							currencyTwo={currentEnemy.currencyTwo}
							currencyTwoChance={currentEnemy.currencyTwoChance}
							currencyThree={currentEnemy.currencyThree}
							currencyThreeChance={currentEnemy.currencyThreeChance}
						/>
						{final}
						{final2}
						{final3}
						{final4}
						<Stars count={500} />
						<Stats />
					</Suspense>
				</Canvas>
			)}
			{/* Bottom Stats */}
			<BottomStats
				level={level.level}
				currentXP={level.currentXP}
				maxXP={level.maxXP}
				currencyOne={currency.currencyOne}
				currencyTwo={currency.currencyTwo}
				currencyThree={currency.currencyThree}
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
				currentShipsMenu={shipsMenu}
				satellites={satellites}
			/>
		</>
	);
}

const tierOneSatellites = {
	one: {
		name: 'Cheap Mothership',
		baseDamage: 1,
		active: true,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	two: {
		name: 'Pet Mothership',
		baseDamage: 2,
		active: false,
		description: 'TODO: Need Description',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 150,
		image: EnemyBG1,
	},
	three: {
		name: 'Boring Mothership',
		baseDamage: 5,
		active: false,
		description: 'TODO: Need Description',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 1250,
		image: EnemyBG1,
	},
};

const tierTwoSatellites = {
	one: {
		name: 'Cheap Small Ship',
		baseDamage: 1,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	two: {
		name: 'Pet Small Ship',
		baseDamage: 2,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	three: {
		name: 'Boring Small Ship',
		baseDamage: 3,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	four: {
		name: 'Decent Small Ship',
		baseDamage: 4,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'TODO: Need Description',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	five: {
		name: 'Testing Small Ship',
		baseDamage: 5,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'TODO: Need Description',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
};

const tierThreeSatellites = {
	one: {
		name: 'Cheap Large Ship',
		baseDamage: 10,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	two: {
		name: 'Pet Large Ship',
		baseDamage: 25,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	three: {
		name: 'Boring Large Ship',
		baseDamage: 50,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	four: {
		name: 'Decent Large Ship',
		baseDamage: 50,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	five: {
		name: 'Test Large Ship',
		baseDamage: 50,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
};

const tierFourSatellites = {
	one: {
		name: 'Cheap Titan Ship',
		baseDamage: 100,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	two: {
		name: 'Pet Titan Ship',
		baseDamage: 250,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [false, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	three: {
		name: 'Boring Titan Ship',
		baseDamage: 500,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	four: {
		name: 'Decent Titan Ship',
		baseDamage: 50,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
	five: {
		name: 'OK Titan Ship',
		baseDamage: 50,
		baseDefense: 1,
		baseHealth: 1,
		active: false,
		description: 'This was given to us to begin our journey.',
		equipment: [true, false, false],
		resource: 'destruction',
		resourceCost: 50,
		image: EnemyBG1,
	},
};

const equipment = {
	weapons: {
		one: {
			name: 'Basic Cannonball',
			damageMultiplier: 1.25,
			effect: 'none',
		},
	},
	chassis: {
		one: {
			name: 'Basic chassis',
			damageMultiplier: 1.25,
			effect: 'none',
		},
	},
	motor: {
		one: {
			name: 'Cannonball',
			damageMultiplier: 1.25,
			effect: 'none',
		},
	},
};

const allEnemies = {
	one: {
		name: 'Simulated Earth',
		boss: false,
		miniboss: false,
		health: 3,
		shields: 0,
		absorb: 0,
		defense: 0,
		xp: 1,
		type: 'Planet (Small)',
		currencyOne: 3,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description:
			'A vision of what Earth once was, perhaps a few thousand years ago. We wonder what has changed since then.',
		background: EnemyBG5,
		currentEnemyNumber: 1,
		buffs: [],
		debuffs: [],
	},
	two: {
		name: 'Simulated Earth 2: Electric Boogaloo',
		miniboss: false,
		boss: false,
		health: 3,
		shields: 0,
		absorb: 0,
		defense: 0,
		xp: 4,
		type: 'Planet (Small)',
		currencyOne: 12,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description: 'A slightly tougher version of our projection of Earth.',
		background: EnemyBG6,
		currentEnemyNumber: 2,
		buffs: [],
		debuffs: [],
	},
	three: {
		name: 'Another Simulated Earth',
		boss: false,
		miniboss: false,
		health: 75,
		shields: 50,
		absorb: 0,
		defense: 0,
		xp: 15,
		type: 'Planet (Small)',
		currencyOne: 25,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description: 'Earth is coming up soon; this is the most destruction we plan on encountering.',
		background: EnemyBG7,
		currentEnemyNumber: 3,
		buffs: [],
		debuffs: [],
	},
	four: {
		name: 'Earth 20,000 AD',
		boss: false,
		miniboss: false,
		health: 150,
		shields: 100,
		absorb: 25,
		defense: 0,
		xp: 35,
		type: 'Planet (Small)',
		currencyOne: 50,
		currencyTwo: 1,
		currencyTwoChance: 1,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description:
			'This is not what we expected. Whatever inhabited this place left and we must ensure whatever is alive does not remain so. Were our calculations... incorrect?',
		background: EnemyBG8,
		currentEnemyNumber: 4,
		buffs: [],
		debuffs: [],
	},
	five: {
		name: 'Training Dummy',
		miniboss: true,
		boss: false,
		health: 450,
		shields: 250,
		absorb: 25,
		defense: 0,
		xp: 100,
		type: 'Planet (Small)',
		currencyOne: 250,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description: 'All Motherships needs something to start with; kill this quickly so we can move on.',
		background: EnemyBG1,
		currentEnemyNumber: 5,
		buffs: [],
		debuffs: [],
	},
	six: {
		name: 'Elite Training Dummy',
		boss: false,
		miniboss: false,
		health: 1000,
		shields: 750,
		absorb: 50,
		defense: 0,
		xp: 200,
		type: 'Planet (Small)',
		currencyOne: 500,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description: 'A slightly tougher training dummy. Careful we do not hurt ourselves...',
		background: EnemyBG2,
		currentEnemyNumber: 6,
		buffs: [],
		debuffs: [],
	},
	seven: {
		name: 'Master Training Dummy',
		miniboss: false,
		boss: false,
		health: 2250,
		shields: 1250,
		absorb: 150,
		defense: 0,
		xp: 500,
		type: 'Planet (Small)',
		currencyOne: 1000,
		currencyTwo: 0,
		currencyTwoChance: 0,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: false,
			chassis: false,
			motor: false,
		},
		description:
			'We are ready to deal damage to something a bit stronger. Perhaps this dummy will provide some challenge?',
		background: EnemyBG3,
		currentEnemyNumber: 7,
		buffs: [],
		debuffs: [],
	},
	eight: {
		name: 'Old Earth Probe?',
		miniboss: false,
		boss: false,
		health: 5000,
		shields: 2500,
		absorb: 350,
		defense: 0,
		xp: 1000,
		type: 'Planet (Small)',
		currencyOne: 2500,
		currencyTwo: 3,
		currencyTwoChance: 2,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: equipment.weapons.one,
			weaponActive: true,
			chassis: false,
			motor: false,
		},
		description: 'Uh-oh... We are concerned. Earth is not supposed to have this technology yet. Check it out.',
		background: EnemyBG4,
		currentEnemyNumber: 8,
		buffs: [],
		debuffs: [],
	},
	nine: {
		name: 'Old Earth Probe TEST 1',
		miniboss: false,
		boss: false,
		health: 5000,
		shields: 2500,
		absorb: 350,
		defense: 0,
		xp: 1000,
		type: 'Planet (Small)',
		currencyOne: 2500,
		currencyTwo: 3,
		currencyTwoChance: 2,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: equipment.weapons.one,
			weaponActive: true,
			chassis: false,
			motor: false,
		},
		description: 'Just Testing 10 enemies',
		background: EnemyBG4,
		currentEnemyNumber: 9,
		buffs: [],
		debuffs: [],
	},
	ten: {
		name: 'Old Earth Probe TEST 2',
		miniboss: false,
		boss: true,
		health: 5000,
		shields: 2500,
		absorb: 350,
		defense: 0,
		xp: 1000,
		type: 'Planet (Small)',
		currencyOne: 2500,
		currencyTwo: 3,
		currencyTwoChance: 2,
		currencyThree: 0,
		currencyThreeChance: 0,
		killed: false,
		equipment: {
			weapon: equipment.weapons.one,
			weaponActive: true,
			chassis: false,
			motor: false,
		},
		description: 'Just Testing 10 enemies',
		background: EnemyBG4,
		currentEnemyNumber: 10,
		buffs: [],
		debuffs: [],
	},
};

export default App;
