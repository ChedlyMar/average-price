export class CreateCarDto {
  make:string;
  mark:string;
  url_id:string;
  title: string;
  price: number;
  description: string;
  odometer: number;
  year:number;
  horsepower:number;
  is_sold:Boolean;
  ad_count:number;
  price_median:number;
  price_description: string;
  confidence:number;
  seller: string;
  fuel_type: string;
  governorate: string;
  city: string;
  image: string[];
}
