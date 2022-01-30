import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput, updateProductInput } from '../dto/create-product.input';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';

@Resolver(Product)
export class UserResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => Product)
  async product(@Args('id') id: string) {
    const product = await this.productService.findOneById(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Mutation(() => Product)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input);
  }

  // @Mutation(() => Boolean)
  // async updateProduct(@Args('input') id: string,input:updateProductInput) {
  //   const product = await this.productService.findOneById(id);
  //   if (!product) {
  //     throw new NotFoundException(id);
  //   }
  //   return this.productService.update(id,input);
  // }

  @Mutation(() => Boolean)
  removeProduct(@Args('id') id: string) {
    return this.productService.remove(id);
  }

  @Query(() => [Product])
  products() {
    return this.productService.find();
  }
}
