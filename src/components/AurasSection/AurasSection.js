import React from 'react';
import AurasIndividual from '../AurasIndividual/AurasIndividual';
import ReactDOMServer from 'react-dom/server';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './AurasSection.scss';

function AurasSection({ updateAuras, allAuras, sectionToUpdate }) {
	const title = sectionToUpdate.slice(4);

	return (
		<div className="auras-section">
			<div className="auras-section__title">{title}</div>
			<div className={`auras-section__${sectionToUpdate}`}>
				{Object.entries(allAuras[sectionToUpdate]).map((aura) => (
					<div
						className={`auras-section__${aura[0]} allAuras`}
						id={`all_${aura[0]}`}
						key={aura[0] + 'all'}
						data-tooltip-html={ReactDOMServer.renderToString(
							<div className="tooltip-internals__auras">
								<div>Aura Info will go here</div>
							</div>
						)}
					>
						<ReactTooltip place={'left'} anchorId={`all_${aura[0]}`} />
					</div>
				))}
			</div>
		</div>
	);
}

export default AurasSection;
