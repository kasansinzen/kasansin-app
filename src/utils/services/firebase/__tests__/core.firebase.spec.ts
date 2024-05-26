import { CoreFirebaseService } from '../core.firebase';
import { initializeApp } from 'firebase/app';

jest.mock('firebase/app', () => ({
	initializeApp: jest.fn(() => ({})),
}));

describe('[utils][services] CoreFirebaseService', () => {
	it('should initialize filrebase', () => {
		CoreFirebaseService.init();
		expect(initializeApp).toHaveBeenCalled();
	});
});
