import { css } from '@emotion/css';
import AvatarUpload from './components/AvatarUpload';

function App() {
	return (
		<div
			className={css`
				height: 90vh;
				display: flex;
				justify-content: center;
				align-items: center;
			`}>
			<AvatarUpload />
		</div>
	);
}

export default App;
