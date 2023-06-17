import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { MainPageModule } from './main-page/main-page.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModel } from './product/product.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'rate-api',
      autoLoadModels: true,
      synchronize: true,
      models: [ProductModel],
    }),
    AuthModule,
    ProductModule,
    ReviewModule,
    MainPageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
