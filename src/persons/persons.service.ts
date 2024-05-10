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
    return this.personsRepository.find({ relations: { job: true } });
  }

  findOne(id: number): Promise<Person> {
    // return this.personsRepository.findOneBy({ id: id });
    return this.personsRepository.findOne({
      where: { id: id },
      relations: { job: true },
    });
  }

  async update(updatedPerson: Person): Promise<Person> {
    const person = new Person();
    person.id = updatedPerson.id;
    person.firstName = updatedPerson.firstName;
    person.lastName = updatedPerson.lastName;
    person.job = updatedPerson.job;

    return this.personsRepository.save(person);
  }

  async remove(id: string): Promise<void> {
    await this.personsRepository.delete(id);
  }
}
