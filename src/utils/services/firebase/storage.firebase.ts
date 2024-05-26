import { AnalyticFirebaseService } from './analytic.firebase';
import { CoreFirebaseService } from './core.firebase';
import { getStorage, ref, FirebaseStorage, getDownloadURL } from 'firebase/storage';

export const prefixClass = '[StorageFirebaseService]';
export const prefixDownloadImage = `${prefixClass}[downloadImage]`;
export const profileImgPath = 'public/img/profile.jpg';

export class StorageFirebaseService extends CoreFirebaseService {
	private _storage!: FirebaseStorage;
	private analyticService!: AnalyticFirebaseService;

	constructor() {
		super();
		this._storage = getStorage();
		this.analyticService = new AnalyticFirebaseService();
	}

	async downloadImage(path: string): Promise<string> {
		const pathRefference = ref(this._storage, path);
		const url = await getDownloadURL(pathRefference).catch((e) => {
			this.analyticService.logEvent(`${prefixDownloadImage} error`, e);

			return '';
		});

		return url;
	}
}
