import { expect, it, vi } from 'vitest';
import { fireEvent, getByText, render, waitFor } from '@testing-library/react';
import AvatarUpload from '../../../components/AvatarUpload/index';

describe('AvatarUpload', () => {
	it('should render AvatarUpload', () => {
		const { queryByText } = render(<AvatarUpload />);

		expect(queryByText('Organization Logo')).toBeInTheDocument();
		expect(
			queryByText('Drop the image here or click to browse.')
		).toBeInTheDocument();
	});

	it('should drop image', async () => {
		const { getByTestId, queryByText } = render(<AvatarUpload />);

		const file = new File(['(⌐□_□)'], 'chucknorris.png', {
			type: 'image/png',
		});

		const input = getByTestId('avatar-upload-input');

		await waitFor(() => fireEvent.change(input, { target: { files: [file] } }));

		window.URL.createObjectURL = vi.fn().mockImplementation(() => 'url');

		Object.defineProperty(input, 'files', {
			value: [file],
		});

		fireEvent.drop(input);

		expect(queryByText('Crop')).toBeInTheDocument();
	});

	it('should accpet jpeg and png', () => {
		const { getByTestId } = render(<AvatarUpload />);

		const input = getByTestId('avatar-upload-input');

		expect(input).toHaveAttribute(
			'accept',
			'image/png,.png,image/jpeg,.jpg,.jpeg'
		);
	});

	it('should accpet just one file', () => {
		const { getByTestId } = render(<AvatarUpload />);

		const input = getByTestId('avatar-upload-input');

		expect(input['multiple']).eq(false);
	});
});
