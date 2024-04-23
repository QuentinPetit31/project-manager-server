import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = new Project();
    project.name = createProjectDto.name;
    project.description = createProjectDto.description;
    project.startDate = createProjectDto.startDate;
    project.endDate = createProjectDto.endDate;
    project.persons = createProjectDto.persons;

    return this.projectsRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectsRepository.find({ relations: { persons: true } });
  }

  findOne(id: number): Promise<Project> {
    return this.projectsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
