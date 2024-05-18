import { Analytics, getAnalytics, logEvent, EventParams } from 'firebase/analytics';
import { CoreFirebaseService } from './core.firebase';

export class AnalyticFirebaseService extends CoreFirebaseService {
	private _analytic!: Analytics;

	constructor() {
		super();
		this._analytic = getAnalytics(this.app);
	}

	logEvent(evenName: string, params?: EventParams) {
		logEvent(this._analytic, evenName, params);
	}
}
