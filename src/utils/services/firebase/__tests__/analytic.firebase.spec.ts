import { getAnalytics, logEvent } from 'firebase/analytics';
import { AnalyticFirebaseService } from '../analytic.firebase';

jest.mock('../core.firebase');
jest.mock('firebase/analytics', () => ({
	getAnalytics: jest.fn(() => ({})),
	logEvent: jest.fn(),
}));

describe('[utils][services] AnalyticFirebaseService', () => {
	let service: AnalyticFirebaseService;

	beforeEach(() => {
		service = new AnalyticFirebaseService();
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should initialize getAnalytics', async () => {
		expect(getAnalytics).toHaveBeenCalled();
	});

	it('should called logEvent', () => {
		const mockEventName = 'mock log event';
		service.logEvent(mockEventName);

		expect(logEvent).toHaveBeenCalledWith({}, mockEventName, undefined);
	});
});
