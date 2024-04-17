import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person';

@Controller({ path: 'person' })
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // /project/:name  => detail project
  // /project/:name/delete  => delete project

  // /project  => all projects
  @Get()
  getAllPerson(): Person[] {
    return this.personService.getAllPerson();
  }

  // /person/create => create person
  //  @Post,@Delete etc correspond au type d'appel dans postcode
  @Post()
  createPerson(@Body() newPerson: Person): boolean {
    return this.personService.createPerson(newPerson);
  }
  // /project/:name/update  => update project
  @Put()
  updatePerson(@Body() updatedPerson: Person): boolean {
    return this.personService.update(updatedPerson);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleteSuccess = this.personService.delete(id);
    return deleteSuccess;
  }
}
