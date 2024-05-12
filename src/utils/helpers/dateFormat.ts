export const shortMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const formatShortDate = (isoDate: string, separator = '-') => {
	const getDate = new Date(isoDate);
	return `${shortMonths[getDate.getMonth()]} ${separator} ${getDate.getFullYear()}`;
};
