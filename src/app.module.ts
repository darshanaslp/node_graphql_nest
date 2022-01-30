import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entity/product.entity';
import { UserModule } from './product/product.module';

const databaseUrl =
  process.env.DATABASE_URL ||
  'mysql://root@localhost:3306/graphqltest';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: databaseUrl,
      database: databaseUrl.split('/').pop(),
      entities: [Product],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
