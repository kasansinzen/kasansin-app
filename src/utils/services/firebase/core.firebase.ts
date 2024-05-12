import { initializeApp, FirebaseApp } from 'firebase/app';

export class CoreFirebaseService {
	protected static _app: FirebaseApp | null = null;

	constructor() {
		CoreFirebaseService.init();
	}

	protected get app() {
		if (!CoreFirebaseService._app) throw new Error('Firebase app has not been initialized. Call init() first.');

		return CoreFirebaseService._app;
	}

	public static init(): void {
		if (!CoreFirebaseService._app) {
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
			CoreFirebaseService._app = initializeApp(firebaseConfig);
		}
	}
}
