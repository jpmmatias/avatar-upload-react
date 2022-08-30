import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import DefaultAvatarUpload from '../../../../components/AvatarUpload/DefaultAvatarUpload';

describe('DefaultAvatarUpload', () => {
	it('should render DefaultAvatarUpload ', () => {
		const { queryByText } = render(<DefaultAvatarUpload image={null} />);

		expect(queryByText('Organization Logo')).toBeInTheDocument();
		expect(
			queryByText('Drop the image here or click to browse.')
		).toBeInTheDocument();

		const imgTest = document.querySelector('img') as HTMLImageElement;

		expect(imgTest.src).toContain('src/assets/upload.svg');
	});

	it('should render image when exists', () => {
		let image =
			'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';
		const { queryByText } = render(<DefaultAvatarUpload image={image} />);

		const imgTest = document.querySelector('img') as HTMLImageElement;

		expect(queryByText('Organization Logo')).toBeInTheDocument();
		expect(
			queryByText('Drop the image here or click to browse.')
		).toBeInTheDocument();
		expect(imgTest.src).toContain(image);
	});
});
