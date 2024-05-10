import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.entity';
import { PersonsService } from 'src/persons/persons.service';
import { Person } from 'src/persons/person.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
    private personsService: PersonsService,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const findPersons: Person[] = [];
    createProjectDto.persons.forEach((person) => {
      const findPerson = new Person();
      findPerson.id = person.id;
      findPerson.firstName = person.firstName;
      findPerson.lastName = person.lastName;
      findPerson.job = person.job;

      findPersons.push(findPerson);
    });

    const project = new Project();
    project.name = createProjectDto.name;
    project.description = createProjectDto.description;
    project.startDate = createProjectDto.startDate;
    project.endDate = createProjectDto.endDate;
    project.persons = findPersons;

    return this.projectsRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectsRepository.find({ relations: { persons: true } });
  }

  findOne(id: number): Promise<Project> {
    return this.projectsRepository.findOne({
      where: { id: id },
      relations: { persons: { job: true } },
    });
  }

  async remove(id: string): Promise<void> {
    await this.projectsRepository.delete(id);
  }

  async update(updatedProject: Project): Promise<Project> {
    const findPersons: Person[] = [];

    updatedProject.persons.forEach((person) => {
      const findPerson = new Person();
      findPerson.id = person.id;
      findPerson.firstName = person.firstName;
      findPerson.lastName = person.lastName;
      findPerson.job = person.job;

      findPersons.push(findPerson);
    });

    const project = new Project();
    project.id = updatedProject.id;
    project.name = updatedProject.name;
    project.description = updatedProject.description;
    project.startDate = updatedProject.startDate;
    project.endDate = updatedProject.endDate;
    project.persons = findPersons;

    return this.projectsRepository.save(project);
  }
}
