import { getArticles, getCategories } from '@/actions';
import Articles from '@/components/Articles';
import CategoriesComponent from '@/components/Categories';
import { ArticlesResponse, CategoriesResponse } from '@/types';
import { AxiosResponse } from 'axios';

export default async function Home() {
	const resCategories: AxiosResponse<CategoriesResponse> =
		await getCategories();
	const categories = resCategories.data.data;

	const resArticles: AxiosResponse<ArticlesResponse> = await getArticles();
	const articles = resArticles.data.data;
	return (
		<main className='w-full'>
			<CategoriesComponent categories={categories} />
			<div className='container mx-auto mt-8 flex flex-col'>
				<p className='font-extrabold text-xl pl-4 border-l-4 border-zinc-800 rounded-sm'>
					Recents
				</p>
				<Articles articles={articles} />
			</div>
		</main>
	);
}
