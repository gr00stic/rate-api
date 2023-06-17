import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class ProductModel extends Model {
	@Column
	image: string;

	@Column
	title: string;

	@Column
	description: string;

	@Column
	price: number;

	@Column
	prevPrice: number;

	@Column
	rating: number;

	// @Column(DataType.ARRAY(DataType.STRING))
	// categories: string[];

	@Column(DataType.JSON)
	characteristics: {
		[key: string]: string;
	};
}
