import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  userSignup(@Body() body: CreateUserDto) {
    const result = this.authService.signup(body);
    return result;
  }
  @Post('signin')
  userSignin(@Body() body: CreateUserDto) {
    const result = this.authService.signin(body);
    return result;
  }
}
