import React from 'react';
import './Menu.scss';

const Menu = ({ tierOneSatellites, tierTwoSatellites, tierThreeSatellites, tierFourSatellites, allEnemies, equipment, setEnemy, currentEnemy }) => {

  const menuSwitch = ( menu ) => {
    switch (menu) {
      case 1:
        // This should be refactored to not change the display, but instead
        // to check a menu state and change it as required.
        if(document.querySelector('.menu__one').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'inherit';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        }
      break;
      case 2:
        if(document.querySelector('.menu__two').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'inherit';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        }
      break;
      case 3:
        if(document.querySelector('.menu__three').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'inherit';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        }
      break;
      case 4:
        if(document.querySelector('.menu__four').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'inherit';
          document.querySelector('.menu__five').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        }
      break;
      case 5:
        if(document.querySelector('.menu__five').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'inherit';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
          document.querySelector('.menu__five').style.display = 'none';
        }
      break;
      default:
        break;
    }
  }

  const menuSwitchShips = ( menu ) => {
    switch (menu) {
      case 1:
        // This should be refactored to not change the display, but instead
        // to check a menu state and change it as required.
        if(document.querySelector('.shipOne').style.display !== 'inherit') {
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
        if(document.querySelector('.shipTwo').style.display !== 'inherit') {
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
        if(document.querySelector('.shipThree').style.display !== 'inherit') {
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
        if(document.querySelector('.shipFour').style.display !== 'inherit') {
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
  }

  // Enemies
  const iterateEnemies = (allEnemies) => {

    const enemyList = []

    for (const check in allEnemies) {
      if (allEnemies.hasOwnProperty(check)) {
        const enemy = allEnemies[check];

        enemyList.push(
          <div key={enemy.name} className={enemy.boss ? 'boss' : enemy.miniboss ? 'miniboss' : 'normal'}>
            <span className="title">{enemy.name}</span>
            <div className="topPanel">
              <div className='enemyHealth section'>Health <br /><span>{enemy.health}</span></div>
              <div className='enemyShields section' >Shields <br /><span>{enemy.shields}</span></div>
              <div className='enemyAbsorb section'>Absorb <br /><span>{enemy.absorb}</span></div>
            </div>
            <div className="rightPanel">
            <div className='section'><br /><span>Destruction <br />{enemy.currencyOne}</span></div>
              <div className='section' ><br /><span>Research <br />{enemy.currencyTwo} : {enemy.currencyTwoChance}</span></div>
              <div className='section'><br /><span>Prestige <br />{enemy.currencyThree} : {enemy.currencyThreeChance}</span></div>
            </div>
            <div className="leftPanel">
              <div className='section'><br /><span>Experience <br />{enemy.xp}</span></div>
              <div className='section' ><br /><span>Defense <br />{enemy.defense}</span></div>
              <div className='section'><br /><span>First Kill? <br />{enemy.killed ? 'Killed' : 'Not Killed'}</span></div>
            </div>
            <div className="centerImage" onClick={() => setEnemy(check)} style={{'backgroundImage': `url(${enemy.background})`}}>

            </div>
            <div className="bottomPanel">
              <div className='description'><span>{enemy.description}</span></div>
            </div>
          </div>
        );
      }
    }

    return(
      <div className='enemyList'>
        {enemyList}
      </div>
    )
  }

  const iterateShips = (ships) => {

    const shipList = []

    for (const check in ships) {
      if (ships.hasOwnProperty(check)) {
        const ship = ships[check];

        shipList.push(
          <div key={ship.name} className='shipSectionInternal'>
            <div className="title">{ship.name}</div>
            <div className="topPanel">
              {ship.baseDamage}
            </div>
          </div>
        );
      }
    }

    return(
      <div className='shipList'>
        {shipList}
      </div>
    )
  }

  return (
    <div>
      <div className="mainMenuBackground">
        <div className="mainMenu">
          <section onClick={() => menuSwitch(1)}>BATTLE</section>
          <section onClick={() => menuSwitch(2)}>SHIPS</section>
          <section onClick={() => menuSwitch(3)}>TALENTS</section>
          <section onClick={() => menuSwitch(4)}>AURAS</section>
          <section onClick={() => menuSwitch(5)}>PRESTIGE</section>
        </div>
      </div>
      <div className='menu'>
        <div className='menu__one'>
          <div className='menu__one__title'>Enemies</div>
            <div className='menu__one__content'>
              { iterateEnemies(allEnemies) }
            </div>
        </div>
        <div className='menu__two'>
          <div className='menu__two__title'>Ships</div>
          <div className='menu__two__content'>
            <section onClick={() => menuSwitchShips(1)}>Mothership</section>
            <section onClick={() => menuSwitchShips(2)}>Small</section>
            <section onClick={() => menuSwitchShips(3)}>Large</section>
            <section onClick={() => menuSwitchShips(4)}>Titan</section>
          </div>
          <div className="shipOne shipSection">
            { iterateShips(tierOneSatellites) }
          </div>
          <div className="shipTwo shipSection">
            { iterateShips(tierTwoSatellites) }
          </div>
          <div className="shipThree shipSection">
            { iterateShips(tierThreeSatellites) }
          </div>
          <div className="shipFour shipSection">
            { iterateShips(tierFourSatellites) }
          </div>
        </div>
        <div className='menu__three'>

        </div>
        <div className='menu__four'>

        </div>
        <div className='menu__five'>

        </div>
      </div>
    </div>
  );
}

export default Menu;
