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

  async findOne(id: string):Promise <Car> {
    const car = await this.carModel.findById(id);
    return car;
  }

  async update(id: string, updateCarDto:Partial<CreateCarDto>) {
    const myCar: Car = await this.findOne(id);
    Object.assign(myCar, updateCarDto);
    return await myCar.save();
  }

  async remove(carId) {
    return await this.carModel.deleteOne({_id:carId});
  }
}
