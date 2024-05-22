import { render } from '@testing-library/react';
import React from 'react';
import TitleSection from '../TitleSection';

describe('[component][base] TitleSection', () => {
	it('should render title section', () => {
		const mockTitle = 'mock title';
		const screen = render(<TitleSection title={mockTitle} />);
		screen.getByText(mockTitle);
	});
});
