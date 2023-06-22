import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ProductModule,
    ReviewModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
