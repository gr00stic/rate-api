import { Column, Model, Table } from "sequelize-typescript";

@Table
export class ReviewModel extends Model {
	@Column
	_id: string;

	@Column
	title: string;

	@Column
	name: string;

	@Column
	text: string;

	@Column
	rating: number;

	@Column
	createdAt: Date;

	@Column
	updatedAt: Date;
}
