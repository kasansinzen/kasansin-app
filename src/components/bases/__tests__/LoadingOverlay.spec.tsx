import { render } from '@testing-library/react';
import React from 'react';
import LoadingOverlay, { LoadingOverlayProps } from '../LoadingOverlay';

const setup = (props: LoadingOverlayProps) => {
	return render(<LoadingOverlay {...props} />);
};

describe('[component][base] LoadingOverlay', () => {
	it('should render loading when isLoading true', () => {
		const screen = setup({ isLoading: true });

		screen.getByText('Loading...');
	});

	it('should not render loading when isLoading false', () => {
		const screen = setup({ isLoading: false });

		expect(screen.queryByText('Loading...')).toBeNull();
	});
});
