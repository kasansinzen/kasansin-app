import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { StorageFirebaseService, profileImgPath } from '../storage.firebase';

jest.mock('../core.firebase.ts');
jest.mock('../analytic.firebase.ts', () => ({
	AnalyticFirebaseService: jest.fn().mockImplementation(() => ({
		logEvent: jest.fn(),
	})),
}));

const mockStorage = { app: undefined };
const mockRootRef = { fullPath: 'mock-full-path' };
jest.mock('firebase/storage', () => {
	const originalModule = jest.requireActual('firebase/storage');
	return {
		...originalModule,
		getStorage: jest.fn(() => mockStorage),
		ref: jest.fn(() => mockRootRef),
		getDownloadURL: jest.fn().mockResolvedValue('mockDownloadUrl'),
	};
});

describe('utils][services] StorageFirebaseService', () => {
	let service: StorageFirebaseService;

	beforeEach(() => {
		service = new StorageFirebaseService();
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should initialize getStorage', () => {
		expect(getStorage).toHaveBeenCalled();
	});

	it('should downloadImage', async () => {
		const result = await service.downloadImage(profileImgPath);

		expect(ref).toHaveBeenCalledWith(mockStorage, profileImgPath);
		expect(getDownloadURL).toHaveBeenCalledWith(mockRootRef);
		expect(result).toEqual('mockDownloadUrl');
	});
});
