import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(): Promise<string> {
    return Promise.resolve('users identified');
  }
}
