import attentionIcon from '../../../assets/attention.svg';
import Circle from '../../Circle';
import CloseButton from '../../CloseButton';
import { Container } from './style';

type Props = {
	resetState: () => void;
};

function ErrorAvatarUpload({ resetState }: Props) {
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
