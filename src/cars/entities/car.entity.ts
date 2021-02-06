import * as mongoose from 'mongoose';
import { Document } from "mongoose";

export const CarSchema = new mongoose.Schema({
  models:String,
})

export interface Car extends Document {
  models:string
}
