import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Peluqueria}from './peluqueria.entity';

@Entity()
export class Peluqueriaimage{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    url: string;
    @ManyToOne(
        ()=> Peluqueria,
        (peluqueria)=>peluqueria.image
    )

    peluqueria: Peluqueria;
}