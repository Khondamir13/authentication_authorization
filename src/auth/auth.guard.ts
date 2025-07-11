import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request)

        if(!token){
            throw new UnauthorizedException()
        }

        try{
            // Payload is  the decoded token information about the user like user ID, username, etc.
            const payload = await this.jwtService.verifyAsync(token, {secret:jwtConstants.secret});
            request['user'] = payload; // Attach the user payload to the request object
        }catch  {
            throw new UnauthorizedException('Invalid token');
        }

        return true; // Allow the request to proceed if the token is valid
    }


    private extractTokenFromHeader(request: Request): string | undefined {
       const [type, token] = request.headers.authorization?.split(' ') ??  [];
       return type === 'Bearer' ? token : undefined;
    }
}