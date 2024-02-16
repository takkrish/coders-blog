import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
	},
});
