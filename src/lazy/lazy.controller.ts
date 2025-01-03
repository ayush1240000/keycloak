import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LazyService } from './lazy.service';
import { CreateLazyDto } from './dto/create-lazy.dto';
import { UpdateLazyDto } from './dto/update-lazy.dto';

@Controller('lazy')
export class LazyController {
  constructor(private readonly lazyService: LazyService) {}

  @Post()
  create(@Body() createLazyDto: CreateLazyDto) {
    return this.lazyService.create(createLazyDto);
  }

  @Get()
  findAll() {
    return this.lazyService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.lazyService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLazyDto: UpdateLazyDto) {
    return this.lazyService.update(+id, updateLazyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lazyService.remove(+id);
  }
}
