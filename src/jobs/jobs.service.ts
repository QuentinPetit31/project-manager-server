import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) {}

  create(createNameDto: CreateJobDto): Promise<Job> {
    const person = new Job();
    person.name = createNameDto.name;
    return this.jobsRepository.save(person);
  }

  async findAll(): Promise<Job[]> {
    return this.jobsRepository.find();
  }

  findOne(id: number): Promise<Job> {
    return this.jobsRepository.findOneBy({ id: id });
  }

  async update(updatedJob: Job): Promise<Job> {
    const person = new Job();
    person.id = updatedJob.id;
    person.name = updatedJob.name;

    return this.jobsRepository.save(person);
  }

  async remove(id: string) {
    return await this.jobsRepository.delete(id);
  }
}
