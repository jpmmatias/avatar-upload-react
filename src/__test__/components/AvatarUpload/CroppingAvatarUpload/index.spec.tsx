import { expect, it, vi, beforeEach } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import CroppingAvatarUpload from '../../../../components/AvatarUpload/CroppingAvatarUpload';

describe('CroppingAvatarUpload', () => {
	it('should render CroppingAvatarUpload', () => {
		let crop = { x: 0, y: 0 };
		let zoom = 1;
		let image =
			'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';
		const setCrop = vi.fn();
		const setZoom = vi.fn();
		const setStatus = vi.fn();
		const showCroppedImage = vi.fn();
		const onCropComplete = vi.fn();

		const { queryByText } = render(
			<CroppingAvatarUpload
				crop={crop}
				image={image}
				zoom={zoom}
				onCropComplete={onCropComplete}
				setCrop={setCrop}
				setStatus={setStatus}
				setZoom={setZoom}
				showCroppedImage={showCroppedImage}
			/>
		);

		const imgTest = document.querySelector('img') as HTMLImageElement;

		expect(queryByText('Crop')).toBeInTheDocument();
		expect(queryByText('Save')).toBeInTheDocument();
		expect(imgTest.src).toContain(image);
	});

	it('should save image', () => {
		let crop = { x: 0, y: 0 };
		let zoom = 1;
		let image =
			'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';
		const setCrop = vi.fn();
		const setZoom = vi.fn();
		const setStatus = vi.fn();
		const showCroppedImage = vi.fn();
		const onCropComplete = vi.fn();
		const resetState = vi.fn();

		const { getByText } = render(
			<CroppingAvatarUpload
				crop={crop}
				resetState={resetState}
				image={image}
				zoom={zoom}
				onCropComplete={onCropComplete}
				setCrop={setCrop}
				setStatus={setStatus}
				setZoom={setZoom}
				showCroppedImage={showCroppedImage}
			/>
		);

		const button = getByText('Save');
		fireEvent.click(button);
		expect(showCroppedImage).toHaveBeenCalled();
	});

	it('should change cropped', () => {
		let crop = { x: 0, y: 0 };
		let zoom = 1;
		let image =
			'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';
		const setCrop = vi.fn();
		const setZoom = vi.fn();
		const setStatus = vi.fn();
		const showCroppedImage = vi.fn();
		const onCropComplete = vi.fn();
		const resetState = vi.fn();

		const { getByTestId } = render(
			<CroppingAvatarUpload
				crop={crop}
				image={image}
				resetState={resetState}
				zoom={zoom}
				onCropComplete={onCropComplete}
				setCrop={setCrop}
				setStatus={setStatus}
				setZoom={setZoom}
				showCroppedImage={showCroppedImage}
			/>
		);
		const input = getByTestId('slider');

		fireEvent.change(input, { target: { value: 2 } });
		expect(crop).not.toBe({ x: 0, y: 0 });
	});

	it('should cancel crop and return to default state', () => {
		let crop = { x: 0, y: 0 };
		let zoom = 1;
		let image =
			'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';
		const setCrop = vi.fn();
		const setZoom = vi.fn();
		const setStatus = vi.fn();
		const showCroppedImage = vi.fn();
		const onCropComplete = vi.fn();
		const resetState = vi.fn();

		const { getByAltText } = render(
			<CroppingAvatarUpload
				crop={crop}
				image={image}
				resetState={resetState}
				zoom={zoom}
				onCropComplete={onCropComplete}
				setCrop={setCrop}
				setStatus={setStatus}
				setZoom={setZoom}
				showCroppedImage={showCroppedImage}
			/>
		);
		const button = getByAltText('Close Icon');

		fireEvent.click(button);

		expect(resetState).toHaveBeenCalled();
	});
});
