import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
}from '@nestjs/common';
import { ProductsService } from '../products.service';
import { CreatePeluqueriaDto } from './peluqueria.dto';


@Controller('servicios')
export class ProductsController {
    constructor( private readonly productsServiceRepo: ProductsService ) {}
    @Post()
    create(@Body() peluqueriaDto: CreatePeluqueriaDto){
        return this.productsServiceRepo.create(peluqueriaDto);
    }

    @Get()
    findAll() {
        return this.productsServiceRepo.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.productsServiceRepo.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.productsServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updatePeluqueriaDto: CreatePeluqueriaDto,
    ){
        return this.productsServiceRepo.update(id, updatePeluqueriaDto);
    }

}

