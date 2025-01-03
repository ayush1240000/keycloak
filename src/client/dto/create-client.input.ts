import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
   @Field(type => Int)
  //  @PrimaryGeneratedColumn()
   id: number;
  
    @Field(type => String)
    fname:string;
  
    @Field(type => String)
    lname :string
}
