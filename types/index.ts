// CATEGORIES DATA

export interface CategoriesResponse {
	data: Category[];
	meta: PaginationResourse;
}

export interface Category {
	id: number;
	attributes: CategoryAttributes;
}

export interface CategoryAttributes {
	title: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	slug: string;
}

export interface PaginationResourse {
	pagination: Pagination;
}

export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

// ARTICLES DATA

export interface ArticlesResponse {
	data: Article[];
	meta: PaginationResourse;
}

export interface Article {
	id: number;
	attributes: ArticleAttributes;
}

export interface ArticleAttributes {
	title: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	description: string;
	slug: string;
	author: {
		data: {
			attributes: {
				username: string;
				email: string;
				profileImg: {
					data: {
						attributes: {
							url: string;
						};
					};
				};
			};
		};
	};
}
