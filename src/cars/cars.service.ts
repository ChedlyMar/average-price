import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  
  constructor(@InjectModel("Car") private readonly carModel: Model<Car>) { }

  create(createCarDto: CreateCarDto) {
    const newCar = new this.carModel(createCarDto);
    newCar.save();
    return 'This action adds a new car';
  }

  findAll() {
    const cars = this.carModel.find();
    return cars;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
