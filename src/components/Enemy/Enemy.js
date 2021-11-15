import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import React, { useRef} from 'react'
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

const colorSelector = {
  thin: .1,
  thin2: .2,
  thin3: .3,
  med: .4,
  med2: .5,
  med3: .6,
  heavy: .7,
  heavy2: .8,
  heavy3: .9,
  full: 1,
  toxicGreen: 0x588222,
  plum: 0xD694E1,
  turquoise: 0x57CED7,
  studio: 0x844AAF,
  raven: 0x696F7A,
  burgundy: 0x85052F,
  jazzberry: 0xA91E60,
  amaranth: 0xE12A48
}

function EnemyMesh(currentEnemy) {

  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.0005));

  return (
    <mesh position={[0, 0, 0]}
      ref={ref}
    >
      {/* We'll check on which enemy to load based on the current enemy */ }
      {
        currentEnemy.currentEnemy === 1 ? <Enemy2 /> :
        currentEnemy.currentEnemy === 2 ? <Enemy3 /> :
        currentEnemy.currentEnemy === 3 ? <Enemy1 /> :
        currentEnemy.currentEnemy === 4 ? <Enemy4 /> :
        currentEnemy.currentEnemy === 5 ? <Enemy5 /> :
        currentEnemy.currentEnemy === 6 ? <Enemy6 /> :
        currentEnemy.currentEnemy === 7 ? <Enemy7 /> :
        currentEnemy.currentEnemy === 8 ? <Enemy8 /> : null
      }
    </mesh>
  )
}

export default function Enemy(props) {
  return (
    <group>
      <EnemyInfo
        tier='one'
        name={props.name}
        type={props.type}
        health={props.health}
        maxHealth={props.maxHealth}
        shield={props.shield}
        maxShield={props.maxShield}
        props={props}
        xp={props.xp}
        defense={props.defense}
        labels={props.labels}
        buffs={props.buffs}
        debuffs={props.debuffs}
      />
      <EnemyMesh currentEnemy={props.currentEnemyNumber}/>
    </group>
  )
}