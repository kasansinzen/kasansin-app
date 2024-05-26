import { getDatabase, ref, get } from 'firebase/database';
import { DatabaseFirebaseService } from '../database.firebase';
import { DatabasePath } from '@/@types/firebaseType';

jest.mock('../core.firebase.ts');
jest.mock('../analytic.firebase.ts', () => ({
	AnalyticFirebaseService: jest.fn().mockImplementation(() => ({
		logEvent: jest.fn(),
	})),
}));

const mockDatabase = { app: undefined, type: undefined };
const mockRootRef = { key: 'mockKeyRootRef' };
jest.mock('firebase/database', () => ({
	getDatabase: jest.fn(() => mockDatabase),
	ref: jest.fn(() => mockRootRef),
	get: jest.fn().mockResolvedValue({
		child: jest.fn(() => ({
			val: jest.fn(),
		})),
	}),
}));

describe('utils][services] DatabaseFirebaseService', () => {
	let service: DatabaseFirebaseService;

	beforeEach(() => {
		service = new DatabaseFirebaseService();
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should initialize getDatabase', () => {
		expect(getDatabase).toHaveBeenCalled();
	});

	it('should get rootRef', () => {
		service.rootRef;
		expect(ref).toHaveBeenCalledWith(mockDatabase);
	});

	it('should getResult', () => {
		const mockPath = DatabasePath.Profile;
		service.getResult(mockPath);

		expect(get).toHaveBeenCalledWith(mockRootRef);
	});
});
