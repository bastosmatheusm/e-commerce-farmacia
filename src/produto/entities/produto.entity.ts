import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { NumericTransformer } from "../../util/numerictransformer";


@Entity({name: 'tb_produtos'})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(10, 1000, {message: "A descrição deve ser entre 10 e 1000 caracteres"})
    @Column({ length: 500, nullable: false })
    descricao: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false, transformer: new NumericTransformer() })
    preco: number;

    @IsNotEmpty()
    @Column({ nullable: false })
    quantidade: number;

    
    @Column({ length: 500, nullable: true })
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}