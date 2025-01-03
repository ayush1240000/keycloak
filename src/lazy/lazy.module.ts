import { Module } from '@nestjs/common';
import { LazyService } from './lazy.service';
import { LazyController } from './lazy.controller';

@Module({
  controllers: [LazyController],
  providers: [LazyService],
  exports:[LazyService]
})
export class LazyModule {}
