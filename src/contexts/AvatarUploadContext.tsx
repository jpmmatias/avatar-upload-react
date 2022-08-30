import { ReactNode, createContext, useState, useCallback } from 'react';

import { Area, Point } from 'react-easy-crop/types';
import { getCroppedImg } from '../utils/canvaUtils';
import { readFile } from '../utils/readFile';

type status = 'default' | 'uploading' | 'success' | 'error';

export interface AvatarUploadContextState {
	status: status;
	setStatus: React.Dispatch<React.SetStateAction<status>>;
	crop: Point;
	setCrop: React.Dispatch<React.SetStateAction<Point>>;
	image: string | null;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	zoom: number;
	setZoom: React.Dispatch<React.SetStateAction<number>>;
	croppedImage: string | null;
	setCroppedImage: React.Dispatch<React.SetStateAction<string | null>>;
	croppedAreaPixels: Area | null;
	setCroppedAreaPixels: React.Dispatch<React.SetStateAction<Area | null>>;
	onDrop: (acceptedFiles: File[]) => Promise<void>;
	showCroppedImage: () => Promise<void>;
	onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
	resetState: () => void;
}

interface AvatarUploadProviderProps {
	children: ReactNode;
}

export const AvatarUploadContext = createContext<AvatarUploadContextState>(
	{} as AvatarUploadContextState
);

export function AvatarUploadProvider({ children }: AvatarUploadProviderProps) {
	const [status, setStatus] = useState<status>('default');
	const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
	const [image, setImage] = useState<string | null>(null);
	const [zoom, setZoom] = useState(1);
	const [croppedImage, setCroppedImage] = useState<string | null>(null);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(image, croppedAreaPixels);

			setCroppedImage(croppedImage);
			setStatus('success');
		} catch (e) {
			setStatus('error');
		}
	}, [image, croppedAreaPixels, croppedImage]);

	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		setStatus('uploading');
		const file = acceptedFiles[0];
		let imageDataUrl = await readFile(file);

		if (typeof imageDataUrl === 'string') {
			setImage(imageDataUrl);
		}
	}, []);

	const onCropComplete = useCallback(
		(croppedArea: Area, croppedAreaPixels: Area) => {
			setCroppedAreaPixels(croppedAreaPixels);
		},
		[]
	);

	function resetState() {
		setStatus('default');
		setImage(null);
		setCroppedImage(null);
		setCroppedAreaPixels(null);
	}

	return (
		<AvatarUploadContext.Provider
			value={{
				crop,
				croppedAreaPixels,
				croppedImage,
				image,
				onCropComplete,
				onDrop,
				resetState,
				setCrop,
				setCroppedAreaPixels,
				setCroppedImage,
				setImage,
				setStatus,
				setZoom,
				showCroppedImage,
				status,
				zoom,
			}}>
			{children}
		</AvatarUploadContext.Provider>
	);
}
