import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { BadRequestException } from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}
  async createUser({ username, password }: CreateUserDto) {
    const existedUser = await this.userRepo.findUser(username);
    if (existedUser) {
      throw new BadRequestException('user exist');
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const createUserResult = await this.userRepo.createUser(
      username,
      hashPassword,
    );
    return createUserResult;
  }
}
