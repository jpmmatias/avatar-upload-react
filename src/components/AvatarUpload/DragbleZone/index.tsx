import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

type Props = {
	children: React.ReactNode;
	onDrop:
		| (<T extends File>(
				acceptedFiles: T[],
				fileRejections: FileRejection[],
				event: DropEvent
		  ) => void)
		| undefined;
	setStatus: React.Dispatch<
		React.SetStateAction<'default' | 'uploading' | 'success' | 'error'>
	>;
	status: 'default' | 'uploading' | 'success' | 'error';
};

function DragbleZone({ children, onDrop, setStatus, status }: Props) {
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
