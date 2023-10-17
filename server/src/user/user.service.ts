import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { BadRequestException } from '@nestjs/common/exceptions';
@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}
  async createUser({ username, password }: CreateUserDto) {
    const existedUser = await this.userRepo.findUser(username);
    if (existedUser) {
      throw new BadRequestException('user exist');
    }
    const createUserResult = await this.userRepo.createUser(username, password);
    return createUserResult;
  }
}
