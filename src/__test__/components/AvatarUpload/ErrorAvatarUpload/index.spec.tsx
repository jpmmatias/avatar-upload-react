import { expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import ErrorAvatarUpload from '../../../../components/AvatarUpload/ErrorAvatarUpload';
import { AvatarUploadContextState } from '../../../../contexts/AvatarUploadContext';
import {
	AvatarUploadContext,
	AvatarUploadProvider,
} from '../../../../contexts/AvatarUploadContext';

describe('ErrorAvatarUpload', () => {
	it('should render ErrorAvatarUpload ', () => {
		const { queryByText } = render(
			<AvatarUploadProvider>
				<ErrorAvatarUpload />
			</AvatarUploadProvider>
		);

		expect(queryByText('Sorry, the upload failed.')).toBeInTheDocument();
		expect(queryByText('Try again')).toBeInTheDocument();
	});

	it('should  return to default state', () => {
		const contextCallback = vi.fn();

		const { getByAltText } = render(
			<AvatarUploadProvider>
				<ErrorAvatarUpload />
				<AvatarUploadContext.Consumer>
					{contextCallback}
				</AvatarUploadContext.Consumer>
			</AvatarUploadProvider>
		);

		const button = getByAltText('Close Icon');

		fireEvent.click(button);

		contextCallback(
			({
				resetState,
			}: {
				resetState: AvatarUploadContextState['resetState'];
			}) => {
				expect(resetState).toHaveBeenCalled();
			}
		);
	});
});
