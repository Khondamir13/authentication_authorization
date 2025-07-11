import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

// The AuthController handles incoming requests related to authentication
@Controller('auth')
export class AuthController {
    constructor(readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK) 
    @Post('login')
    singIn(@Body() userDetails: SignInDto) {
        return this.authService.signIn(userDetails.username, userDetails.password);
    }
    
    @UseGuards(AuthGuard) // Use the AuthGuard to protect this route
    @Get('profile')
    getProfile(@Request() req){
        return req.user; // Return the user information from the request object
    }
}
