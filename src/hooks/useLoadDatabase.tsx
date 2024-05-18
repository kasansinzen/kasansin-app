import { ProfileDatabase, DatabasePath, ContactDatabase } from '@/@types/firebaseType';
import { useProfileContact } from '@/providers/ProfileContactProvider';
import { DatabaseFirebaseService } from '@/utils/services/firebase/database.firebase';
import { useEffect, useState } from 'react';

const useLoadDatabase = () => {
	const { setProfile, setContacts } = useProfileContact();
	const [isDirty, setIsDirty] = useState<boolean>(false);

	useEffect(() => {
		const database = new DatabaseFirebaseService();
		Promise.all([
			database.getResult<ProfileDatabase>(DatabasePath.Profile),
			database.getResult<ContactDatabase[]>(DatabasePath.Contacts),
		]).then(([profile, contacts]) => {
			setProfile(profile);
			setContacts(contacts);
			setIsDirty(true);
		});
	}, [setContacts, setProfile]);

	return isDirty;
};

export default useLoadDatabase;
