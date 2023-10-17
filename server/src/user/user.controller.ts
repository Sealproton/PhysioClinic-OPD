import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('auth')
export class UserController {
  constructor() {}
  @Post('signup')
  userSignup(@Body() body: CreateUserDto) {
    console.log(body);
  }
  @Post('signin')
  userSignin(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
