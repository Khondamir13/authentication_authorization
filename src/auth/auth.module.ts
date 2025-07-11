import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

// The AuthController handles incoming requests related to authentication
// The AuthService contains the business logic for authentication
// The UsersModule provides access to user-related services, such as fetching user data
@Module({
  imports:[UsersModule,
    JwtModule.register({
      global: true, // Makes the JWT module available globally
      secret: jwtConstants.secret, 
      signOptions: { expiresIn: '60s' }, // Token expiration time
    }
  )
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
