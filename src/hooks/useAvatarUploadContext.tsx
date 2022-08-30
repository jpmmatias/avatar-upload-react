import { useContext } from 'react';
import { AvatarUploadContext } from '../contexts/AvatarUploadContext';

export function useAvatarUploadContext() {
	return useContext(AvatarUploadContext);
}
