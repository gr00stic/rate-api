import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Get('id')
	async get(@Param('id') id: string) {

	}

	@Patch('id')
	async patch(@Param('id') id: string, @Body() dto: ReviewModel) {

	}

	@Delete('id')
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {

	}
}
