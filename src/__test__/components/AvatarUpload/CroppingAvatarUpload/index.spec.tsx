import { expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import CroppingAvatarUpload from '../../../../components/AvatarUpload/CroppingAvatarUpload';
import {
	AvatarUploadProvider,
	AvatarUploadContext,
	AvatarUploadContextState,
} from '../../../../contexts/AvatarUploadContext';

describe('CroppingAvatarUpload', () => {
	it('should render CroppingAvatarUpload', () => {
		const { queryByText } = render(
			<AvatarUploadProvider>
				<CroppingAvatarUpload />
			</AvatarUploadProvider>
		);

		const imgTest = document.querySelector('img') as HTMLImageElement;

		expect(queryByText('Crop')).toBeInTheDocument();
		expect(queryByText('Save')).toBeInTheDocument();
	});

	it('should save image', () => {
		const contextCallback = vi.fn();
		const { getByText } = render(
			<AvatarUploadProvider>
				<CroppingAvatarUpload />
				<AvatarUploadContext.Consumer>
					{contextCallback}
				</AvatarUploadContext.Consumer>
			</AvatarUploadProvider>
		);

		const button = getByText('Save');
		fireEvent.click(button);

		contextCallback(
			({
				showCroppedImage,
			}: {
				showCroppedImage: AvatarUploadContextState['showCroppedImage'];
			}) => {
				expect(showCroppedImage).toHaveBeenCalled();
			}
		);
	});

	it('should change cropped', () => {
		let crop = { x: 0, y: 0 };

		const { getByTestId } = render(
			<AvatarUploadProvider>
				<CroppingAvatarUpload />
			</AvatarUploadProvider>
		);
		const input = getByTestId('slider');

		fireEvent.change(input, { target: { value: 2 } });
		expect(crop).not.toBe({ x: 0, y: 0 });
	});

	it('should cancel crop and return to default state', () => {
		const contextCallback = vi.fn();

		const { getByAltText } = render(
			<AvatarUploadProvider>
				<CroppingAvatarUpload />
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
