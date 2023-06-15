import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { MainPageModule } from './main-page/main-page.module';

@Module({
  imports: [AuthModule, ProductModule, ReviewModule, MainPageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
