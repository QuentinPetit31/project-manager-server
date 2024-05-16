import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './job.entity';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobsDto: CreateJobDto): Promise<Job> {
    return this.jobsService.create(createJobsDto);
  }

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Job> {
    return this.jobsService.findOne(id);
  }

  @Put()
  update(@Body() job: Job): Promise<Job> {
    return this.jobsService.update(job);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(id);
  }
}
