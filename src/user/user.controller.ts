import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { UsersService } from './users.service';

@Controller({ path: 'user' })
export class UserController {
  constructor(
    private readonly userService: UserService,
    // private usersService: UsersService,
  ) {}

  // /project/:name  => detail project
  // /project/:name/update  => update project
  // /project/:name/delete  => delete project

  // /user  => all users
  @Get()
  getAllUser(): User[] {
    return this.userService.getAllUser();
  }

  // @Get('/2')
  // getAllUsers() {
  //   return this.usersService.findAll();
  // }

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
