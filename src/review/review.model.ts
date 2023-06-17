import { Column, Model, Table } from "sequelize-typescript";

@Table
export class ReviewModel extends Model {
	@Column
	productId: string;

	@Column
	title: string;

	@Column
	name: string;

	@Column
	text: string;

	@Column
	rating: number;
}
