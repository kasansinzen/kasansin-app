import '@testing-library/jest-dom';

import { ProfileContactContext, ProfileContactProps } from '@/providers/ProfileContactProvider';
import React from 'react';
import { render } from '@testing-library/react';
import Experience from '../Experience';

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
			<Experience />
		</ProfileContactContext.Provider>,
	);
};

describe('[component] Experience', () => {
	const mockProfile: Pick<ProfileContactProps, 'profile'>['profile'] = {
		fullname: '',
		career: '',
		about: {
			descriptions: [],
		},
		experiences: new Array(2).fill({
			company: 'mock company',
			perios: {
				date_start: '2024-05-19',
				date_stop: '2024-05-19',
			},
			position: 'mock position',
			short_description: 'mock desscription',
		}),
	};

	it('should render with title, eperiences', async () => {
		const screen = setup({
			profileContact: {
				profile: mockProfile,
				setProfile: jest.fn(),
				contacts: [],
				setContacts: jest.fn(),
			},
		});

		screen.getByText('Experience');
		expect(screen.getAllByTestId('exp-list').length).toBe(2);
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

		expect(screen.getAllByText(mockProfile.experiences[0].company)[0]).toHaveRole('heading');
		expect(screen.getAllByText(mockProfile.experiences[0].position)[0]).toHaveRole('heading');
		expect(screen.getAllByText(mockProfile.experiences[0].short_description)[0]).toHaveRole('paragraph');
	});
});
