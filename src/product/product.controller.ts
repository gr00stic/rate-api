import { Body, Controller, Delete, Get, Param, Post, Patch, HttpCode } from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
	constructor(
		private productService: ProductService
	) { }

	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		const created = await this.productService.create(dto)

		if (created) console.log('row added successfully');


		return created;
	}

	@Get(':id')
	async findByProductId(@Param('id') id: string) {
		const found = await this.productService.findById(id);

		if (!found) console.log(`product with id: ${id} was not found.`);

		return found;
	}

	@Get()
	async findAllProducts() {
		const found = await this.productService.findAllProducts();

		if (!found) console.log(`products table is empty`);

		return found;
	}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() dto: CreateProductDto) {
		const updated = await this.productService.update(id, dto);

		return updated;
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deleted = await this.productService.delete(id);

		console.log(deleted);



		return deleted;
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {

	}
}
