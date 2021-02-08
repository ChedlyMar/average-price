import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './schemas/car.schema';

@Injectable()
export class CarsService {
  
  constructor(@InjectModel("Car") private readonly carModel: Model<Car>) { }

  async create(createCarDto: CreateCarDto) {
    const newCar = new this.carModel(createCarDto);
    return await newCar.save();
  }

  async findAll() {
    return await this.carModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto) {
    return `This action updates a #${id} car`;
  }

  async remove(carId) {
    return await this.carModel.deleteOne({_id:carId});
  }
}
