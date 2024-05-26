import { ProfileContactContext, ProfileContactProps } from '@/providers/ProfileContactProvider';
import React from 'react';
import useLoadDatabase from '../useLoadDatabase';
import { DatabaseFirebaseService } from '@/utils/services/firebase/database.firebase';
import { renderHook, waitFor } from '@testing-library/react';

jest.mock('@/utils/services/firebase/database.firebase');

const setup = (additionalProps: { profileContact?: ProfileContactProps } = {}) => {
	const profileContactProps: ProfileContactProps = {
		profile: undefined,
		setProfile: jest.fn(),
		contacts: [],
		setContacts: jest.fn(),
		...additionalProps.profileContact,
	};

	return renderHook(() => useLoadDatabase(), {
		wrapper: ({ children }) => (
			<ProfileContactContext.Provider value={profileContactProps}>{children}</ProfileContactContext.Provider>
		),
	});
};

describe('[hooks] useLoadDatabase', () => {
	const mockSetProfile = jest.fn();
	const mockSetContacts = jest.fn();
	const mockProifle: Pick<ProfileContactProps, 'profile'>['profile'] = {
		fullname: 'mock fullname',
		career: 'mock career',
		about: { descriptions: [] },
		experiences: [],
	};
	const mockContacts: Pick<ProfileContactProps, 'contacts'>['contacts'] = [
		{ channel: 'mock-chanel#1', icon: 'mock-icon#1', link: 'mock link#1' },
		{ channel: 'mock-chanel#2', icon: 'mock-icon#2', link: 'mock link#2' },
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return isReady true', async () => {
		const mockGetResult = jest
			.spyOn(DatabaseFirebaseService.prototype, 'getResult')
			.mockResolvedValueOnce(mockProifle)
			.mockResolvedValueOnce(mockContacts);

		const { result } = setup({
			profileContact: {
				profile: undefined,
				setProfile: mockSetProfile,
				contacts: [],
				setContacts: mockSetContacts,
			},
		});

		await waitFor(() => {
			expect(mockGetResult).toHaveBeenCalledTimes(2);
			expect(mockSetProfile).toHaveBeenCalledWith(mockProifle);
			expect(mockSetContacts).toHaveBeenCalledWith(mockContacts);
			expect(result.current.isLoading).toBeFalsy();
		});
	});
});
