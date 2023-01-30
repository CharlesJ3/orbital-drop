import React from 'react';
import TalentsIndividual from '../TalentsIndividual/TalentsIndividual';
import './TalentsSection.scss';

function TalentsSection({ activeTalents, allTalents, updateTalents, name, shipClass }) {
	return (
		<div className={name + ' talent-section'}>
			<div className="talent_title" id={name}>
				{shipClass}
			</div>
			{Object.entries(allTalents).map((talent) => {
				return (
					<TalentsIndividual
						key={talent[0]}
						talent={talent}
						activeTalents={activeTalents}
						allTalents={allTalents}
						updateTalents={updateTalents}
						name={name}
					/>
				);
			})}
		</div>
	);
}

export default TalentsSection;
