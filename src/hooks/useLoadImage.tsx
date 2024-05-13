import { StorageFirebaseService, profileImgPath } from '@/utils/services/firebase/storage.firebase';
import { useMemo } from 'react';

const useLoadImage = () => {
	const imagePath = useMemo(async () => {
		const storage = new StorageFirebaseService();
		return await storage.downloadImage(profileImgPath);
	}, []);

	return imagePath;
};

export default useLoadImage;
