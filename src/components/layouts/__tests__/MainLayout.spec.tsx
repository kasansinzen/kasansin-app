import '@testing-library/jest-dom';

import { ProfileContactContext, ProfileContactProps } from '@/providers/ProfileContactProvider';
import { render } from '@testing-library/react';
import React from 'react';
import MainLayoutPage from '../MainLayouts';

jest.mock('@/hooks/useLogEventDevice');

const mockContact: Pick<ProfileContactProps, 'contacts'>['contacts'] = [
	{ channel: '#1 mock chanel', icon: 'fa-brands fa-square-github', link: '#1 mock-link' },
	{ channel: '#2 mock chanel', icon: 'fa-brands fa-square-github', link: '#2 mock-link' },
];

const setup = (additionalProps: { profileContact?: ProfileContactProps } = {}) => {
	const profileContactProps: ProfileContactProps = {
		profile: undefined,
		setProfile: jest.fn(),
		contacts: mockContact,
		setContacts: jest.fn(),
		...additionalProps.profileContact,
	};

	return render(
		<ProfileContactContext.Provider value={profileContactProps}>
			<MainLayoutPage>
				<div>Hello World</div>
			</MainLayoutPage>
		</ProfileContactContext.Provider>,
	);
};

describe('[components][layouts] MainLayout', () => {
	it('should render main layout', () => {
		const screen = setup();

		screen.getByText('KASANSIN KHAMSAT');
		screen.getByText('© 2024 Kasansin Khamsat.');
		expect(screen.getAllByTestId('contact-link').length).toBe(mockContact.length);
	});
});
