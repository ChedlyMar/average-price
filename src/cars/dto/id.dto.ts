import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class IdDto{
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type:String,
    description: "The car ID",
    required: true
  })
  id: string;
}