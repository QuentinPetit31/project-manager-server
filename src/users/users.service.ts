import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserWithNoPassword } from './user.entity';
import { promisify } from 'util';
import { createCipheriv, scrypt } from 'crypto';

const IV_HEX = '5e55a05e32effc7623623526ba0273cc';
const SECRET_KEY = 'es65567hdctycdj151516rhtcb33rvg';

@Injectable()
export class UsersService {
  iv = Buffer.from(IV_HEX, 'hex');

  secretKey = SECRET_KEY;

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  //intialisation de la fonction pour l'action login
  findOneUserByEmailandPassword(
    email: string,
    password: string,
  ): Promise<UserWithNoPassword> {
    //usersRepository gènére une requête SQL et retourne la reponse de celle ci
    //le .then est la pour modifier la reponse (enlever le password -> securité)
    //après avoir fait ça on passe au front (voir le login.component.ts   )
    return this.usersRepository.findOneBy({ email, password }).then((user) => {
      if (user) {
        delete user.password;
      }
      return user;
    });
  }

  async encryptPassword(password: string) {
    // The key length is dependent on the algorithm.
    // In this case for aes256, it is 32 bytes.
    const key = (await promisify(scrypt)(this.secretKey, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, this.iv);

    const encryptedText = Buffer.concat([
      cipher.update(password),
      cipher.final(),
    ]);
    return encryptedText.toString();
  }
}
