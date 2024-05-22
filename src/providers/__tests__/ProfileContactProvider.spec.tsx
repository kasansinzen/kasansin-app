import { render } from '@testing-library/react';
import React, { FC } from 'react';
import { ProfileContactProvider, useProfileContact } from '../ProfileContactProvider';

describe('[providers] ProfileContactProvider', () => {
	it('should render children', () => {
		const mockChildren = <div>Hello World</div>;
		const { getByText } = render(<ProfileContactProvider>{mockChildren}</ProfileContactProvider>);
		getByText('Hello World');
	});

	it('should throw when useContext outside', () => {
		const MockComponent: FC = () => {
			const { profile } = useProfileContact();
			return <>{profile?.fullname}</>;
		};
		jest.spyOn(console, 'error').mockImplementation(() => {});

		expect(() => render(<MockComponent />)).toThrow('Context must use in a Provider');
	});
});
