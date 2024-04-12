import { Controller, Get, Post, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project';
import { Put, Body, Param, Delete } from '@nestjs/common';
import { log } from 'console';

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
  //  @Post,@Delete etc correspond au type d'appel dans postcode
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

  // besoin de créer des id pour remplacer name
  @Put(':name')
  update(@Param('name') name: string, @Body() updatedProject: Project) {
    const updateSucces = this.projectService.update(name, updatedProject);
    console.log('Update succes', updateSucces);
    return updateSucces;
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    const deleteSuccess = this.projectService.delete(name);
    return deleteSuccess;
  }
}
