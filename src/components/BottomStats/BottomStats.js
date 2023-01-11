import React from 'react';
import './BottomStats.scss';

function BottomStats({ currencyOne, currencyTwo, currencyThree }) {
	return (
		<div className="bottomStats">
			<div className="bottomStats__currency">
				<p>
					Research Points <br /> <span>{currencyOne}</span>
				</p>
				<p>
					Talent Points <br /> <span>{currencyTwo === 0 ? currencyTwo : '0'}</span>
				</p>
				<p>
					Prestige Points <br /> <span>{currencyThree === 0 ? currencyThree : '0'}</span>
				</p>
			</div>
		</div>
	);
}

export default BottomStats;
