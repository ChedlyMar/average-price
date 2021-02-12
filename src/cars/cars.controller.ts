import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiCreatedResponse({description:"The ressource has been seccessfully created"})
  @ApiBody({type: CreateCarDto})
  @ApiForbiddenResponse({description:"Forbdden"})
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  @ApiOkResponse({description:"The ressource list has been seccessfully returned."})
  @ApiForbiddenResponse({description:"Forbdden"})
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description:"The ressource has been seccessfully returned."})
  @ApiForbiddenResponse({description:"Forbdden"})
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({description:"The ressource has been seccessfully updated."})
  @ApiForbiddenResponse({description:"Forbdden"})  
  update(@Param('id') id: string, @Body() updateCarDto:Partial<CreateCarDto>) {    
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOkResponse({description:"The ressource has been seccessfully removed."})
  @ApiForbiddenResponse({description:"Forbdden"})  
  @ApiInternalServerErrorResponse({description: "Something wrong!"})
    remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
