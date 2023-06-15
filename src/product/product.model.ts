export class ProductModel {
	_id: string;
	image: string;
	title: string;
	description: string;
	price: number;
	prevPrice: number;
	rating: number;
	categories: string[];
	characteristics: {
		[key: string]: string;
	};
}
