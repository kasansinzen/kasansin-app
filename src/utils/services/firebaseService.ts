import { DatabasePath } from '@/@types/firebaseType';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, ref, get, Database } from 'firebase/database';

export class FirebaseService {
	private _app!: FirebaseApp;
	private _database!: Database;

	constructor() {
		const firebaseConfig = {
			apiKey: process.env.NEXT_PUBLIC_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
			databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
			projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
			messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_APP_ID,
			measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
		};
		this._app = initializeApp(firebaseConfig);
	}

	async getProfileDb() {
		this._connectDatabase();
		const rootRef = ref(this._database);
		const snapshot = await get(rootRef);

		return snapshot.child(DatabasePath.Profile).val();
	}

	private _connectDatabase() {
		if (this._database) return;

		this._database = getDatabase(this._app);
	}
}
