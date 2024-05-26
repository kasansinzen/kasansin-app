import { ProfileDatabase, DatabasePath, ContactDatabase } from '@/@types/firebaseType';
import { useProfileContact } from '@/providers/ProfileContactProvider';
import { DatabaseFirebaseService } from '@/utils/services/firebase/database.firebase';
import { useEffect, useState } from 'react';

const useLoadDatabase = () => {
	const { setProfile, setContacts } = useProfileContact();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const database = new DatabaseFirebaseService();
		Promise.all([
			database.getResult<ProfileDatabase>(DatabasePath.Profile),
			database.getResult<ContactDatabase[]>(DatabasePath.Contacts),
		])
			.then(([profile, contacts]) => {
				if (profile) setProfile(profile);
				if (contacts.length) setContacts(contacts);
			})
			.finally(() => setIsLoading(false));
	}, [setContacts, setProfile]);

	return { isLoading };
};

export default useLoadDatabase;
