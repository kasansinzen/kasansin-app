import { DatabasePath } from '@/@types/firebaseType';
import { getDatabase, ref, get, Database } from 'firebase/database';
import { CoreFirebaseService } from './core.firebase';
import { AnalyticFirebaseService } from './analytic.firebase';

export const prefixClass = '[DatabaseFirebaseService]';
export const prefixGetResult = `${prefixClass}[getResult]`;

export class DatabaseFirebaseService extends CoreFirebaseService {
	private _database!: Database;
	private analyticService!: AnalyticFirebaseService;

	constructor() {
		super();
		this._database = getDatabase(this.app);
		this.analyticService = new AnalyticFirebaseService();
	}

	get rootRef() {
		return ref(this._database);
	}

	async getResult<T>(path: DatabasePath): Promise<T> {
		const snapshot = await get(this.rootRef).catch((e) => {
			this.analyticService.logEvent(`${prefixGetResult} error`, e);
			return null;
		});
		if (!snapshot) throw new Error();

		return snapshot.child(path).val();
	}
}
