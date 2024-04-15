import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
