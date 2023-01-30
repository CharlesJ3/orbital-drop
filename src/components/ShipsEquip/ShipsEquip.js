import React from 'react';
import './ShipsEquip.scss';
import ReactDOMServer from 'react-dom/server';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const iterateEquipment = (allEquipment) => {
	const shipWeapons = [];
	const shipChassiss = [];
	const shipMotors = [];

	for (const check in allEquipment['weapons']) {
		if (allEquipment['weapons'].hasOwnProperty(check)) {
			const equip = allEquipment['weapons'][check];
			const randomNumber = Math.floor(Math.random() * 100000);

			shipWeapons.push(
				<div
					className="ships-equip__weapons__individual"
					id={`${equip.name}-${randomNumber}-weapons`}
					data-tooltip-html={ReactDOMServer.renderToString('test')}
				>
					{equip.name}
					<ReactTooltip
						place={'left'}
						positionStrategy={'absolute'}
						anchorId={`${equip.name}-${randomNumber}-weapons`}
					/>
				</div>
			);
		}
	}

	for (const check in allEquipment['chassiss']) {
		if (allEquipment['chassiss'].hasOwnProperty(check)) {
			const equip = allEquipment['chassiss'][check];
			const randomNumber = Math.floor(Math.random() * 100000);

			shipChassiss.push(
				<div
					className="ships-equip__chassiss__individual"
					id={`${equip.name}-${randomNumber}-chassiss`}
					data-tooltip-html={ReactDOMServer.renderToString('test')}
				>
					{equip.name}
					<ReactTooltip
						place={'left'}
						positionStrategy={'absolute'}
						anchorId={`${equip.name}-${randomNumber}-chassiss`}
					/>
				</div>
			);
		}
	}

	for (const check in allEquipment['motors']) {
		if (allEquipment['motors'].hasOwnProperty(check)) {
			const equip = allEquipment['motors'][check];
			const randomNumber = Math.floor(Math.random() * 100000);

			shipMotors.push(
				<div
					className="ships-equip__motors__individual"
					id={`${equip.name}-${randomNumber}-motors`}
					data-tooltip-html={ReactDOMServer.renderToString('test')}
				>
					{equip.name}
					<ReactTooltip
						place={'left'}
						positionStrategy={'absolute'}
						anchorId={`${equip.name}-${randomNumber}-motors`}
					/>
				</div>
			);
		}
	}

	return (
		<div className="ships-equip__ordered">
			<div className="ships-equip__weapons">{shipWeapons}</div>
			<div className="ships-equip__chassiss">{shipChassiss}</div>
			<div className="ships-equip__motors">{shipMotors}</div>
		</div>
	);
};

function ShipsEquip({ allEquipment }) {
	return (
		<div className="ships-equip">
			<span className="ships-equip__title">Ship Name</span>
			{iterateEquipment(allEquipment)}
		</div>
	);
}

export default ShipsEquip;
