import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Peluqueria } from "./dto/entities/peluqueria.entity";
import { ProductsController } from "./dto/products.controller";
import { ProductsService } from "./products.service";
import { Peluqueriaimage } from "./dto/entities/peluqueria.image.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Peluqueria, Peluqueriaimage])],
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductsModule {}