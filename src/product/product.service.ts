import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) { }

	async create(dto: CreateProductDto) {
		return this.prisma.product.create({ data: { ...dto } });
	}

	async findById(id: string) {
		return this.prisma.product.findUnique({
			where: {
				id
			},
		});
	}

	async findAllProducts() {
		return this.prisma.product.findMany();
	}

	async update(id: string, dto: CreateProductDto) {
		return this.prisma.product.update({ where: { id }, data: { ...dto } });
	}

	async delete(id: string) {
		return this.prisma.product.delete({
			where: {
				id
			}
		});
	}


}
