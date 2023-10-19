import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}
  async createUser(username: string, password: string) {
    const existedUser = await this.userRepo.findUserWithUsername(username);
    if (existedUser) {
      throw new BadRequestException('user exist');
    }
    const createUserResult = await this.userRepo.createUser(username, password);
    return createUserResult;
  }
  async findUser(username: string) {
    const getUser = await this.userRepo.findUserWithUsername(username);
    if (!getUser) {
      throw new NotFoundException('user Not found');
    }
    return getUser;
  }
}
