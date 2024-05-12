import { CoreFirebaseService } from './core.firebase';
import { getStorage, ref, FirebaseStorage, getDownloadURL } from 'firebase/storage';

export const profileImgPath = 'public/img/profile.jpg';

export class StorageFirebaseService extends CoreFirebaseService {
	private _storage!: FirebaseStorage;

	constructor() {
		super();
		this._storage = getStorage();
	}

	async downloadImage(path: string) {
		const pathRefference = ref(this._storage, path);
		const url = await getDownloadURL(pathRefference).catch((e) => {
			console.error(e);
			return '';
		});

		return url;
	}
}
