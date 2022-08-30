import { css } from '@emotion/css';
import AvatarUpload from './components/AvatarUpload';
import { AvatarUploadProvider } from './contexts/AvatarUploadContext';

function App() {
	return (
		<div className='app-container'>
			<AvatarUploadProvider>
				<AvatarUpload />
			</AvatarUploadProvider>
		</div>
	);
}

export default App;
