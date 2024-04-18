import { Injectable } from '@nestjs/common';
import { Project } from './project';

@Injectable()
export class ProjectService {
  projects: Project[] = [
    {
      id: 'PROJ_001',
      name: 'toto',
      description: 'description',
      startDate: '25/08/2000',
      endDate: '27/08/2000',
      personnes: ['toto', 'tata', 'titi'],
    },
    {
      id: 'PROJ_002',
      name: 'Basic Computer Skills Workshop',
      description:
        'Host a series of workshops to teach basic computer skills such as using email, browsing the internet, and using word processing software. Nicolas will lead the workshops, with support from Maxime and Julie.',
      startDate: '25/02/2024',
      endDate: '27/02/2024',
      personnes: ['Nicolas', 'Maxime', 'Julie'],
    },
    {
      id: 'PROJ_003',
      name: 'Tech Support for Seniors',
      description:
        'Provide personalized tech support sessions for seniors to help them navigate their computers, smartphones, and tablets. Sophie will coordinate the sessions, while Emma and Michael will assist the seniors.',
      startDate: '15/01/2011',
      endDate: '17/01/2011',
      personnes: ['Sophie', 'Emma', 'Lucas'],
    },
    {
      id: 'PROJ_004',
      name: 'Coding Club for Kids',
      description:
        'Start a coding club for kids to learn programming basics in a fun and interactive way. Emma will lead the club, with help from Julie and Nicolas.',
      startDate: '25/08/2020',
      endDate: '27/08/2020',
      personnes: ['Nicolas', 'Julie', 'Emma'],
    },
    {
      id: 'PROJ_005',
      name: 'Website Building Workshop',
      description:
        'Conduct a workshop to teach participants how to build their own websites using user-friendly platforms. Thomas will lead the workshop, with support from Emma, Quentin and Nicolas.',
      startDate: '02/09/2023',
      endDate: '29/08/2023',
      personnes: ['Thomas', 'Nicolas', 'Emma', 'Quentin'],
    },
  ];

  getAllProject(): Project[] {
    return this.projects;
  }

  createProject(newProject: Project): boolean {
    // récupère le dernier element du tableau, lenght -1
    // extraire l'id (PERS_01), methode string to number
    const lastPersonId = this.projects[this.projects.length - 1].id;
    // Extraire le numéro de l'ID et l'incrémenter
    const lastIdNumber = parseInt(lastPersonId.split('_')[1]);
    const newIdNumber = lastIdNumber + 1;
    // le set comme id de la nouvelle personne
    const newId = 'PERS_' + newIdNumber.toString().padStart(3, '0');
    newProject.id = newId;
    // push le nouvel id
    this.projects.push(newProject);
    console.log('createPerson success ', newProject);
    return true;
  }

  delete(nameProject: string) {
    // créer un nouveau tableau vide,
    let tab = [];
    let projectKnow = false;
    //parcourir tout le tab (tout les projs)
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      console.log('____________________________');
      console.log(project);

      if (project.name != nameProject) {
        // copie tout les noms sauf le nameProject
        tab.push(project);
      } else {
        projectKnow = true;
      }
    }
    console.log('tab =', tab);
    // que le tab de copie remplace le tab initial
    this.projects = tab;
    return projectKnow;
  }

  update(name: string, updatedProject: Project): boolean {
    let projectKnow = false;
    // chercher le projet dans le tab
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name === name) {
        // Mettre à jour le projet
        this.projects[i] = updatedProject;
        projectKnow = true;
      }
    }
    // Vérifier si le projet a été trouvé et mis à jour
    if (projectKnow) {
      console.log('Le projet a été mis à jour avec succès.');

      // else nom de projet pas trouvé + message
    } else {
      console.log("Le projet n'a pas été trouvé.");
    }
    return projectKnow;
  }
}
