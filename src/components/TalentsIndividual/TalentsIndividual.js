import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './TalentsIndividual.scss';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function TalentsIndividual({ talent, activeTalents, allTalents, updateTalents, name }) {
	const talentReady = activeTalents[talent[0]] ? talent[1].iconAvailable : talent[1].iconNotAvailable;
	const talentBig = talent[0].search('big');

	const talentConnects =
		talent[0].search('talentOne') === 0
			? 'three'
			: talent[0].search('talentSeven') === 0
			? 'two'
			: talent[0].search('talentTen') === 0
			? 'two'
			: 'one';

	return (
		<div
			style={{ backgroundImage: `url(${talentReady})` }}
			className={talentBig ? 'talents-individual' : 'talents-individual-big'}
			id={talent[0] + name}
			data-tooltip-html={ReactDOMServer.renderToString(
				<div className="tooltip-internals__offense">
					<div>Talent skills will go here</div>
				</div>
			)}
		>
			{talentConnects === 'one' && (
				<div
					className={
						!talentBig ? 'big-no-connection' : activeTalents[talent[0]] ? 'active-connection' : 'inactive-connection'
					}
				></div>
			)}

			{talentConnects === 'two' && (
				<>
					<div
						className={
							!talentBig ? 'big-no-connection' : activeTalents[talent[0]] ? 'active-connection' : 'inactive-connection'
						}
					></div>
					<div
						className={
							!talentBig
								? 'big-no-connection'
								: activeTalents[talent[0]]
								? 'active-connection-2'
								: 'inactive-connection-2'
						}
					></div>
				</>
			)}
			{talentConnects === 'three' && (
				<>
					<div
						className={
							!talentBig ? 'big-no-connection' : activeTalents[talent[0]] ? 'active-connection' : 'inactive-connection'
						}
					></div>
					<div
						className={
							!talentBig
								? 'big-no-connection'
								: activeTalents[talent[0]]
								? 'active-connection-2'
								: 'inactive-connection-2'
						}
					></div>
					<div
						className={
							!talentBig
								? 'big-no-connection'
								: activeTalents[talent[0]]
								? 'active-connection-3'
								: 'inactive-connection-3'
						}
					></div>
				</>
			)}
			<ReactTooltip place={'left'} positionStrategy={'absolute'} anchorId={talent[0] + name} />
		</div>
	);
}

export default TalentsIndividual;
