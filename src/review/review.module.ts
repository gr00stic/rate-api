import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReviewModel } from './review.model';

@Module({
  imports: [SequelizeModule.forFeature([ReviewModel])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule { }
