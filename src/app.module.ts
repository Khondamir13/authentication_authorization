import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [AuthModule, UsersModule, BookModule],
})
export class AppModule {}
