'use client';

import React, { Dispatch, SetStateAction, useContext, createContext, FC, PropsWithChildren, useState } from 'react';
import { ProfileDatabase } from '@/@types/firebaseType';

interface ProfileProps {
	profile: ProfileDatabase | undefined;
	setProfile: Dispatch<SetStateAction<ProfileDatabase | undefined>>;
}
const ProfileContext = createContext<ProfileProps | undefined>(undefined);

export const useProfile = () => {
	const context = useContext(ProfileContext);
	if (!context) throw new Error('Context must use in a Provider');

	return context;
};

export const ProfileProvider: FC<PropsWithChildren> = ({ children }) => {
	const [profile, setProfile] = useState<ProfileDatabase | undefined>(undefined);

	const value: ProfileProps = { profile, setProfile };
	return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};
