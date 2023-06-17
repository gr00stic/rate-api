import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel)
		private reviewModel: typeof ReviewModel
	) { }

	async create(dto: ReviewModel) {
		return this.reviewModel.create({ ...dto });
	}

	async findById(id: string) {
		return this.reviewModel.findOne({
			where: {
				id
			}
		})
	}

	async update(id: string, dto: ReviewModel) {
		return this.reviewModel.update({ ...dto }, { where: { productId: id } });
	}

	async delete(id: string) {
		return this.reviewModel.destroy({
			where: {
				id
			}
		})
	}

	async findByProductId(productId: string) {
		return this.reviewModel.findAll({
			where: {
				productId
			}
		})
	}

	async deleteByProductId(productId: string) {
		return this.reviewModel.destroy({
			where: {
				productId
			}
		})
	}
}
