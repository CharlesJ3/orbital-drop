import React from 'react';
import './Menu.scss';

const Menu = ({ tierOneSatellites, tierTwoSatellites, tierThreeSatellites, tierFourSatellites, allEnemies, equipment, setEnemy, currentEnemy, currentEquipment }) => {

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
  }

  // Enemies
  const iterateEnemies = (allEnemies) => {

    const enemyList = []

    for (const check in allEnemies) {
      if (allEnemies.hasOwnProperty(check)) {
        const enemy = allEnemies[check];

        enemyList.push(
          <div
            onClick={() => setEnemy(check)}
            key={enemy.name}
            className={(enemy.boss ? 'boss' : enemy.miniboss ? 'miniboss' : 'normal')}
          >
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
            <div className="centerImage" style={{'backgroundImage': `url(${enemy.background})`}}>

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
        <div className='enemyList__controls'>
          {/* <button onClick={() => setEnemy(currentEnemy > 1 ? currentEnemy - 1 : currentEnemy)}>Back</button>
          <button onClick={() => setEnemy(currentEnemy < 8 ? currentEnemy + 1 : currentEnemy)}>Forward</button> */}

          <button onClick={() => setEnemy(enemyRotation(currentEnemy > 1 ? currentEnemy - 1 : currentEnemy))}>Back</button>
          <button onClick={() => setEnemy(enemyRotation(currentEnemy < 8 ? currentEnemy + 1 : currentEnemy))}>Forward</button>
        </div>
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
            <div className='shipSectionInternal__title'>
              <div>{ship.name}</div>
            </div>
            <div className='shipSectionInternal__image' style={{'backgroundImage': `url(${ship.image})`}}>

            </div>
            <div className="shipSectionInternal__info">
              <div> <span className="infoTitle">Damage: </span> <br />{ship.baseDamage}</div>
              <div> <span className="infoTitle">Active? </span> <br />{ship.active ? 'Yes' : 'No'}</div>
              <div> <span className="infoTitle">Damage: </span> <br />{ship.baseDamage}</div>
            </div>
            <div className="shipSectionInternal__description">
              <div>{ship.description}</div>
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
          {/* Our Enemy Control panel stuck on the UI */}
          <div className='mainMenu__enemyControls'>
            <span className='mainMenu__enemyControls__title'>Enemy: {currentEnemy}</span>
            <div>
              <button onClick={() => setEnemy(enemyRotation(currentEnemy > 5 ? currentEnemy - 5 : currentEnemy))}>-5</button>
              <button onClick={() => setEnemy(enemyRotation(currentEnemy > 1 ? currentEnemy - 1 : currentEnemy))}>-1</button>
            </div>
            <div>
              <button onClick={() => setEnemy(enemyRotation(currentEnemy < 8 ? currentEnemy + 1 : currentEnemy))}>+1</button>
              <button onClick={() => setEnemy(enemyRotation(currentEnemy < 4 ? currentEnemy + 5 : currentEnemy))}>+5</button>
            </div>
          </div>
          <section onClick={() => menuSwitch(1)}>BATTLE</section>
          <section onClick={() => menuSwitch(2)}>SHIPS</section>
          <section onClick={() => menuSwitch(3)}>TALENTS</section>
          <section onClick={() => menuSwitch(4)}>AURAS</section>
          <section onClick={() => menuSwitch(5)}>PRESTIGE</section>
        </div>
      </div>
      {/* TODO : All of these need to be refactored into individual components */}
      <div className='menu'>
        <div className='menu__one'>
          <div className='menu__one__title'>Enemies</div>
          <div className="menu__one__buttons">
            <button onClick={() => menuSwitch(6)} className="menu__one__buttons__farm">Farm</button>
            <button onClick={() => menuSwitch(7)} className="menu__one__buttons__dungeon">Dungeon</button>
            <button onClick={() => menuSwitch(8)} className="menu__one__buttons__raid">Raid</button>
          </div>
          <div className="menu__one__content">
            <div className='menu__one__content__farm'>
              { iterateEnemies(allEnemies) }
            </div>
            <div className='menu__one__content__dungeon'>
              TEST TEST TEST TEST TEST TESTTEST TEST TEST
              <button onClick={ () => console.log("sup") } className="menu__one__content__dungeon__button">TEST</button>
            </div>
            <div className='menu__one__content__raid'>
              TEST 23
            </div>
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
            <div className="shipSection__details">
              <div className="pages">PLACEHOLDER 1/5</div>
              <div className="title">Equipment</div>
              <div className="equipment">
                <div className="equipmentOne">
                  <div className="equipmentTitle">Weapon</div><br />
                  <div className="piece">{currentEquipment.ship1Equipment1 !== false ? currentEquipment.ship1Equipment1 : 'No Equipment Available' }</div>
                </div>
                <div className="equipmentTwo">
                  <div className="equipmentTitle">Chassis</div><br />
                  <div className="piece">{currentEquipment.ship1Equipment2 !== false ? currentEquipment.ship1Equipment2 : 'No Equipment Available' }</div>
                </div>
                <div className="equipmentThree">
                  <div className="equipmentTitle">Motor</div><br />
                  <div className="piece">{currentEquipment.ship1Equipment3 !== false ? currentEquipment.ship1Equipment3 : 'No Equipment Available' }</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipTwo shipSection">
            { iterateShips(tierTwoSatellites) }
            <div className="shipSection__details">
              <div className="pages">PLACEHOLDER 1/5</div>
              <div className="title">Equipment</div>
                <div className="equipment">
                  <div className="equipmentOne">
                    <div className="equipmentTitle">Weapon</div><br />
                    <div className="piece">{currentEquipment.ship2Equipment1 !== false ? currentEquipment.ship2Equipment1 : 'No Equipment Available' }</div>
                  </div>
                  <div className="equipmentTwo">
                    <div className="equipmentTitle">Chassis</div><br />
                    <div className="piece">{currentEquipment.ship2Equipment2 !== false ? currentEquipment.ship2Equipment2 : 'No Equipment Available' }</div>
                  </div>
                  <div className="equipmentThree">
                    <div className="equipmentTitle">Motor</div><br />
                    <div className="piece">{currentEquipment.ship2Equipment3 !== false ? currentEquipment.ship2Equipment3 : 'No Equipment Available' }</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="shipThree shipSection">
            { iterateShips(tierThreeSatellites) }
            <div className="shipSection__details">
              <div className="pages">PLACEHOLDER 1/5</div>
              <div className="title">Equipment</div>
                <div className="equipment">
                  <div className="equipmentOne">
                    <div className="equipmentTitle">Weapon</div><br />
                    <div className="piece">{currentEquipment.ship3Equipment1 !== false ? currentEquipment.ship3Equipment1 : 'No Equipment Available' }</div>
                  </div>
                  <div className="equipmentTwo">
                    <div className="equipmentTitle">Chassis</div><br />
                    <div className="piece">{currentEquipment.ship3Equipment2 !== false ? currentEquipment.ship3Equipment2 : 'No Equipment Available' }</div>
                  </div>
                  <div className="equipmentThree">
                    <div className="equipmentTitle">Motor</div><br />
                    <div className="piece">{currentEquipment.ship3Equipment3 !== false ? currentEquipment.ship3Equipment3 : 'No Equipment Available' }</div>
                  </div>
                </div>
            </div>
          </div>
          <div className="shipFour shipSection">
            { iterateShips(tierFourSatellites) }
            <div className="shipSection__details">
              <div className="pages">PLACEHOLDER 1/5</div>
              <div className="title">Equipment</div>
              <div className="equipment">
                <div className="equipmentOne">
                  <div className="equipmentTitle">Weapon</div><br />
                  <div className="piece">{currentEquipment.ship4Equipment1 !== false ? currentEquipment.ship4Equipment1 : 'No Equipment Available' }</div>
                </div>
                <div className="equipmentTwo">
                  <div className="equipmentTitle">Chassis</div><br />
                  <div className="piece">{currentEquipment.ship4Equipment2 !== false ? currentEquipment.ship4Equipment2 : 'No Equipment Available' }</div>
                </div>
                <div className="equipmentThree">
                  <div className="equipmentTitle">Motor</div><br />
                  <div className="piece">{currentEquipment.ship4Equipment3 !== false ? currentEquipment.ship4Equipment3 : 'No Equipment Available' }</div>
                </div>
              </div>
            </div>
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
