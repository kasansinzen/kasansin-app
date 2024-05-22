import '@testing-library/jest-dom';

import { ProfileContactContext, ProfileContactProps } from '@/providers/ProfileContactProvider';
import React from 'react';
import { render } from '@testing-library/react';
import About from '../About';

const setup = (additionalProps: { profileContact?: ProfileContactProps } = {}) => {
	const profileContactProps: ProfileContactProps = {
		profile: undefined,
		setProfile: jest.fn(),
		contacts: [],
		setContacts: jest.fn(),
		...additionalProps.profileContact,
	};

	return render(
		<ProfileContactContext.Provider value={profileContactProps}>
			<About />
		</ProfileContactContext.Provider>,
	);
};

describe('[component] About', () => {
	const mockProfile: Pick<ProfileContactProps, 'profile'>['profile'] = {
		about: {
			descriptions: ['#1 mock profile about on description', '#2 mock profile about on description'],
		},
		fullname: '',
		career: '',
		experiences: [],
	};

	it('should render with title, description', async () => {
		const screen = setup({
			profileContact: {
				profile: mockProfile,
				setProfile: jest.fn(),
				contacts: [],
				setContacts: jest.fn(),
			},
		});

		screen.getByText('About');
		expect(screen.getAllByTestId('about-desc').length).toBe(2);
	});

	it('should render with correct role', () => {
		const screen = setup({
			profileContact: {
				profile: mockProfile,
				setProfile: jest.fn(),
				contacts: [],
				setContacts: jest.fn(),
			},
		});

		expect(screen.getAllByText(mockProfile.about.descriptions[0])[0]).toHaveRole('paragraph');
	});
});
