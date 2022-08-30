import styled from '@emotion/styled';

interface ContainerProps {
	uploaded?: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	gap: 2rem;
	width: 100%;
	justify-content: ${(props) => (props.uploaded ? 'center' : 'flex-start')};
	align-items: center;

	div.messageContainer {
		display: flex;
		flex: ${(props) => (props.uploaded ? 'auto' : '1')};
		flex-direction: column;
		gap: 0.75rem;
		justify-content: center;
		align-items: center;

		margin-bottom: 0.5rem;
		color: #495567;
		div {
			display: flex;
			gap: 1rem;
		}
		p {
			color: #677489;
		}
	}
`;
