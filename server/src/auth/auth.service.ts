import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import {
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signup({ username, password }: CreateUserDto) {
    if (!username) {
      throw new BadRequestException('incorrect username');
    }
    if (!password) {
      throw new BadRequestException('incorrect password');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const signupResult = await this.userService.createUser(
      username,
      hashPassword,
    );
    return signupResult;
  }
  async signin({ username, password }: CreateUserDto) {
    const user = await this.userService.findUser(username);
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      throw new UnauthorizedException('Incorect Password');
    }
    const payload = { userID: user.user_id, username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return { message: 'success', token };
  }
}
