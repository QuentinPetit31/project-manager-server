import { Injectable } from '@nestjs/common';
import { Person } from './person';

@Injectable()
export class PersonService {
  persons: Person[] = [
    {
      id: 'PERS_001',
      firstName: 'Quentin',
      lastName: 'Petit',
      job: 'Web Developer',
    },
    {
      id: 'PERS_002',
      firstName: 'Thomas',
      lastName: 'Petit',
      job: 'Web Developer',
    },

    {
      id: 'PERS_003',
      firstName: 'Sophie',
      lastName: 'Dubois',
      job: 'Software Engineer',
    },
    {
      id: 'PERS_004',
      firstName: 'Emma',
      lastName: 'Leroy',
      job: 'Data Analyst',
    },
    {
      id: 'PERS_005',
      firstName: 'Lucas',
      lastName: 'Moreau',
      job: 'Network Administrator',
    },
    {
      id: 'PERS_006',
      firstName: 'Julie',
      lastName: 'Martinez',
      job: 'UX Designer',
    },
    {
      id: 'PERS_007',
      firstName: 'Nicolas',
      lastName: 'Garcia',
      job: 'Frontend Developer',
    },
    {
      id: 'PERS_008',
      firstName: 'Camille',
      lastName: 'Lefevre',
      job: 'Systems Analyst',
    },
    {
      id: 'PERS_009',
      firstName: 'Maxime',
      lastName: 'Roux',
      job: 'Cloud Architect',
    },
    {
      id: 'PERS_010',
      firstName: 'Marie',
      lastName: 'Lemoine',
      job: 'Cybersecurity Specialist',
    },
  ];

  getAllPerson(): Person[] {
    return this.persons;
  }

  createPerson(newPerson: Person): boolean {
    // récupère le dernier element du tableau, lenght -1
    // extraire l'id (PERS_01), methode string to number
    const lastPersonId = this.persons[this.persons.length - 1].id;
    // Extraire le numéro de l'ID et l'incrémenter
    const lastIdNumber = parseInt(lastPersonId.split('_')[1]);
    const newIdNumber = lastIdNumber + 1;
    // le set comme id de la nouvelle personne
    const newId = 'PERS_' + newIdNumber.toString().padStart(3, '0');
    newPerson.id = newId;
    // push le nouvel id
    this.persons.push(newPerson);
    console.log('createPerson success ', newPerson);
    return true;
  }
}
