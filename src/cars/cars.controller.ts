import { Controller, Get, Post, Body, Put, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { IdDto } from './dto/id.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({description:"The ressource has been seccessfully created"})
  @ApiBody({type: CreateCarDto})
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  @ApiOkResponse({description:"The ressource list has been seccessfully returned."})
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  @ApiOkResponse({description:"The ressource has been seccessfully returned."})
  @ApiNotFoundResponse({description:"The ressource dosen't exist"})
  findOne(@Param('id') id: IdDto) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @ApiOkResponse({description:"The ressource has been seccessfully updated."})
  update(@Param('id', ) id: IdDto, @Body() updateCarDto:Partial<CreateCarDto>) {    
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOkResponse({description:"The ressource has been seccessfully removed."})
  @ApiNotFoundResponse({description:"The ressource dosen't exist"})
  remove(@Param('id') id: IdDto) {
    return this.carsService.remove(id);
  }
}
