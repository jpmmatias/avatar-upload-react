import { Container } from './style';

type Props = {
	children: React.ReactNode;
};

function Circle({ children }: Props) {
	return <Container>{children}</Container>;
}

export default Circle;
