import { EntityRepository, Repository } from 'typeorm';
import { Carro } from './carro.entity';

@EntityRepository(Carro)
export class CarroRepository extends Repository<Carro> {}
