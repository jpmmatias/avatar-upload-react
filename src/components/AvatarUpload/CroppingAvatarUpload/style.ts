import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	width: 100%;
	height: 100%;
	position: relative;

	button.close {
		position: absolute;
		transform: translate(-50%, 50%);
		top: 0;
		right: 0;
	}

	div.cropping-settings {
		display: flex;
		flex-direction: column;
		width: 50%;
		padding-top: 2rem;
		div.slidder {
			h1 {
				margin-bottom: 1rem;
				font-weight: 400;
				color: #677489;
				letter-spacing: -0.02em;
			}
			input[type='range'] {
				width: 100%;
			}

			margin-bottom: 1rem;
		}
		button.save {
			color: #fff;
			background-color: #3d485f;
			border-radius: 16px;
			padding: 0.5rem 2rem;
			max-width: 6rem;
			align-self: flex-end;
		}
	}
`;
