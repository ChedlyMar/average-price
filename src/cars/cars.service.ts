import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './schemas/car.schema';

@Injectable()
export class CarsService {
  
  constructor(@InjectModel("Car") private readonly carModel: Model<Car>) { }

  create(createCarDto: CreateCarDto) {
    const newCar = new this.carModel(createCarDto);
    return newCar.save();
  }

  async findAll() {
    return await this.carModel.find();
  }

  async findOne(id: string):Promise <Car> {
    const car = await this.carModel.findById(id);
    if(!car){
      throw new NotFoundException("hi");
    }
    return car;
  }

  async update(id: string, updateCarDto:Partial<CreateCarDto>) {
    await this.findOne(id);
    return this.carModel.updateOne({ _id: id }, { $set: updateCarDto });
  }

  async remove(carId) {
    const d = await this.carModel.deleteOne({_id:carId});
    if(d.deletedCount==0){
      throw new NotFoundException();
    }
    return d;
  }
}
