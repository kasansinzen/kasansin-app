import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';
import Container from '../Container';

describe('[components][bases] Container', () => {
	it('should render container', () => {
		const mockChildren = <div>Hello</div>;
		const screen = render(<Container>{mockChildren}</Container>);

		expect(screen.getByTestId('container')).toHaveClass('container');
	});
});
