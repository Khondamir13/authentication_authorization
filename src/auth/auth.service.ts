import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        readonly usersService: UsersService,
        readonly jwtService: JwtService,  
    ){}


    async signIn(username:string, pass:string): Promise<any>{
        const user = await this.usersService.findOne(username)
        if(user?.password !==pass){
            throw new UnauthorizedException()
        }

        const payload = {sub:user.userId, username:user.username} // Create a payload with user details
        return {
            access_token:  await this.jwtService.signAsync(payload),
        };
    }
    
    
}
