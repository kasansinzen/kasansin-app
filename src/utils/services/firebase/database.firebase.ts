import { DatabasePath } from '@/@types/firebaseType';
import { getDatabase, ref, get, Database } from 'firebase/database';
import { CoreFirebaseService } from './core.firebase';

export class DatabaseFirebaseService extends CoreFirebaseService {
	private _database!: Database;

	constructor() {
		super();
		this._database = getDatabase(this.app);
	}

	async getProfileDb() {
		const rootRef = ref(this._database);
		const snapshot = await get(rootRef);

		return snapshot.child(DatabasePath.Profile).val();
	}
}
