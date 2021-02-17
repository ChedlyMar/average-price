import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { IdDto } from './dto/id.dto';
import { Car } from './schemas/car.schema';

@Injectable()
export class CarsService {
  
  constructor(@InjectModel("Car") private readonly carModel: Model<Car>) { }

  create(createCarDto: CreateCarDto) {
    const newCar = new this.carModel(createCarDto);
    return newCar.save();
  }

  findAll() {
    return this.carModel.find();
  }

  async findOne(id: IdDto):Promise <Car> {
    const car = await this.carModel.findById(id);
    if(!car){
      throw new NotFoundException();
    }
    return car;
  }

  async update(id: IdDto, updateCarDto:Partial<CreateCarDto>) {
    await this.findOne(id);
    return this.carModel.updateOne({ _id: id }, { $set: updateCarDto });
  }

  async remove(carId) {
    const deletedCar = await this.carModel.deleteOne({_id:carId});
    if(deletedCar.deletedCount==0){
      throw new NotFoundException();
    }
    return deletedCar;
  }
}
