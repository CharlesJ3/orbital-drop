import { Html } from '@react-three/drei';
import { useState } from 'react';
import './EnemyInfo.scss';
import Placeholder from '../../images/placeholder-icon.png';

function EnemyInfo({
	health,
	maxHealth,
	shields,
	maxShield,
	defense,
	xp,
	type,
	labels,
	buffs,
	debuffs,
	currencyOne,
	currencyTwo,
	currencyTwoChance,
	currencyThree,
	currencyThreeChance,
	killed,
}) {
	const [hover, setHover] = useState({
		name: '',
		description: '',
		rank: '',
		hover: false,
	});

	return (
		<>
			{labels && (
				<Html className="enemyInfo no-pointer" distanceFactor={30} zIndexRange={[100, 0]}>
					<div className="enemyInfo__titles">
						<div className="enemyInfo__type">{type}</div>
					</div>
					<div className="enemyInfo__info">
						<div className="enemyInfo__info__defense">
							DEF <br />
							{defense}
						</div>
						<div className="enemyInfo__info__xp">
							EXP <br />
							{xp}
						</div>
					</div>
				</Html>
			)}
			{labels && (
				<Html className="enemyInfo__drops no-pointer" distanceFactor={30} zIndexRange={[100, 0]}>
					<div className="enemyInfo__titles">
						<div className="enemyInfo__type">Enemy Stats</div>
					</div>
					<div className="enemyInfo__drops__stats">
						<div className="enemyInfo__drops__stats__currencyOne dChild">
							Destruction
							<br />
							{currencyOne}
						</div>
						<div className="enemyInfo__drops__stats__killed dChild">
							Killed?
							<br />
							{killed ? 'Yes' : 'No'}
						</div>
						<div className="enemyInfo__drops__stats__currencyTwo dChild">
							{currencyTwo > 0 ? (
								<span>
									Research Points
									<br />
									{currencyTwo}
								</span>
							) : (
								''
							)}
						</div>
						<div className="enemyInfo__drops__stats__currencyTwoChance dChild">
							{currencyTwo > 0 ? (
								<span>
									Research Chance
									<br />
									{currencyTwoChance}
								</span>
							) : (
								''
							)}
						</div>
						<div className="enemyInfo__drops__stats__currencyThree dChild">
							{currencyThree > 0 ? (
								<span>
									Prestige Points
									<br />
									{currencyThree}
								</span>
							) : (
								''
							)}
						</div>
						<div className="enemyInfo__drops__stats__currencyChance dChild">
							{currencyThree > 0 ? (
								<span>
									Prestige Points
									<br />
									{currencyThreeChance}
								</span>
							) : (
								''
							)}
						</div>
					</div>
				</Html>
			)}
			{labels && (
				<Html className="enemyInfo__status no-pointer" distanceFactor={30} zIndexRange={[100, 0]}>
					<div className="enemyInfo__titles">
						<div className="enemyInfo__type">Enemy Buffs/Debuffs</div>
					</div>
					<div className="wrapper">
						<div className="enemyInfo__status__buffs">
							{buffs.map((buff, i) => (
								<div
									key={i}
									className="individualBuff"
									onMouseEnter={() =>
										setHover((prevState) => ({
											...prevState,
											name: buff[0],
											rank: buff[1],
											description: buff[2],
											hover: true,
										}))
									}
									onMouseLeave={() =>
										setHover((prevState) => ({
											...prevState,
											name: buff[0],
											description: buff[1],
											rank: buff[2],
											hover: false,
										}))
									}
								>
									<img src={Placeholder} alt="debuff" />
								</div>
							))}
						</div>
						<div className="enemyInfo__status__debuffs">
							{debuffs.map((debuff, i) => (
								<div
									key={i}
									className="individualDebuff"
									onMouseEnter={() =>
										setHover((prevState) => ({
											...prevState,
											name: debuff[0],
											rank: debuff[1],
											description: debuff[2],
											hover: true,
										}))
									}
									onMouseLeave={() =>
										setHover((prevState) => ({
											...prevState,
											name: debuff[0],
											description: debuff[1],
											rank: debuff[2],
											hover: false,
										}))
									}
								>
									<img src={Placeholder} alt="debuff" />
								</div>
							))}
						</div>
					</div>
				</Html>
			)}
			<Html
				className="enemyInfo__status__buffs__description"
				style={{ display: hover.hover ? 'inherit' : 'none' }}
				distanceFactor={30}
				zIndexRange={[100, 0]}
			>
				<div>
					<div className="enemyInfo__status__buffs__description__name">
						<span>Name:</span> {hover.name}
					</div>
					<div className="enemyInfo__status__buffs__description__description">
						<span>Description:</span> {hover.description}
					</div>
					<div className="enemyInfo__status__buffs__description__rank">
						<span>Rank:</span> {hover.rank}
					</div>
				</div>
			</Html>
			<Html className="enemyInfo__health no-pointer" distanceFactor={30} zIndexRange={[100, 0]}>
				<div className="enemyInfo__health-wrapper">
					<div className="enemyInfo__health__bar-title">HP</div>
					<div className="enemyInfo__health__bar-numbers">
						{Math.ceil(health)} / {Math.ceil(maxHealth)}
					</div>
					<div className="enemyInfo__health__bar-wrapper health">
						<div className="enemyInfo__health__bar-fill" style={{ height: `${(health / maxHealth) * 100}%` }} />
					</div>
				</div>
			</Html>
			<Html className="enemyInfo__shield no-pointer" distanceFactor={30} zIndexRange={[100, 0]}>
				<div className="enemyInfo__shield-wrapper">
					<div className="enemyInfo__shield__bar-title">SP</div>
					<div className="enemyInfo__shield__bar-numbers">
						{Math.ceil(shields)} / {Math.ceil(maxShield)}
					</div>
					<div className="enemyInfo__shield__bar-wrapper shield">
						<div className="enemyInfo__shield__bar-fill" style={{ height: `${(shields / maxShield) * 100}%` }} />
					</div>
				</div>
			</Html>
		</>
	);
}

export default EnemyInfo;
