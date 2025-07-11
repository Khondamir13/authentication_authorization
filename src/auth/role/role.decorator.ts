import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';

export const ROLES_KEY = 'roles'; // This constant is used as a key for metadata storage in NestJS
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles); // This decorator is used to set roles metadata for route handlers