import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/person-user.dto';
import { Person } from './person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = new Person();
    person.firstName = createPersonDto.firstName;
    person.lastName = createPersonDto.lastName;
    person.job = createPersonDto.job;

    return this.personsRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return this.personsRepository.find();
  }

  findOne(id: number): Promise<Person> {
    return this.personsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.personsRepository.delete(id);
  }
}
