import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarroDto } from './dto';
import { Carro } from './carro.entity';
import { CarroRepository } from './carro.repository';

@Injectable()
export class CarrosService {
  constructor(
    @InjectRepository(CarroRepository)
    private readonly carroRepository: CarroRepository,
  ) {}

  async index(): Promise<Carro[]> {
    return await this.carroRepository.find();
  }

  async create(createCarro: CreateCarroDto): Promise<Carro> {
    return await this.carroRepository.save(createCarro);
  }

  async update(id: number, createCarro: CreateCarroDto): Promise<Carro> {
    await this.carroRepository.update(id, createCarro);
    return await this.carroRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.carroRepository.softDelete(id);
  }

  async findById(id: number): Promise<Carro | null> {
    const carro = await this.carroRepository.findOne(id);
    if (carro) {
      return carro;
    }
    throw new NotFoundException();
  }
}
