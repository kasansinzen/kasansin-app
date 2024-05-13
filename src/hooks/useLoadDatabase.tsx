import { ProfileDatabase, DatabasePath, ContactDatabase } from '@/@types/firebaseType';
import { useLoading } from '@/providers/LoadingProvider';
import { useProfileContact } from '@/providers/ProfileContactProvider';
import { DatabaseFirebaseService } from '@/utils/services/firebase/database.firebase';
import { useEffect } from 'react';

const useLoadDatabase = () => {
	const { setProfile, setContacts } = useProfileContact();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		const database = new DatabaseFirebaseService();

		Promise.all([
			database.getResult<ProfileDatabase>(DatabasePath.Profile),
			database.getResult<ContactDatabase[]>(DatabasePath.Contacts),
		]).then(([profile, contacts]) => {
			setProfile(profile);
			setContacts(contacts);
			setIsLoading(false);
		});
	}, []);
};

export default useLoadDatabase;
