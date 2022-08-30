import styled from '@emotion/styled';

interface ContainerProps {
	status: 'default' | 'uploading' | 'success' | 'error';
}

export const Container = styled.div<ContainerProps>`
	background-color: #f2f5f8;
	width: 34.5625rem;
	height: 11.0625rem;
	padding: 1.5625rem;
	margin: 5px;
	border: ${(props) =>
		props.status === 'default' || props.status === 'success'
			? '2px dashed #c7cdd3;'
			: '2px solid #c7cdd3;'};
	border-radius: 8px;

	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		color: #495567;
	}

	p {
		color: #677489;
	}
`;
