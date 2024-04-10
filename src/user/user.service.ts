import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  private users: User[] = [
    { name: 'Quentin', email: 'quentin@mail.com', password: '123azerty' },
    { name: 'Thomas', email: 'thomas@mail.com', password: '123azerty' },
  ];
  private user: User | null = null;

  getAllUser(): User[] {
    return this.users;
  }

  createUser(newUser: User): boolean {
    // check request.body have the good format
    if (!newUser.name || newUser.name.length <= 2) {
      return false;
    }
    // check if User name already exist

    this.users.push(newUser);
    console.log('createUser success', newUser);
    return true;
  }
}
