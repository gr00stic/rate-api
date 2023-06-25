import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ReviewModule } from 'src/review/review.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [ReviewModule, PrismaModule],
})
export class ProductModule { }
