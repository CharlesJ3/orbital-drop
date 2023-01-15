import React from 'react';
import './LevelBar.scss';
import styled from 'styled-components';

// Styled Components

const ExpBar = styled.div`
	color: white;
	position: absolute;
	left: 0;
	width: 21%;
	height: 24%;
	background-color: rgba(201, 255, 125, 0.25);
	border: 3px solid black;
	font-size: 0.5em;
	box-shadow: inset 0 0 5px #000;
	z-index: 14;
`;

const ExpBarFill1 = styled.div`
	width: ${(props) => props.expPerc}%;
	height: 90%;
	background-color: rgba(20, 255, 25, 0.7);
	border: 1px solid black;
	transition: width 0.3s linear;
	z-index: 14;
`;

function LevelBar({ level, currentXP, maxXP }) {
	return (
		<div className="levelBar">
			<div className="allyExp">
				{currentXP.toFixed(2)} / {maxXP.toFixed(2)} XP
			</div>
			<span>Level: {level}</span>
			<ExpBar>
				<ExpBarFill1 id="experienceBar" expPerc={((currentXP / maxXP) * 100).toFixed(2)}></ExpBarFill1>
			</ExpBar>
		</div>
	);
}

export default LevelBar;
