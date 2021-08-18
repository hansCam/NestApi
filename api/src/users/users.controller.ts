import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { iDValidateResetRequest } from './dto/idDto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser(): Promise<User[]> {
    return this.userService.getUser();
  }
  @Post('/post')
  postUser(@Body() body: iDValidateResetRequest): void {
    const user = new User(body.id);
    this.userService.saveUser(user.id);
  }
}
