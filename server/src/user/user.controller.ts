import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('signup')
  userSignup(@Body() body: CreateUserDto) {
    const result = this.userService.createUser(body);
    return result;
  }
  @Post('signin')
  userSignin(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
