import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('Required Roles:', requiredRoles);

    if (!requiredRoles) {
      return true; // No roles required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const userRoles = request.kauth?.grant?.access_token?.content?.realm_access?.roles || [];
    console.log('User Roles:', userRoles);

    // Check if the user has any required role
    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
