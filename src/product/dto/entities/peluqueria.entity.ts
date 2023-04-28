 import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Peluqueriaimage } from "./peluqueria.image.entity";

@Entity()
export class Peluqueria {
    @PrimaryGeneratedColumn('uuid')
    styles: string;
    
    @Column({ type: 'text' })
    beard_outlined: string;
  
    @Column({ type: 'text'})
    hair_dye: string;
  
    @Column({ type: 'text'})
    treatments_facials: string;
  
    @Column({ type: 'numeric' })
    price: number;

    @OneToMany(
        ()=> Peluqueriaimage,
        (Peluqueriaimage: { peluqueria: any; })=>Peluqueriaimage.peluqueria,
        {cascade:true},
    )

    images?: Peluqueriaimage[];

}