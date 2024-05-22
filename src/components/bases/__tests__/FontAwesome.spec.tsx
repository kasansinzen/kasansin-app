import { render } from '@testing-library/react';
import React from 'react';
import FontAwesome from '../FontAwesome';

describe('[components][bases] FontAweSome', () => {
	it('should render icon', async () => {
		const spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

		render(<FontAwesome icon={'fa-brands fa-square-github'} />);

		spyConsoleError.mock.calls.forEach((call) => {
			expect(call[0]).not.toContain('Could not find icon');
		});
	});
});
