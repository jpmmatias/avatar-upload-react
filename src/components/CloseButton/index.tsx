import closeIcon from '../../assets/close.svg';
import { Button } from './style';

type Props = {
	onClick: () => void;
};

function CloseButton({ onClick }: Props) {
	return (
		<Button onClick={onClick}>
			<img src={closeIcon} alt='Close Icon' />
		</Button>
	);
}

export default CloseButton;
