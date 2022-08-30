import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { useEffect } from 'react';
import { useAvatarUploadContext } from '../../../hooks/useAvatarUploadContext';

type Props = {
	children: React.ReactNode;
};

function DragbleZone({ children }: Props) {
	const { onDrop, status, setStatus } = useAvatarUploadContext();

	const { getRootProps, getInputProps, isDragReject } = useDropzone({
		onDrop,
		disabled: status === 'uploading' || status === 'error',
		accept: {
			'image/png': ['.png'],
			'image/jpeg': ['.jpg', '.jpeg'],
		},
		multiple: false,
	});

	useEffect(() => {
		isDragReject && setStatus('error');
	}, [isDragReject]);

	return (
		<div {...getRootProps()}>
			<input data-testid='avatar-upload-input' {...getInputProps()} />
			{children}
		</div>
	);
}

export default DragbleZone;
