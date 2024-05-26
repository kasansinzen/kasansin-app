import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';
import Section from '../Section';

describe('[component][base] Section', () => {
	it('should wrapped with section', () => {
		const mockChildren = <div>Hello Children</div>;
		const screen = render(<Section>{mockChildren}</Section>);

		screen.getByText('Hello Children');
		expect(screen.getByTestId('section')).toHaveRole('generic');
	});
});
