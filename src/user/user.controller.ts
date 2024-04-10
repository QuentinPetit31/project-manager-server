import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller({ path: 'user' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  // /project/:name  => detail project
  // /project/:name/update  => update project
  // /project/:name/delete  => delete project

  // /user  => all users
  @Get()
  getAllUser(): User[] {
    return this.userService.getAllUser();
  }

  // /user/create => create user
  @Post('/create')
  createUser(@Req() request: Request): any {
    const newUser: User = {
      name: request.body['name'],
      email: request.body['email'],
      password: request.body['password'],
    };
    const userCreated = this.userService.createUser(newUser);
    return userCreated;
  }
}
