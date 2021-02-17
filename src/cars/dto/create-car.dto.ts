import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class CreateCarDto {

  @IsNotEmpty()
  @ApiProperty({
    type:String,
    description: "The car maker",
    required: true
  })
  make:string;

  @IsNotEmpty()
  @ApiProperty({
    type:String,
    description: "The model of car",
    required: true
  })
  mark:string;
  
  @ApiProperty()
  url_id?:string;

  @ApiProperty()
  title?: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: String,
    required: true
  })
  price?: number;

  @ApiProperty()
  description?: string;

  @IsNumber()
  @ApiProperty()
  odometer?: number;
  
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  year?:number;
  
  @IsNumber()
  @ApiProperty()
  horsepower?:number;
  
  @ApiProperty()
  is_sold?:Boolean;
  
  @IsNumber()
  @ApiProperty()
  ad_count?:number;
  
  @IsNumber()
  @ApiProperty()
  price_median?:number;
  
  @ApiProperty()
  price_description?: string;
  
  @ApiProperty()
  confidence?:number;
  
  @ApiProperty()
  seller?: string;
    
  @ApiProperty()
  fuel_type?: string;
  
  @ApiProperty()
  governorate?: string;
  
  @ApiProperty()
  city?: string;

  @ApiProperty()
  image?: string[];
}
