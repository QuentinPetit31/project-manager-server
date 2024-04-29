import { Job } from 'src/jobs/job.entity';

export class CreatePersonDto {
  id?: string;
  firstName: string;
  lastName: string;
  job: Job;
}
