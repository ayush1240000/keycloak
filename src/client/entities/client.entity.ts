import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
@ObjectType()
export class Client {
 @Field(type => Int)
 @PrimaryGeneratedColumn()
 id: number;

  @Field(type => String)
  fname:string;

  @Field(type => String)
  lname :string
}
