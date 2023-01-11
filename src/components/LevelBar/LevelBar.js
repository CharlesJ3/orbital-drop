import React from 'react';
import './LevelBar.scss';

function LevelBar({ props, level, currentXP, maxXP }) {
	return (
		<div className="levelBar">
			<span>
				Experience: {currentXP} / {maxXP}
			</span>
			<span>Level: {level}</span>
		</div>
	);
}

export default LevelBar;
