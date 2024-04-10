import { Controller, Get, Post, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project';

@Controller({ path: 'project' })
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // /project/:name  => detail project
  // /project/:name/update  => update project
  // /project/:name/delete  => delete project

  // /project  => all projects
  @Get()
  getAllProject(): Project[] {
    return this.projectService.getAllProject();
  }

  // /project/create => create project
  @Post('/create')
  createProject(@Req() request: Request): any {
    const newProject: Project = {
      name: request.body['name'],
      description: request.body['description'],
      startDate: request.body['startDate'],
      endDate: request.body['endDate'],
      personnes: request.body['personnes'],
    };
    const projectCreated = this.projectService.createProject(newProject);
    return projectCreated;
  }
}
