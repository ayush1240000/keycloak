import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user/:id')
  async getUser(@Param('id') id: string) {
    return this.appService.getUser(id);
  }

  @Get('lazy/getexcuted')
  async triggerLazyLoading() {
    return await this.appService.findOne();
  }

  @Get('/getchanged')
  async changeformat(){
    return await this.appService.formatTo12Hour();
  }

 @Get('/getchanged')
  async changeformat1(){
    const hello= console.log("hello")
    return hello;
  }
  

  
}
