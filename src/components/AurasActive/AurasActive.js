import React from 'react';
import './AurasActive.scss';
import ReactDOMServer from 'react-dom/server';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function AurasActive({ activeAuras }) {
	return (
		<div className="auras-active">
			<div className="auras-active__graphic"></div>
			<div className="auras-active__small">
				{Object.entries(activeAuras['auraSmall']).map((aura) => (
					<div
						className={`auras-active__small__${aura[0]} aura`}
						id={aura[0]}
						key={aura[0]}
						data-tooltip-html={ReactDOMServer.renderToString(
							<div className="tooltip-internals__auras">
								<div>Aura Info will go here</div>
							</div>
						)}
					>
						<ReactTooltip place={'left'} anchorId={aura[0]} />
					</div>
				))}
			</div>
			<div className="auras-active__medium">
				{Object.entries(activeAuras['auraMedium']).map((aura) => (
					<div
						className={`auras-active__medium__${aura[0]} aura`}
						id={aura[0]}
						key={aura[0]}
						data-tooltip-html={ReactDOMServer.renderToString(
							<div className="tooltip-internals__auras">
								<div>Aura Info will go here</div>
							</div>
						)}
					>
						<ReactTooltip place={'left'} anchorId={aura[0]} />
					</div>
				))}
			</div>
			<div className="auras-active__large">
				{Object.entries(activeAuras['auraLarge']).map((aura) => (
					<div
						className={`auras-active__large__${aura[0]} aura`}
						id={aura[0]}
						key={aura[0]}
						data-tooltip-html={ReactDOMServer.renderToString(
							<div className="tooltip-internals__auras">
								<div>Aura Info will go here</div>
							</div>
						)}
					>
						<ReactTooltip place={'left'} anchorId={aura[0]} />
					</div>
				))}
			</div>
		</div>
	);
}

export default AurasActive;
