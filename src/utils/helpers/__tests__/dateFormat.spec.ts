import { formatShortDate, shortMonths } from '../dateFormat';

describe('[utils][helpers] dateFormat', () => {
	it('should have 12 months', () => {
		expect(shortMonths.length).toBe(12);
	});

	it('should return correct format short date', () => {
		const expected = `${shortMonths[4]}/2024`;
		expect(formatShortDate('2024-05-22', '/')).toBe(expected);
	});
});
