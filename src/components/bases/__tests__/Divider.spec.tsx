import '@testing-library/jest-dom';

import React from 'react';
import Divider, { DividerProps } from '../Divider';
import { render } from '@testing-library/react';

const setup = (props: DividerProps) => {
	return render(<Divider {...props} />);
};

describe('[components][bases] Divider', () => {
	it('should render divider with show icon', () => {
		const screen = setup({ showIcon: true });
		screen.getByTestId('divider-icon');
	});

	it('should render divider with show icon', () => {
		const mockTitle = 'mock-title';
		const screen = setup({ title: mockTitle });

		screen.getByTestId('divider-title');
		screen.getByText(mockTitle);
	});

	it('should render divider with lineClassName', () => {
		const mockClassName = 'mock-style';
		const screen = setup({ lineClassName: mockClassName });

		screen.getAllByTestId('divider-line').forEach((el) => {
			expect(el).toHaveClass(mockClassName);
		});
	});
});
