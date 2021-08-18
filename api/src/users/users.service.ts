import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async saveUser(id): Promise<User> {
    const user = new User(id);
    return await this.usersRepository.save(user);
  }

  getUser(): Promise<User[]> {
    const user = this.usersRepository.find();
    return Promise.resolve(user);
  }
}
