import { Person } from 'src/persons/person.entity';

export class CreateProjectDto {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  persons: Person[];
}
