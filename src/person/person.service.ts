import { Injectable } from '@nestjs/common';
import { Person } from './person';

@Injectable()
export class PersonService {
  persons: Person[] = [
    { id: '01', firstName: 'Quentin', lastName: 'Petit', job: 'Web Developer' },
    { id: '02', firstName: 'Thomas', lastName: 'Petit', job: 'Web Developer' },
  ];

  getAllPerson(): Person[] {
    return this.persons;
  }

  createPerson(newPerson: Person): boolean {
    // check request.body have the good format
    if (!newPerson.id || newPerson.id.length <= 2) {
      return false;
      // check if project name already exist
    }
    let personNameAlreadyUsed = false;
    console.log('Appelle createProject');
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].id === newPerson.id) {
        personNameAlreadyUsed = true;
      }
    }
    if (personNameAlreadyUsed) {
      console.log('Le nom du projet est déjà utilisé');
      return false;
    } else {
      this.persons.push(newPerson);
      console.log('createProject success ', newPerson);
      return true;
    }
  }
}
