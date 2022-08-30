import React from 'react';

type Props = {
	zoom: number;
	setZoom: React.Dispatch<React.SetStateAction<number>>;
};

function Slider({ zoom, setZoom }: Props) {
	return (
		<input
			data-testid='slider'
			type='range'
			value={zoom}
			min={1}
			max={3}
			step={0.1}
			aria-labelledby='Zoom'
			onChange={(e) => setZoom(Number(e.target.value))}
		/>
	);
}

export default Slider;
