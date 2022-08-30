import attentionIcon from '../../../assets/attention.svg';
import { useAvatarUploadContext } from '../../../hooks/useAvatarUploadContext';
import Circle from '../../Circle';
import CloseButton from '../../CloseButton';
import { Container } from './style';

function ErrorAvatarUpload() {
	const { resetState } = useAvatarUploadContext();
	return (
		<Container>
			<Circle>
				<img src={attentionIcon} alt='Warning Icon' />
			</Circle>
			<div>
				<h1>Sorry, the upload failed.</h1>
				<button className='tryAgain'>Try again</button>
			</div>
			<CloseButton onClick={resetState} />
		</Container>
	);
}

export default ErrorAvatarUpload;
