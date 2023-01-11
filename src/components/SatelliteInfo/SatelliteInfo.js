import { Html, Text } from '@react-three/drei';
import './SatelliteInfo.scss';

function SatelliteInfo({ props, settings, name, damage, tier, type }) {
	return (
		<>
			{props.settings.showLabels && (
				<Html zIndexRange={[100, 0]} className="satellite" distanceFactor={35}>
					<span>---</span>
					<div
						className={
							tier === 'one'
								? 'satellite__tierOne'
								: tier === 'two'
								? 'satellite__tierTwo'
								: tier === 'three'
								? 'satellite__tierThree'
								: tier === 'four'
								? 'satellite__tierFour'
								: ''
						}
					>
						<div
							className={
								props.settings.labelSize === 0
									? 'satellite__small'
									: props.settings.labelSize === 1
									? 'satellite__medium'
									: props.settings.labelSize === 2
									? 'satellite__large'
									: ''
							}
						>
							{/* <div className='satellite__name'>{name}</div> */}
							<div className="satellite__type">{type}</div>
							<div className="satellite__damage">{damage} DMG</div>
						</div>
					</div>
				</Html>
			)}
		</>
	);
}

export default SatelliteInfo;
