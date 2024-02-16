// CATEGORIES DATA

export interface CategoriesResponse {
	data: Category[];
	meta: PaginationResourse;
}

export interface Category {
	id: Number;
	attributes: CategoryAttributes;
}

export interface CategoryAttributes {
	title: String;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	slug: String;
}

export interface PaginationResourse {
	pagination: Pagination;
}

export interface Pagination {
	page: Number;
	pageSize: Number;
	pageCount: Number;
	total: Number;
}

// ARTICLES DATA

export interface ArticlesResponse {
	data: Article[];
	meta: PaginationResourse;
}

export interface Article {
	id: Number;
	attributes: ArticleAttributes;
}

export interface ArticleAttributes {
	title: String;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	description: String;
	slug: String;
	author: {
		data: {
			attributes: {
				username: String;
				email: String;
				profileImg: {
					data: {
						attributes: {
							url: String;
						};
					};
				};
			};
		};
	};
}
