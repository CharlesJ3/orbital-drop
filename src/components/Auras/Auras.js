import React from 'react';
import AurasSection from '../AurasSection/AurasSection';
import AurasActive from '../AurasActive/AurasActive';
import AurasStats from '../AurasStats/AurasStats';
import './Auras.scss';

function Auras({ allAuras, activeAuras, updateAuras }) {
	return (
		<div className="auras">
			<div>
				<AurasActive activeAuras={activeAuras} />
			</div>
			<div className="auras__section">
				<AurasSection updateAuras={updateAuras} allAuras={allAuras} sectionToUpdate={'auraSmall'} />
				<AurasSection updateAuras={updateAuras} allAuras={allAuras} sectionToUpdate={'auraMedium'} />
				<AurasSection updateAuras={updateAuras} allAuras={allAuras} sectionToUpdate={'auraLarge'} />
			</div>
			<div>
				<AurasStats />
			</div>
		</div>
	);
}

export default Auras;
