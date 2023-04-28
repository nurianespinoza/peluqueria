import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePeluqueriaDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    styles: string;
  
    @IsString()
    @IsNotEmpty()
    beard_outlined: string;
  
    @IsString()
    @IsNotEmpty()
    hair_dye: string;
  
    @IsNumber()
    @IsNotEmpty()
    treatments_facials: string;
  
    @IsNumber()
    @IsNotEmpty()
    price: number;
  
    @IsString({each:true})
    @IsArray()
    @IsOptional()
    images?: string[];
}