import { DatabasePath } from '@/@types/firebaseType';
import { getDatabase, ref, get, Database } from 'firebase/database';
import { CoreFirebaseService } from './core.firebase';

export class DatabaseFirebaseService extends CoreFirebaseService {
	private _database!: Database;

	constructor() {
		super();
		this._database = getDatabase(this.app);
	}

	get rootRef() {
		return ref(this._database);
	}

	async getResult<T>(path: DatabasePath): Promise<T> {
		const snapshot = await get(this.rootRef);
		return snapshot.child(path).val();
	}
}
