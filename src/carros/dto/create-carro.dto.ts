import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarroDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Nome deve ser preenchido',
  })
  nome: string;

  @ApiProperty()
  @IsOptional()
  descricao: string;

  @ApiProperty()
  @IsOptional()
  url_foto: string;

  @ApiProperty()
  @IsOptional()
  url_video: string;

  @ApiProperty()
  @IsOptional()
  latitude: string;

  @ApiProperty()
  @IsOptional()
  longitude: string;

  @ApiProperty()
  @IsOptional()
  tipo: string;
}
