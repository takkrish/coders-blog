'use server';
import { api } from '@/config';

export const getCategories = async () => api.get('/categories');

export const getArticles = async (slug: string) =>
	api.get(
		`/articles?populate=author.profileImg,category&sort=createdAt:desc`
	);

export const getArticle = async (slug: String) =>
	api.get(`/articles?populate=author.profileImg&filters[slug]=${slug}`);
