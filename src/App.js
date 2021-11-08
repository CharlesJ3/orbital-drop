import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei'
import React, { Suspense, useState, useEffect } from 'react'
import './App.scss';
import Menu from './components/Menu/Menu'
import BottomStats from './components/BottomStats/BottomStats'
import LevelBar from './components/LevelBar/LevelBar'
import Enemy from './components/Enemy/Enemy';
import SatelliteOne from './components/Satellites/SatelliteOne';
import SatelliteTwo from './components/Satellites/SatelliteTwo';
import SatelliteThree from './components/Satellites/SatelliteThree';
import SatelliteFour from './components/Satellites/SatelliteFour';
import Settings from './components/Settings/Settings';

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
      //unless tens of thousands of updates are made over time.
      position: [0, 0, prevState.position[2] - .001],
    })));
  }

  /*
  * All hooks are defined here
  */
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
      // [10.11, 10.67, 5.68],
      // [26.44, 6.64, 14.78],
      // [32.14, 5.74, 9.92],
      // [29.26, 15.23, 24.95],
      // [28.80, 7.54, 7.94],
      // [26.78, 10.90, 6.53],
      // [19.55, 7.38, 7.54],
      // [13.67, 12.14, 5.67],
      // [31.69, 5.74, 7.84],
      // [9.18, 10.7, 5.46],
      // [29.77, 15.15, 19.65],
      // [27.43, 9.31, 5.64],
      // [9.08, 5.46, 24.0],
      // [10.25, 10.17, 8.57],
      // [22.92, 5.729, 14.55],
      // [11.01, 5.175, 14.89],
      // [10.74, 9.72, 11.79],
      // [8.55, 5.64, 13.88],
      // [23.39, 7.57, 7.85],
      // [18.7, 7.69, 14.47],
      // [12.45, 8.45, 11.7],
      // [42.0, 13.3, 12.77],
      // [7.99, 13.40, 22.8],
      // [47.5, 8.68, 13.09],
      // [9.79, 8.90, 14.58],
      // [16.3, 6.436, 5.55],
      // [22.0, 5.073, 14.86],
      // [8.2, 7.60, 8.18],
      // [6.91, 8.35, 16.4],
      // [19.09, 13.2, 12.60],
      // [19.73, 6.77, 8.77],
      // [6.94, 5.537, 19.95],
      // [7.01, 15.35, 18.79],
      // [40.23, 8.24, 5.41],
      // [26.46, 15.79, 8.39],
      // [19.9, 5.51, 8.11],
      // [6.88, 17.7, 17.34],
      // [10.93, 6.50, 13.97],
      // [46.88, 8.60, 7.60],
      // [7.94, 5.44, 11.41],
      // [17.3, 6.94, 17.78],
      // [13.69, 7.79, 7.0],
      // [6.53, 7.90, 10.88],
      // [15.80, 9.42, 11.01],
      // [10.74, 10.01, 9.54],
      // [17.26, 6.25, 12.64],
      // [13.29, 11.88, 15.1],
      // [16.0, 7.91, 21.],
      // [9.61, 6.05, 19.3],
    ],
  })

  // Our satellite information is stored here.
  // TODO: research if this is better to split into multiple hooks
  const [satellites, setSatellites] = useState(
    {
      tierOneAmount: 1,
      //Attack speed is in milliseconds
      tierOneAttackSpeed: 1000,
      tierOneDamage: 1,
      tierOneName: 'Shippy',
      tierOneType: 'Main',
      tierOneAddLocation: false,
      tierTwoAmount: 45,
      tierTwoDamage: 2,
      tierTwoName: 'Butterball',
      tierTwoType: 'Small',
      tierThreeAmount: 15,
      tierThreeDamage: 3,
      tierThreeName: 'Biggie',
      tierThreeType: 'Large',
      tierFourAmount: 5,
      tierFourDamage: 5,
      tierFourName: 'Butch Deadlift',
      tierFourType: 'Titan',
      totalDamage: 0
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

  const [currentEnemy, checkCurrentEnemy] = useState(
    {
      name: 'TestEnemy',
      health: 25,
      maxHealth: 25,
      shield: 10,
      maxShield: 10,
      xp: 1,
      defense: .5,
      type: 'Planet (Small)',
      researchPoints: 1,
      researchChange: 5,
      buffs: [
        // [Buff Title, Buff Rank, Buff Description]
        ['Shield Bonus', 1, 'Shields are increased by 10%'],
        ['Damage Reduction', 1, 'Increases Defense by .5'],
        ['Damage Increase', 5, 'Increases Damage by .5'],
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
      // Research points are used to buy upgrades.
      currencyOne: 0,

      //
      currencyTwo: 0,
      currencyThree: 0,
    }
  );

  /*
  * All functions are defined here
  */
  const updateSatelliteNumber = (satellite) => {
    switch (satellite) {
      case 1:
        if ( satellites.tierOneAmount > satellites.tierOneCurrentAmount) {
          setSatellites((prevState => ({
            // ...prevState,
            // tierOneCurrentAmount: satellites.tierOneCurrentAmount + 1,
          })));
        } else {

        }
        break;

      default:
        break;
    }
  }

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

  /* We are going with a DOT affect to limit the calls to
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
        (satellites.tierFourAmount * satellites.tierFourDamage));

      if (currentEnemy.shield > 0) {
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
      <Menu>
      </Menu>
      <Settings
        toggleLabels={toggleLabels}
        toggleLabelsSize={toggleLabelsSize}
        settings={settings}
        resetCamera={resetCamera}
      />
      {/* Canvas */}
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
            name={currentEnemy.name}
            type={currentEnemy.type}
            xp={currentEnemy.xp}
            defense={currentEnemy.defense}
            health={currentEnemy.health}
            maxHealth={currentEnemy.maxHealth}
            shield={currentEnemy.shield}
            maxShield={currentEnemy.maxShield}
            labels={settings.showLabels}
            buffs={currentEnemy.buffs}
            debuffs={currentEnemy.debuffs}
          />
          {final}
          {final2}
          {final3}
          {final4}
          <Stars
            count={500}
          />
        </Suspense>
      </Canvas>
      {/* Bottom Stats */}
      <LevelBar
        level={level.level}
        currentXP={level.currentXP}
        maxXP={level.maxXP}
      >
      </LevelBar>
      <BottomStats
        currency={currency}
      />
    </>
  );
}

export default App;
