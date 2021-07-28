import {
  Controller,
  Get,
  Post,
  Put,
  ParseIntPipe,
  Param,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Carro } from './carro.entity';
import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @Get('/')
  async index(): Promise<Carro[]> {
    return this.carrosService.index();
  }

  @Get('/:id')
  async getCarroById(@Param('id', ParseIntPipe) id: number): Promise<Carro> {
    return this.carrosService.findById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createCarro: CreateCarroDto): Promise<Carro> {
    return this.carrosService.create(createCarro);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createCarro: CreateCarroDto,
  ): Promise<Carro> {
    return this.carrosService.update(id, createCarro);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.carrosService.delete(id);
  }
}
