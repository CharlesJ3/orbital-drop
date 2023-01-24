import React from 'react';
import './ShipsMenu.scss';

function ShipsMenu({ shipsMenuOptions, currentShipsMenu, satellites }) {
	return (
		<div className="ships-menu">
			<button
				className={currentShipsMenu.currentOption === 'select' ? 'active-ship-menu' : ''}
				onClick={() => shipsMenuOptions('select')}
			>
				Select Ships
			</button>
			<button
				className={currentShipsMenu.currentOption === 'equip' ? 'active-ship-menu' : ''}
				onClick={() => shipsMenuOptions('equip')}
			>
				Equipment
			</button>
			<button
				className={currentShipsMenu.currentOption === 'stats' ? 'active-ship-menu' : ''}
				onClick={() => shipsMenuOptions('stats')}
			>
				Stats
			</button>
		</div>
	);
}

export default ShipsMenu;
