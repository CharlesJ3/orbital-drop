import React from 'react';
import './ShipsSelect.scss';
import ShipSelectIndividual from '../ShipsSelectIndividual/ShipSelectIndividual';

const iterateShips = (ships) => {
	const shipList = [];

	for (const check in ships) {
		if (ships.hasOwnProperty(check)) {
			const ship = ships[check];

			shipList.push(<ShipSelectIndividual key={ship.name} ship={ship} />);
		}
	}

	return <div className="shipList">{shipList}</div>;
};

function ShipsSelect({ tierSatellites }) {
	return (
		<div className="ships-select">
			<span className="ships-select__title"> Ship Name </span>
			{iterateShips(tierSatellites)}
		</div>
	);
}

export default ShipsSelect;
