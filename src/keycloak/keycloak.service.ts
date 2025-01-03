import { Injectable } from '@nestjs/common';
import { CreateKeycloakDto } from './dto/create-keycloak.dto';
import { UpdateKeycloakDto } from './dto/update-keycloak.dto';

@Injectable()
export class KeycloakService {
  create(createKeycloakDto: CreateKeycloakDto) {
    return 'This action adds a new keycloak';
  }

  findAll() {
    return `This action returns all keycloak`;
  }

  findOne(id: number) {
    return `This action returns a #${id} keycloak`;
  }

  update(id: number, updateKeycloakDto: UpdateKeycloakDto) {
    return `This action updates a #${id} keycloak`;
  }

  remove(id: number) {
    return `This action removes a #${id} keycloak`;
  }
}
