import React from 'react';
import TalentsSection from '../TalentsSection/TalentsSection';
import './Talents.scss';

function Talents({ activeTalents, allTalents, updateTalents }) {
	return (
		<div>
			<div className="talents">
				<div className="talents__top-row">
					<TalentsSection
						activeTalents={activeTalents.classOne}
						allTalents={allTalents.classOne}
						updateTalents={updateTalents}
						name={'classOne'}
						shipClass={'Assault'}
					/>
					<TalentsSection
						activeTalents={activeTalents.classTwo}
						allTalents={allTalents.classTwo}
						updateTalents={updateTalents}
						name={'classTwo'}
						shipClass={'Guardian'}
					/>
				</div>
				<div className="talents__bottom-row">
					<TalentsSection
						activeTalents={activeTalents.classThree}
						allTalents={allTalents.classThree}
						updateTalents={updateTalents}
						name={'classThree'}
						shipClass={'Mercantile'}
					/>
					<TalentsSection
						activeTalents={activeTalents.classFour}
						allTalents={allTalents.classFour}
						updateTalents={updateTalents}
						name={'classFour'}
						shipClass={'Mothership'}
					/>
				</div>
			</div>
		</div>
	);
}

export default Talents;
