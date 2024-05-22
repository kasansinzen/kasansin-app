import cn from '../cn';

describe('[utils][helpers] cn', () => {
	it('should have 12 months', () => {
		expect(cn(['bg-black', 'text-center'])).toBe('bg-black text-center');
	});
});
