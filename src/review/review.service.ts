import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) { }

	async create(dto: CreateReviewDto) {
		return this.prisma.review.create({ data: { ...dto } });
	}

	async findById(id: string) {
		return this.prisma.review.findUnique({
			where: {
				id
			}
		})
	}

	async update(id: string, dto: CreateReviewDto) {
		return this.prisma.review.update({ where: { id }, data: { ...dto } });
	}

	async delete(id: string) {
		return this.prisma.review.delete({
			where: {
				id
			}
		})
	}

	async findByProductId(productId: string) {
		return this.prisma.review.findMany({
			where: {
				productId
			}
		})
	}

	async deleteByProductId(productId: string) {
		return this.prisma.review.deleteMany({
			where: {
				productId
			}
		})
	}
}
