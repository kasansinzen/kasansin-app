import { ProfileContactContext, ProfileContactProps } from '@/providers/ProfileContactProvider';
import React from 'react';
import useLogEventDevice from '../useLogEventDevice';
import { AnalyticFirebaseService } from '@/utils/services/firebase/analytic.firebase';
import { renderHook, waitFor } from '@testing-library/react';
import getDevice from '@/utils/helpers/detectDevice';

jest.mock('@/utils/services/firebase/analytic.firebase');

const setup = (additionalProps: { profileContact?: ProfileContactProps } = {}) => {
	const profileContactProps: ProfileContactProps = {
		profile: undefined,
		setProfile: jest.fn(),
		contacts: [],
		setContacts: jest.fn(),
		...additionalProps.profileContact,
	};

	return renderHook(() => useLogEventDevice(), {
		wrapper: ({ children }) => (
			<ProfileContactContext.Provider value={profileContactProps}>{children}</ProfileContactContext.Provider>
		),
	});
};

describe('[hooks] useLogEventDevice', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return isReady true', async () => {
		const mockLogEvent = jest.spyOn(AnalyticFirebaseService.prototype, 'logEvent');

		setup();

		await waitFor(() => {
			expect(mockLogEvent).toHaveBeenCalledTimes(1);
			expect(mockLogEvent).toHaveBeenCalledWith('[device-used]', { device: getDevice() });
		});
	});
});
