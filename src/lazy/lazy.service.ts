import { Injectable } from '@nestjs/common';
import { CreateLazyDto } from './dto/create-lazy.dto';
import { UpdateLazyDto } from './dto/update-lazy.dto';

@Injectable()
export class LazyService {
  create(createLazyDto: CreateLazyDto) {
    return 'This action adds a new lazy';
  }

  execute() {
    return 'Lazy Service executed successfully!';
  }

  findAll() {
    return `This action returns all lazy`;
  }

  addtask() {
    return `This action returns a  lazy`;
  }

  update(id: number, updateLazyDto: UpdateLazyDto) {
    return `This action updates a #${id} lazy`;
  }

  remove(id: number) {
    return `This action removes a #${id} lazy`;
  }
}
