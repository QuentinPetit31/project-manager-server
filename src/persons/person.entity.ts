import { Job } from 'src/jobs/job.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne(() => Job)
  job: Job;
}

// rajouter job aux person sur php my admin
// Lier person to job la person contient le job
// quand j'update une personne ça maj le job lié
// voir projet a des person cette fois ci une person à un job
// voir GET/UPDATE/CREATE/DELETE si c'est fonctionnel
// voir ce qui a été fait sur project essayé de faire la même chose sur person
// job doit apparaitre quand je recup une person avec get sur postcode
