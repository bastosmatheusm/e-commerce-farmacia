import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { CategoriaService } from "../categoria/services/categoria.service";
import { ProdutoService } from "./services/produto.service";
import { ProdutoController } from "./controllers/produto.controller";
import { CategoriaModule } from "../categoria/categoria.module";

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService, CategoriaService],
})
export class ProdutoModule {}