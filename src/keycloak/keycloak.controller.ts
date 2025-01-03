import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { CreateKeycloakDto } from './dto/create-keycloak.dto';
import { UpdateKeycloakDto } from './dto/update-keycloak.dto';

@Controller('keycloak')
export class KeycloakController {
  constructor(private readonly keycloakService: KeycloakService) {}

  @Post()
  create(@Body() createKeycloakDto: CreateKeycloakDto) {
    return this.keycloakService.create(createKeycloakDto);
  }

  @Get()
  findAll() {
    return this.keycloakService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keycloakService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeycloakDto: UpdateKeycloakDto) {
    return this.keycloakService.update(+id, updateKeycloakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keycloakService.remove(+id);
  }
}
