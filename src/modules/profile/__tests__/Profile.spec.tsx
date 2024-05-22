import '@testing-library/jest-dom';

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Profile from '../Profile';
import { ProfileContactContext, ProfileContactProps } from '@/providers/ProfileContactProvider';
import useLoadDatabase from '@/hooks/useLoadDatabase';
import { StorageFirebaseService } from '@/utils/services/firebase/storage.firebase';

jest.mock('@/hooks/useLoadDatabase');
jest.mock('@/utils/services/firebase/storage.firebase');

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
			<Profile />
		</ProfileContactContext.Provider>,
	);
};

describe('[component] Profile', () => {
	const mockUseLoadDatabase = jest.mocked(useLoadDatabase);
	let mockStorageFirebaseService: jest.SpyInstance;
	const mockImageUrl = 'http://example.com/profile.jpg';
	const mockProfile = {
		fullname: 'Mock Fullname',
		career: 'Mock Career',
		about: {
			descriptions: [],
		},
		experiences: [],
	};

	beforeEach(() => {
		mockStorageFirebaseService = jest
			.spyOn(StorageFirebaseService.prototype, 'downloadImage')
			.mockResolvedValue(mockImageUrl);
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should renders profile with profile image, name, and career', async () => {
		mockUseLoadDatabase.mockReturnValue({ isLoading: false });
		const screen = setup({
			profileContact: {
				profile: mockProfile,
				setProfile: jest.fn(),
				contacts: [],
				setContacts: jest.fn(),
			},
		});

		expect(screen.getByTestId('loading-overlay')).toBeInTheDocument();

		await waitFor(() => {
			expect(mockUseLoadDatabase).toHaveBeenCalled();
			expect(mockStorageFirebaseService).toHaveBeenCalled();
		});

		expect(screen.getByAltText('Kasansin')).toHaveAttribute(
			'src',
			expect.stringContaining(encodeURIComponent(mockImageUrl)),
		);
		expect(screen.getByText(`I'M ${mockProfile.fullname}`)).toBeInTheDocument();
	});

	it('should renders sections with alternating background color', async () => {
		mockUseLoadDatabase.mockReturnValue({ isLoading: false });
		const screen = setup();

		await waitFor(() => {
			expect(mockUseLoadDatabase).toHaveBeenCalled();
			expect(mockStorageFirebaseService).toHaveBeenCalled();
		});

		const sections = screen.getAllByTestId('section');

		expect(sections.length).toBe(2);
		expect(sections[0]).toHaveClass('bg-dark-3');
		expect(sections[1]).toHaveClass('bg-dark-4');
	});

	it('should render loading when data is loading', () => {
		mockUseLoadDatabase.mockReturnValue({ isLoading: false });
		const screen = setup();

		waitFor(() => {
			expect(screen.getByTestId('loading-overlay')).toBeInTheDocument();
		});
	});
});
