import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  slug?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  brand?: string;
}


@InputType()
export class updateProductInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  slug?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  brand?: string;
}
