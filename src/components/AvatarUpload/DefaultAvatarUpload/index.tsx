import { Container } from './style';
import uploadIcon from '../../../assets/upload.svg';
import Circle from '../../Circle';
import { css } from '@emotion/css';
import { useAvatarUploadContext } from '../../../hooks/useAvatarUploadContext';

function DefaultAvatarUpload() {
	const { croppedImage } = useAvatarUploadContext();

	return (
		<Container uploaded={croppedImage ? true : false}>
			{croppedImage && (
				<Circle>
					<img
						className={css`
							object-fit: cover;
							width: 100%;
							height: 100%;
							border-radius: 50%;
							user-select: none;
							-moz-user-select: none;
							-webkit-user-drag: none;
							-webkit-user-select: none;
							-ms-user-select: none;
						`}
						src={croppedImage}
						alt='Logo Image'
					/>
				</Circle>
			)}
			<div className='messageContainer'>
				<div>
					<img src={uploadIcon} alt='Picture Icon' />
					<h1>Organization Logo</h1>
				</div>

				<p>Drop the image here or click to browse.</p>
			</div>
		</Container>
	);
}

export default DefaultAvatarUpload;
