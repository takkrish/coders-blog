'use client';

import React, { useEffect, useState } from 'react';
import CategoriesComponent from './Categories';
import Articles from './Articles';
import { Article, Category } from '@/types';

type PropType = {
	categories: Category[];
	articles: Article[];
};

const Home = ({ categories, articles }: PropType) => {
	const [categoryTitle, setCategoryTitle] = useState('Recents');
	const [filteredArticles, setFilteredArticles] = useState(articles);

	const filterArticles = () => {
		if (categoryTitle === 'Recents') {
			setFilteredArticles(articles);
		} else {
			setFilteredArticles(
				articles.filter(
					(item) =>
						item.attributes.category.data.attributes.title ===
						categoryTitle
				)
			);
		}
	};

	useEffect(() => {
		filterArticles();
	}, [categoryTitle]);

	return (
		<main className='w-full'>
			<CategoriesComponent
				categories={categories}
				categoryTitle={categoryTitle}
				setCategoryTitle={setCategoryTitle}
			/>
			<div className='container mx-auto mt-8 flex flex-col'>
				<p className='font-extrabold text-xl pl-4 border-l-4 border-zinc-800 rounded-sm'>
					{categoryTitle}
				</p>
				<Articles articles={filteredArticles} />
			</div>
		</main>
	);
};

export default Home;
