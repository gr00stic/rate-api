import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
	constructor(
		private reviewService: ReviewService
	) { }

	@Post('create')
	async create(@Body() dto: ReviewModel) {
		const created = await this.reviewService.create(dto);

		return created;
	}

	@Get(':id')
	async findById(@Param('id') id: string) {
		const found = await this.reviewService.findById(id);

		return found;
	}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() dto: ReviewModel) {
		const updated = await this.reviewService.update(id, dto);

		return updated;
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deleted = await this.reviewService.delete(id);

		return deleted;
	}

	@Get('byProduct/:productId')
	async findByProductId(@Param('productId') productId: string) {
		const found = await this.reviewService.findByProductId(productId);

		return found;
	}

	@Delete('byProduct/:productId')
	async deleteByProductId(@Param('productId') productId: string) {
		const found = await this.reviewService.deleteByProductId(productId);

		return found;
	}
}
