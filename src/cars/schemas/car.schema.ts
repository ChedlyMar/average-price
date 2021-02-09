import * as mongoose from 'mongoose';
import { Document } from "mongoose";

export const CarSchema = new mongoose.Schema({
  make:String,
  mark:String,
  url_id:String,
  title: String,
  price: Number,
  description: String,
  last_update: Number,
  odometer: Number,
  year:Number,
  horsepower:Number,
  is_sold:Boolean,
  ad_count:Number,
  price_median:Number,
  price_description: String,
  confidence:Number,
  seller: String,
  fuel_type: String,
  governorate: String,
  city: String,
  image:[{ type:String }],
}, { timestamps: { createdAt: 'last_update', updatedAt: 'last_update' }})

export interface Car extends Document {
  make:string;
  mark:string;
  url_id:string;
  title: string;
  price: number;
  description: string;
  last_update: Number;
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
