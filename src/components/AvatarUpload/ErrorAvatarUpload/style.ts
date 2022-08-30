import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	width: 100%;
	height: 100%;
	position: relative;

	h1 {
		font-weight: 400;
		color: #c64d32;
		margin-bottom: 0.5rem;
	}

	button.tryAgain {
		color: #3d485f;
		box-shadow: 0;
		font-size: 1rem;
		font-weight: 500;
		background: none;
		border-bottom: 2px solid #3d485f;
		text-align: center;
	}
`;
