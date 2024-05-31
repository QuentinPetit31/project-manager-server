import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserWithNoPassword } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserWithNoPassword> {
    const encryptedPassword = await this.usersService.encryptPassword(
      createUserDto.password,
    );
    createUserDto.password = encryptedPassword;

    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<UserWithNoPassword> {
    const encryptedPassword = await this.usersService.encryptPassword(
      body.password,
    );
    return this.usersService.findOneUserByEmailandPassword(
      body.email,
      encryptedPassword,
    );
  }
}
