import { PartialType } from '@nestjs/mapped-types';
import { CreateLazyDto } from './create-lazy.dto';

export class UpdateLazyDto extends PartialType(CreateLazyDto) {}
