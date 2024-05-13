'use client';

import React, { Dispatch, SetStateAction, useContext, createContext, FC, PropsWithChildren, useState } from 'react';
import { ContactDatabase, ProfileDatabase } from '@/@types/firebaseType';

interface ProfileContactProps {
	profile: ProfileDatabase | undefined;
	setProfile: Dispatch<SetStateAction<ProfileDatabase | undefined>>;
	contacts: ContactDatabase[];
	setContacts: Dispatch<SetStateAction<ContactDatabase[]>>;
}
const ProfileContactContext = createContext<ProfileContactProps | undefined>(undefined);

export const useProfileContact = () => {
	const context = useContext(ProfileContactContext);
	if (!context) throw new Error('Context must use in a Provider');

	return context;
};

export const ProfileContactProvider: FC<PropsWithChildren> = ({ children }) => {
	const [profile, setProfile] = useState<ProfileDatabase | undefined>(undefined);
	const [contacts, setContacts] = useState<ContactDatabase[]>([]);

	const value: ProfileContactProps = { profile, setProfile, contacts, setContacts };
	return <ProfileContactContext.Provider value={value}>{children}</ProfileContactContext.Provider>;
};
