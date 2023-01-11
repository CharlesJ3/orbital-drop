import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera, Stats } from '@react-three/drei'
import React, { Suspense, useState, useEffect } from 'react'
import './App.scss'
import Menu from './components/Menu/Menu'
import BottomStats from './components/BottomStats/BottomStats'
import LevelBar from './components/LevelBar/LevelBar'
import Enemy from './components/Enemy/Enemy'
import SatelliteOne from './components/Satellites/SatelliteOne'
import SatelliteTwo from './components/Satellites/SatelliteTwo'
import SatelliteThree from './components/Satellites/SatelliteThree'
import SatelliteFour from './components/Satellites/SatelliteFour'
import Settings from './components/Settings/Settings'

// Enemy Backgrounds
import EnemyBG1 from './images/Enemy1.gif'
import EnemyBG2 from './images/Enemy2.gif'
import EnemyBG3 from './images/Enemy3.gif'
import EnemyBG4 from './images/Enemy4.gif'
import EnemyBG5 from './images/Enemy5.gif'
import EnemyBG6 from './images/Enemy6.gif'
import EnemyBG7 from './images/Enemy7.gif'
import EnemyBG8 from './images/Enemy8.gif'

function App() {

  const [cameraDefault, setCameraDefault] = useState({
    fov: 75,
    near: 0.01,
    far: 1000,
    position: [0, 0, 35],
    rotation: [0, 0, 0]
  })

  const resetCamera = () => {
    setCameraDefault((prevState => ({
      fov: 75,
      near: 0.1,
      far: 1000,
      //Camera will not update because of OrbitControls if these are the SAME.
      //Minimal update will cause a refresh but not affect the camera overall
      position: [0, 0, prevState.position[2] - .001],
    })));
  }

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
  })

  const [battleMode, setBattleMode] = useState(
    {
      battleMode: 'farm',
    }
  );

  // Our satellite information is stored here.
  // TODO: research if this is better to split into multiple hooks
  const [satellites, setSatellites] = useState(
    {
      tierOneAmount: 15,
      tierOneDamage: 1,
      tierOneName: 'Shippy',
      tierOneType: 'Main',
      tierTwoAmount: 5,
      tierTwoDamage: 2,
      tierTwoName: 'Butterball',
      tierTwoType: 'Small',
      tierThreeAmount: 2,
      tierThreeDamage: 3,
      tierThreeName: 'Biggie',
      tierThreeType: 'Large',
      tierFourAmount: 1,
      tierFourDamage: 5,
      tierFourName: 'Butch Deadlift',
      tierFourType: 'Titan',
    }
  );

  const [settings, updateSettings] = useState(
    {
      showLabels: true,
      labelSize: 0,
      labelDistance: 0,
      labelScale: true,
    }
  );

  // FARMING
  const [currentEnemy, checkCurrentEnemy] = useState(
    {
      currentEnemyNumber: 1,
      name: 'Simulated Earth',
      health: 3,
      maxHealth: 3,
      shield: 0,
      maxShield: 0,
      xp: 1,
      defense: 0,
      type: 'Planet (Small)',
      currencyOne: 1,
      currencyTwo: 0,
      currencyTwoChance: 0,
      currencyThree: 0,
      currencyThreeChance: 0,
      killed: false,
      buffs: [
        // [Buff Title, Buff Rank, Buff Description]
        ['Shield Bonus', 1, 'Shields are increased by 10%'],
        ['Damage Reduction', 1, 'Increases Defense by .5'],
        ['Damage Increase', 1, 'Increases Damage by .5'],
      ],
      debuffs: [
        // [Debuff Title, Debuff Rank, Debuff Description]
        ['Rotten', 1, 'Reduced Shields by 10%'],
        ['Greedy', 1, 'Increased RP Chance by 1%'],
      ],
    }
  );

  const [level, levelCheck] = useState(
    {
      level: 1,
      currentXP: 0,
      maxXP: 2,
      //Overflow XP is the additional XP that is added to the current XP when the player levels up.
      overflowXP: 0,
      talentPoints: 0,
      talentPointsMax: 0,
    }
  )

  const [currency, updateCurrency] = useState(
    {
      // Destruction points
      currencyOne: 0,

      // Research points
      currencyTwo: 0,

      // Prestige points
      currencyThree: 0,
    }
  );

  const [currentEquipment, updateEquipment] = useState(
    {
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
    }
  );

  /*
  * All functions are defined here
  */
  // Lets users toggle Satellite labels
  const toggleLabels = () => {
    updateSettings((prevState => ({
      ...prevState,
      showLabels: !settings.showLabels,
    })));
  };

  // Toggle satellite label size
  const toggleLabelsSize = () => {
    updateSettings((prevState => ({
      ...prevState,
      labelSize: settings.labelSize === 0 ? 1 :
      settings.labelSize === 1 ? 2 :
      settings.labelSize === 2 ? 0 : 0
    })));
  };

  // Level up after checking if the player has enough XP
  const levelUp = () => {
    levelCheck({
      level: level.level + 1,
      currentXP: 0,
      maxXP: level.maxXP + ((level.maxXP * 1.25) + 5),
      overflowXP: 0,
    })
  }

  // check level experience before leveling up
  const levelChecker = () => {
    if (level.currentXP >= level.maxXP) {
      (levelUp());
    }
  }

  // Check enemy health and reset to max health if it is 0
  const healthChecker = () => {
    if (currentEnemy.health <= 0) {
      giveExperience();
      giveResources();

      checkCurrentEnemy((prevState => ({
        ...prevState,
        health: currentEnemy.maxHealth,
        shield: currentEnemy.maxShield,
      })));
    }
  }

  // Give experience when leveling
  const giveExperience = () => {
    level.currentXP += currentEnemy.xp;
    levelChecker();
  }

  // Give resources when killing an enemy
  const giveResources = () => {
    currency.currencyOne += currentEnemy.currencyOne;
    currency.currencyTwo += currentEnemy.currencyTwo;
    currency.currencyThree += currentEnemy.currencyThree;
  }

  const setEnemy = (enemyNumber) => {
    checkCurrentEnemy((prevState => ({
      ...prevState,
      currentEnemyNumber: allEnemies[enemyNumber].currentEnemy,
      name: allEnemies[enemyNumber].name,
      health: allEnemies[enemyNumber].health,
      maxHealth: allEnemies[enemyNumber].health,
      shield: allEnemies[enemyNumber].shields,
      maxShield: allEnemies[enemyNumber].shields,
      xp: allEnemies[enemyNumber].xp,
      defense: allEnemies[enemyNumber].defense,
      currenyOne: allEnemies[enemyNumber].currencyOne,
      currencyOneChance: allEnemies[enemyNumber].currencyOneChance,
      currenyTwo: allEnemies[enemyNumber].currencyTwo,
      currencyTwoChance: allEnemies[enemyNumber].currencyTwoChance,
      currenyThree: allEnemies[enemyNumber].currencyThree,
      currencyThreeChance: allEnemies[enemyNumber].currencyThreeChance,
    })));
  }

  const battleModeSelection = (mode) => {
    setBattleMode(mode);
  }

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
      />,
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
        ((satellites.tierOneAmount * satellites.tierOneDamage) +
        (satellites.tierTwoAmount * satellites.tierTwoDamage) +
        (satellites.tierThreeAmount * satellites.tierThreeDamage) +
        (satellites.tierFourAmount * satellites.tierFourDamage)) * 1;
      if (currentEnemy.shield > 0 && totalDamage > 0) {
        checkCurrentEnemy((prevState => ({
          ...prevState,
          shield: currentEnemy.shield - (totalDamage - currentEnemy.defense),
        })));
      } else if (currentEnemy.shield <= 0) {
        checkCurrentEnemy((prevState => ({
          ...prevState,
          health: currentEnemy.health - (totalDamage - currentEnemy.defense),
        })));
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
      <Menu
        tierOneSatellites={tierOneSatellites}
        tierTwoSatellites={tierTwoSatellites}
        tierThreeSatellites={tierThreeSatellites}
        tierFourSatellites={tierFourSatellites}
        currentEquipment={currentEquipment}
        allEnemies={allEnemies}
        equipment={equipment}
        setEnemy={setEnemy}
        currentEnemy={currentEnemy.currentEnemyNumber}
      >
      </Menu>
      <Settings
        toggleLabels={toggleLabels}
        toggleLabelsSize={toggleLabelsSize}
        settings={settings}
        resetCamera={resetCamera}
      />
      {/* Canvas - FARMING*/}
      { battleMode.battleMode == 'farm' &&
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
            <ambientLight
              intensity={.5}
            />
            <directionalLight
              position={[250, 25, -25]}
              intensity={1}
            />
            <directionalLight
              position={[-250, -25, 25]}
              intensity={1}
            />
            <Enemy
              currentEnemyNumber={currentEnemy.currentEnemyNumber}
              name={currentEnemy.name}
              type={currentEnemy.type}
              xp={currentEnemy.xp}
              defense={currentEnemy.defense}
              health={currentEnemy.health}
              maxHealth={currentEnemy.maxHealth}
              shield={currentEnemy.shield}
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
            <Stars
              count={500}
            />
            {/* <EnemyOne position={[0,0,10]} /> */}
            <Stats />
          </Suspense>
      </Canvas>
      }
      {/* Bottom Stats */}
      <LevelBar
        level={level.level}
        currentXP={level.currentXP}
        maxXP={level.maxXP}
      >
      </LevelBar>
      <BottomStats
        currencyOne={currency.currencyOne}
        currencyTwo={currency.currencyTwo}
        currencyThree={currency.currencyThree}
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
}

