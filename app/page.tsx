import { getArticles, getCategories } from '@/actions';
import { ArticlesResponse, CategoriesResponse } from '@/types';
import { AxiosResponse } from 'axios';
import Home from '@/components/Home';

export default async function Page() {
	const resCategories: AxiosResponse<CategoriesResponse> =
		await getCategories();
	const categories = resCategories.data.data;

	const resArticles: AxiosResponse<ArticlesResponse> = await getArticles('');
	const articles = resArticles.data.data;

	return <Home articles={articles} categories={categories} />;
}
