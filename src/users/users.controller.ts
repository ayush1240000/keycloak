import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { Roles } from 'src/authentication/roles.decorator';
import { Resource, Roles, Scopes } from 'nest-keycloak-connect';
// import { UpdateUserDto } from './dto/update-user.dto';

@Resource('profile2') // Protects the 'user-profile' resource
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post('create')
  // @Roles('users') 
  @Roles({ roles: ['admin'] }) 
  create() {
    return { message: 'Create API accessed by user having the admmin role' };
  }
  
  @Post('create-new')
  // @Roles('users') 
  @Roles({ roles: ['users'] }) 
  create2() {
    return { message: 'Create API accessed by user having the users roles' };
  }
  
  @Get('getAll')
  // @Roles('admin') 
  @Scopes('read-prof')
  getAll() {
    return { message: 'GetAll API accessed by admin' };
  }

  @Get('getAll1')
  // @Roles({ roles: ['admin'] }) 
  @Scopes('read-only')
  getAll1() {
    return { message: 'GetAll API accessed by scope read:profile ' };
  }

  @Get(':id')
  @Scopes('view') // Requires the 'view' scope for the 'user-profile' resource
  getUserProfile(@Param('id') id: string) {
    return { message: `User Profile: ${id}` };
  }
  
}
