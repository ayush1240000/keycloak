import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {  Inject, Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { Cache } from 'cache-manager';
import { LazyModule } from './lazy/lazy.module';
import { LazyService } from './lazy/lazy.service';

@Injectable()
export class AppService {
  private lazyService: LazyService; 
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache ,
    // private readonly lazyservice :LazyService,
  private readonly lazyModuleLoader: LazyModuleLoader
) {}

async initializeLazyModule(): Promise<void> {
  // Dynamically load the LazyModule
  const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);

  // Retrieve the LazyService from the moduleRef
  this.lazyService = moduleRef.get<LazyService>(LazyService);
}

async findOne(): Promise<String> {
  // Ensure the LazyModule is initialized
  if (!this.lazyService) {
    await this.initializeLazyModule();
  }

  // Safely call the addtask method
  return this.lazyService.addtask();
}


// constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}


  // async executeLazyService() {
  //   // Dynamically import and load the LazyModule
  //   const { LazyModule } = await import('./lazy/lazy.module');
  //   const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);

  //   // Get the LazyService from the loaded module
  //   const { LazyService } = await import('./lazy/lazy.service');
  //   const lazyService = moduleRef.get(LazyService);

  //   // const { lazyController } = await import('./lazy/lazy.controller');
  //   // const lazyController = moduleRef.get(lazyController);

  //   return lazyService.execute();
  // }

  // Method to get cached data or fetch and cache it
  async getUser(userId: string): Promise<any> {
    const cacheKey = `user_${userId}`; // Cache key for Redis
    
    // Check if the data exists in the cache
    const cachedUser = await this.cacheManager.get(cacheKey);
    if (cachedUser) {
      console.log('Cache Hit');
      return cachedUser;
    }

    console.log('Cache Miss');

    // Simulate a database query
    const user = {
      id: userId,
      name: 'John Doe',
      email: `user${userId}@example.com`,
    };

    // Store the result in Redis with a TTL of 300 seconds
    await this.cacheManager.set(cacheKey, user, 300);
    return user;
  }

  // async findOne() {

  //   await this.executeLazyService();
  //   return this.lazyServiceInstance.addtask();
  // }

}
