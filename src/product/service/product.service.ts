import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput, updateProductInput } from '../dto/create-product.input';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(input: CreateProductInput) {
    const product = this.productRepository.create(input);
    return this.productRepository.save(product);
  }

  // async update(id:string,input: updateProductInput) {
  //   const user = await this.findOneById(id);

  //   const product = await this.productRepository.create(input);
  //   return this.productRepository.save(product);
  // }

  findOneById(id: string) {
    return this.productRepository.findOneOrFail(id);
  }

  async remove(id: string) {
    const { affected } = await this.productRepository.delete(id);
    return affected !== 0;
  }

  find() {
    return this.productRepository.find();
  }
}
