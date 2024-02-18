export const formatDate = (dateString: Date): String => {
	const date = new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		weekday: 'long',
	});
	return date;
};
