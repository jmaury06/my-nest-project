import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
  // ParseIntPipe,
} from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dtos";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get("")
  @ApiOperation({ summary: "List of Producst" })
  getProducts(
    @Query("limit") limit: number = 100,
    @Query("offset") offset: number = 0,
    @Query("brand") brand: number
  ) {
    return this.productsService.findAll();
  }

  @Get(":productId")
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param("productId", ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
