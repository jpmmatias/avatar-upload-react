import React from 'react';
import { Area, Point } from 'react-easy-crop';
import Cropper from './Cropper';
import Slider from './Slider';
import { Container } from './style';
import CloseButton from '../../CloseButton';

type Props = {
	zoom: number;
	showCroppedImage: any;
	setCrop: React.Dispatch<
		React.SetStateAction<{
			x: number;
			y: number;
		}>
	>;
	onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
	setZoom: React.Dispatch<React.SetStateAction<number>>;
	image: string | null;
	crop: {
		x: number;
		y: number;
	};
	setStatus: React.Dispatch<
		React.SetStateAction<'default' | 'uploading' | 'success' | 'error'>
	>;
	resetState: () => void;
};

function CroppingAvatarUpload({
	crop,
	image,
	onCropComplete,
	setZoom,
	setCrop,
	showCroppedImage,
	zoom,
	resetState,
}: Props) {
	return (
		<Container>
			<div>
				<Cropper
					crop={crop}
					setCrop={setCrop}
					zoom={zoom}
					setZoom={setZoom}
					onCropChange={setCrop}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
					image={image}
				/>

				<CloseButton onClick={resetState} />
			</div>
			<div className='cropping-settings'>
				<div className='slidder'>
					<h1>Crop</h1>
					<Slider zoom={zoom} setZoom={setZoom} />
				</div>

				<button onClick={showCroppedImage} className='save'>
					Save
				</button>
			</div>
		</Container>
	);
}

export default CroppingAvatarUpload;
