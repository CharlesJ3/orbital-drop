import React from 'react';
import './ShipsSelectIndividual.scss';
import ReactDOMServer from 'react-dom/server';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function ShipSelectIndividual({ ship }) {
	const backgroundStyle = {
		backgroundImage: `url(${ship.image})`,
	};

	return (
		<div key={ship.name} className="shipSectionInternal" style={backgroundStyle}>
			<span className="ship-details ship-name">{ship.name}</span>
			<div className="ship-details-wrapper">
				<div
					id={`${ship.name}-offense`}
					className="ship-details ship-damage"
					data-tooltip-html={ReactDOMServer.renderToString(
						<div className="tooltip-internals__offense">
							<div>
								<span className="highlight-tooltip">{ship.name}</span> <br />
								Base Damage:{' '}
								<span className="highlight-tooltip">
									{ship.baseDamage} <br />
								</span>
								Equipment:{' '}
								<span className="highlight-tooltip">
									{ship.equipment} <br />
								</span>
								All Offense Information Will Go Here On Hover <br />
								Description: <br />
								<span className="highlight-tooltip">
									{ship.description} <br />
								</span>
							</div>
						</div>
					)}
				>
					<span>
						DAM <br />
						{ship.baseDamage}
						<br />
					</span>
				</div>
				<div
					id={`${ship.name}-defense`}
					className="ship-details ship-defense"
					data-tooltip-html={ReactDOMServer.renderToString(
						<div className="tooltip-internals__defense">
							<div>
								<div>
									<span className="highlight-tooltip">{ship.name}</span> <br />
									Base Defense:{' '}
									<span className="highlight-tooltip">
										{ship.baseDefense} <br />
									</span>
									Equipment:{' '}
									<span className="highlight-tooltip">
										{ship.equipment} <br />
									</span>
									All Defense Information Will Go Here On Hover <br />
									Description: <br />
									<span className="highlight-tooltip">
										{ship.description} <br />
									</span>
								</div>
							</div>
						</div>
					)}
				>
					<span>
						DEF <br />
						{ship.baseDefense}
						<br />
					</span>
				</div>
			</div>
			<ReactTooltip place={'left'} positionStrategy={'absolute'} anchorId={`${ship.name}-offense`} />
			<ReactTooltip place={'left'} positionStrategy={'absolute'} anchorId={`${ship.name}-defense`} />
		</div>
	);
}

export default ShipSelectIndividual;