const tierTwoSatellites = {
  one: {
    name: 'Cheap Small Ship',
    baseDamage: 1,
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
    active: false,
    description: 'This was given to us to begin our journey.',
    equipment: [true, false, false],
    resource: 'destruction',
    resourceCost: 50,
    image: EnemyBG1,
  },
}

const tierThreeSatellites = {
  one: {
    name: 'Cheap Large Ship',
    baseDamage: 10,
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
    active: false,
    description: 'This was given to us to begin our journey.',
    equipment: [true, false, false],
    resource: 'destruction',
    resourceCost: 50,
    image: EnemyBG1,
  },
}

const tierFourSatellites = {
  one: {
    name: 'Cheap Titan Ship',
    baseDamage: 100,
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
    active: false,
    description: 'This was given to us to begin our journey.',
    equipment: [true, false, false],
    resource: 'destruction',
    resourceCost: 50,
    image: EnemyBG1,
  },
}

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
}

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
    description: 'A vision of what Earth once was, perhaps a few thousand years ago. We wonder what has changed since then.',
    background: EnemyBG5,
    currentEnemy: 1,
  },
  two: {
    name: 'Simulated Earth 2: Electric Boogaloo',
    miniboss: false,
    boss: false,
    health: 25,
    shields: 15,
    absorb: 0,
    defense: 0,
    xp: 4,
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
    currentEnemy: 2,
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
    currentEnemy: 3,
  },
  four: {
    name: 'Earth 20,000 AD',
    boss: false,
    miniboss: true,
    health: 150,
    shields: 100,
    absorb: 25,
    defense: 0,
    xp: 35,
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
    description: 'This is not what we expected. Whatever inhabited left eons ago, but we must ensure whatever is alive does not remain so. Were our calculations... incorrect?',
    background: EnemyBG8,
    currentEnemy: 4,
  },
  five: {
    name: 'Training Dummy',
    miniboss: false,
    boss: false,
    health: 450,
    shields: 250,
    absorb: 25,
    defense: 0,
    xp: 100,
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
    currentEnemy: 5,
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
    currentEnemy: 6,
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
    description: 'We are ready to deal damage to something a bit stronger. Perhaps this dummy will provide some challenge?',
    description: 'Earth is coming up soon; this is the most destruction we plan on encountering.',
    background: EnemyBG3,
    currentEnemy: 7,
  },
  eight: {
    name: 'Old Earth Probe?',
    miniboss: false,
    boss: true,
    health: 5000,
    shields: 2500,
    absorb: 350,
    defense: 0,
    xp: 1000,
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
    currentEnemy: 8,
  },
}

export default App;
