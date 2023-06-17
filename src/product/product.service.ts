import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel)
		private productModel: typeof ProductModel
	) { }

	async create(dto: CreateProductDto) {
		return this.productModel.create({ ...dto });
	}

	async findById(id: string) {
		return this.productModel.findOne({
			where: {
				id,
			},
		});
	}

	async findAllProducts() {
		return this.productModel.findAll();
	}

	async update(id: string, dto: CreateProductDto) {
		return this.productModel.update({ ...dto }, { where: { id }, logging: true });
	}

	async delete(id: string) {
		return this.productModel.destroy({
			where: {
				id
			},
			logging: true
		});
	}


}
