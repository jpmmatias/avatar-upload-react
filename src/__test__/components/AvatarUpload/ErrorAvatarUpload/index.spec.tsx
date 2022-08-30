import { expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import ErrorAvatarUpload from '../../../../components/AvatarUpload/ErrorAvatarUpload';

describe('ErrorAvatarUpload', () => {
	it('should render ErrorAvatarUpload ', () => {
		const resetState = vi.fn();
		const { queryByText } = render(
			<ErrorAvatarUpload resetState={resetState} />
		);

		expect(queryByText('Sorry, the upload failed.')).toBeInTheDocument();
		expect(queryByText('Try again')).toBeInTheDocument();
	});

	it('should  return to default state', () => {
		const resetState = vi.fn();

		const { getByAltText } = render(
			<ErrorAvatarUpload resetState={resetState} />
		);

		const button = getByAltText('Close Icon');

		fireEvent.click(button);

		expect(resetState).toHaveBeenCalled();
	});
});
