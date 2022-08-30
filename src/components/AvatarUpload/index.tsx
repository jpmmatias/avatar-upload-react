import DefaultAvatarUpload from './DefaultAvatarUpload/index';
import CroppingAvatarUpload from './CroppingAvatarUpload';
import ErrorAvatarUpload from './ErrorAvatarUpload';
import DragbleZone from './DragbleZone';
import { Container } from './style';
import { useAvatarUploadContext } from '../../hooks/useAvatarUploadContext';

function AvatarUpload() {
	const { status } = useAvatarUploadContext();

	return (
		<DragbleZone>
			<Container status={status}>
				{status === 'error' ? (
					<ErrorAvatarUpload />
				) : status === 'uploading' ? (
					<CroppingAvatarUpload />
				) : (
					<DefaultAvatarUpload />
				)}
			</Container>
		</DragbleZone>
	);
}

export default AvatarUpload;
