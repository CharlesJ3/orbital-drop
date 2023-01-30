import React from 'react';
import './TalentsIndividual.scss';

function TalentsIndividual({ talent, activeTalents, allTalents, updateTalents, name }) {
	const talentIcon = activeTalents[talent[0]] ? talent[1].iconAvailable : talent[1].iconNotAvailable;

	return (
		<div
			style={{ backgroundImage: `url(${talentIcon})` }}
			className={talent[0].search('big') ? 'talents-individual' : 'talents-individual-big'}
		>
			{console.log(activeTalents[talent[0]])}
		</div>
	);
}

export default TalentsIndividual;
