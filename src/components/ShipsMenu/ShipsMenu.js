import React from 'react';
import './ShipsMenu.scss';

function ShipsMenu({ shipsMenuOptions, currentShipsMenu }) {
	return (
		<div className="ships-menu">
			<button onClick={() => shipsMenuOptions('select')}>Select Ships</button>
			<button onClick={() => shipsMenuOptions('equip')}>Equipment</button>
			<button onClick={() => shipsMenuOptions('stats')}>Stats</button>
		</div>
	);
}

export default ShipsMenu;
