import EeasyCropCropper, { CropperProps } from 'react-easy-crop';
import { Area, Point } from 'react-easy-crop/types';

interface Props {
	zoom: number;
	onCropChange: React.Dispatch<
		React.SetStateAction<{
			x: number;
			y: number;
		}>
	>;
	setCrop: (crop: Point) => void;
	onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
	onZoomChange: React.Dispatch<React.SetStateAction<number>>;
	setZoom: (zoom: number) => void;
	image: string | null;
	crop: {
		x: number;
		y: number;
	};
}

function Cropper({
	image,
	onCropComplete,
	onZoomChange,
	setCrop,
	zoom,
	crop,
	setZoom,
}: Props) {
	return (
		<EeasyCropCropper
			image={image!}
			crop={crop}
			objectFit='auto-cover'
			style={{
				containerStyle: {
					width: '7.0625rem',
					height: ' 7.0625rem',
					background: '#c3cbd5',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '100%',
					position: 'inherit',
				},
				cropAreaStyle: {
					display: 'none',
				},
				mediaStyle: {
					background: 'none',
				},
			}}
			zoom={zoom}
			aspect={4 / 3}
			onCropChange={setCrop}
			onCropComplete={onCropComplete}
			onZoomChange={setZoom}
		/>
	);
}

export default Cropper;
