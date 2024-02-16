export const formatDate = (dateString: Date): String => {
	const date = new Date(dateString).toLocaleDateString('un-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		weekday: 'long',
	});
	return date;
};
