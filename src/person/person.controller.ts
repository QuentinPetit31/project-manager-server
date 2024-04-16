import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person';

@Controller({ path: 'person' })
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // /project/:name  => detail project
  // /project/:name/update  => update project
  // /project/:name/delete  => delete project

  // /project  => all projects
  @Get()
  getAllPerson(): Person[] {
    return this.personService.getAllPerson();
  }

  // /person/create => create person
  //  @Post,@Delete etc correspond au type d'appel dans postcode
  @Post()
  createPerson(@Body() newPerson: Person): any {
    // const newPerson: Person = {
    //   id: request.body['id'],
    //   firstName: request.body['firstName'],
    //   lastName: request.body['lastName'],
    //   job: request.body['job'],
    // };
    const personCreated = this.personService.createPerson(newPerson);
    return personCreated;
  }
}
