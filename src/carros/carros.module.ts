import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { CarroRepository } from './carro.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarroRepository])],
  providers: [CarrosService],
  controllers: [CarrosController],
})
export class CarrosModule {}
