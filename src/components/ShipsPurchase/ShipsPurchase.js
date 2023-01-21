import React from 'react';
import './ShipsPurchase.scss';

function ShipsPurchase(setSatellites) {
	return (
		<div>
			<button onClick={() => setSatellites.setSatellites(2, 1, 1, 'Test Name')}>Add Explorer</button>
			<button onClick={() => setSatellites.setSatellites(3, 1, 2, 'Test Name')}>Add Freighter</button>
			<button onClick={() => setSatellites.setSatellites(4, 1, 3, 'Test Name')}>Add Titan</button>
		</div>
	);
}

export default ShipsPurchase;
