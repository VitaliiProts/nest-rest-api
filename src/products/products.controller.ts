import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

    @Get()
    getAll() {
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param('id') id: string): string {
        return 'getOne ' + id
    }

    @Post()
    create(@Body() CreateProductDto: CreateProductDto): string {
        return `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Remove ' + id
     }

    @Put(':id')
    update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id: string) {
        return 'Update ' + id;
    }


}
