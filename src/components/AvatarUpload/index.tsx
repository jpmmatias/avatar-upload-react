import { useCallback, useEffect, useState } from 'react';
import { Container } from './style';
import { Area } from 'react-easy-crop/types';
import DefaultAvatarUpload from './DefaultAvatarUpload/index';
import CroppingAvatarUpload from './CroppingAvatarUpload';
import ErrorAvatarUpload from './ErrorAvatarUpload';
import { getCroppedImg } from './utils/canvaUtils';
import DragbleZone from './DragbleZone';
import { readFile } from './utils/readFile';

type status = 'default' | 'uploading' | 'success' | 'error';

function AvatarUpload() {
	const [status, setStatus] = useState<status>('default');
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [image, setImage] = useState<string | null>(null);
	const [zoom, setZoom] = useState(1);
	const [croppedImage, setCroppedImage] = useState<any>(null);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(image, croppedAreaPixels);

			setCroppedImage(croppedImage);
			setStatus('success');
		} catch (e) {
			setStatus('error');
		}
	}, [image, croppedAreaPixels, croppedImage]);

	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		setStatus('uploading');
		const file = acceptedFiles[0];
		let imageDataUrl = await readFile(file);

		if (typeof imageDataUrl === 'string') {
			setImage(imageDataUrl);
		}
	}, []);

	const onCropComplete = useCallback(
		(croppedArea: Area, croppedAreaPixels: Area) => {
			setCroppedAreaPixels(croppedAreaPixels);
		},
		[]
	);

	function resetState() {
		setStatus('default');
		setImage(null);
		setCroppedImage(null);
		setCroppedAreaPixels(null);
	}

	return (
		<DragbleZone onDrop={onDrop} setStatus={setStatus} status={status}>
			<Container status={status}>
				{status === 'error' ? (
					<ErrorAvatarUpload resetState={resetState} />
				) : status === 'uploading' ? (
					<CroppingAvatarUpload
						resetState={resetState}
						crop={crop}
						image={image}
						onCropComplete={onCropComplete}
						setCrop={setCrop}
						setZoom={setZoom}
						zoom={zoom}
						setStatus={setStatus}
						showCroppedImage={showCroppedImage}
					/>
				) : (
					<DefaultAvatarUpload image={croppedImage} />
				)}
			</Container>
		</DragbleZone>
	);
}

export default AvatarUpload;
