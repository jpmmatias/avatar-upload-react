import Cropper from './Cropper';
import Slider from './Slider';
import { Container } from './style';
import CloseButton from '../../CloseButton';
import { useAvatarUploadContext } from '../../../hooks/useAvatarUploadContext';

function CroppingAvatarUpload() {
	const {
		crop,
		setCrop,
		setZoom,
		onCropComplete,
		image,
		zoom,
		resetState,
		showCroppedImage,
	} = useAvatarUploadContext();

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
