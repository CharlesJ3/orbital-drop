import React from 'react';
import './ShipsPurchase.scss';

function ShipsPurchase({ setSatellites, satellites, currencyOne, currencyTwo, currencyThree }) {
	return (
		<div className="ships-purchase">
			<button
				className={satellites.tierTwoCost <= currencyOne ? 'purchase' : 'no-purchase'}
				onClick={() => setSatellites(2, 1, 1, 'Test Name')}
			>
				Add Explorer <br />
				<br />
				<span className="ships-purchase__cost">{Math.ceil(satellites.tierTwoCost)}</span> <br />
				Research
			</button>
			<button
				className={satellites.tierThreeCost <= currencyOne ? 'purchase' : 'no-purchase'}
				onClick={() => setSatellites(3, 1, 2, 'Test Name')}
			>
				Add Freighter <br />
				<br />
				<span className="ships-purchase__cost">{Math.ceil(satellites.tierThreeCost)}</span> <br />
				Research
			</button>
			<button
				className={satellites.tierFourCost <= currencyOne ? 'purchase' : 'no-purchase'}
				onClick={() => setSatellites(4, 1, 3, 'Test Name')}
			>
				Add Titan <br />
				<br />
				<span className="ships-purchase__cost">{Math.ceil(satellites.tierFourCost)}</span> <br />
				Research
			</button>
		</div>
	);
}

export default ShipsPurchase;
