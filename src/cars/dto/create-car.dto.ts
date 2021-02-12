import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {

  @ApiProperty({
    type:String,
    description: "The car maker"
  })
  make:string;

  @ApiProperty({
    type:String,
    description: "The model of car"
  })
  mark:string;
  
  @ApiProperty()
  url_id?:string;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  price?: number;

  @ApiProperty()
  description?: string;
  
  @ApiProperty()
  odometer?: number;
  
  @ApiProperty()
  year?:number;
  
  @ApiProperty()
  horsepower?:number;
  
  @ApiProperty()
  is_sold?:Boolean;
  
  @ApiProperty()
  ad_count?:number;
  
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
