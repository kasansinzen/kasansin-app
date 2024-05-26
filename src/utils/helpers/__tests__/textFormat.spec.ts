import { formatString } from '../textFormat';

describe('[utils][helpers] textFormat', () => {
	it('should ignore undefined and return string', () => {
		expect(formatString(undefined)).toBe('');
	});
});
