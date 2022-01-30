import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { UserResolver } from './resolver/user.resolver';
import { ProductService } from './service/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, UserResolver],
})
export class UserModule {}
