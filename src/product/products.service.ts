import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Peluqueria } from './dto/entities/peluqueria.entity';
import { CreatePeluqueriaDto } from "./dto/peluqueria.dto";
import { Peluqueriaimage } from "./dto/entities/peluqueria.image.entity";


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Peluqueria)
        private readonly productRepository: Repository<Peluqueria>,
        @InjectRepository(Peluqueriaimage)
        private readonly  imageRepository: Repository<Peluqueriaimage>,

    ){}

    async create(peluqueriaDto: CreatePeluqueriaDto){
        const {images =[], ...detalleProducto}= peluqueriaDto;
        const product=await this.productRepository.create({
          ...detalleProducto,
          images:images.map((images)=>this.imageRepository.create({url:images})),
        });
        await this.productRepository.save(product);
        return product;
      }
    
      //Metodo para visualizar todos los productos
      findAll() {
        return this.productRepository.find();
      }
    
      //Metodo para visualizar un producto especifico
      findOne(id: string) {
        return this.productRepository.findOneBy({ id });
      }
    
      //Remover un producto especifico
      async remove(id: string) {
        const product = await this.findOne(id);
        await this.productRepository.remove(product);
        return 'Producto eliminado satisfactoriamente';
      }
    
      async update(id: string, cambios:CreatePeluqueriaDto){
        const product = await this.productRepository.preload({
          id:id,
          ...cambios,
          images:[],
        });
        await this.productRepository.save(product);
        return product;
      }


}