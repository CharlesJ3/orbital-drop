import React from 'react';
import './Resources.scss';

function Resources({ currencyOne, currencyTwo, currencyThree }) {
	return (
		<div className="resources">
			<span>
				Research Points <br /> <span>{currencyOne}</span>
			</span>
			<span>
				Talent Points <br /> <span>{currencyTwo === 0 ? currencyTwo : '0'}</span>
			</span>
			<span>
				Prestige Points <br /> <span>{currencyThree === 0 ? currencyThree : '0'}</span>
			</span>
		</div>
	);
}

export default Resources;
