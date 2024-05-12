export const formatString = (text: string | undefined) => {
	return !text || text.search('undefined') >= 0 ? '' : text;
};
