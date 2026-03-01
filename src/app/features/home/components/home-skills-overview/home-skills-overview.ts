import { Component } from '@angular/core';

type SkillsGroup = {
  title: string;
  items: string[];
};

@Component({
  selector: 'app-home-skills-overview',
  imports: [],
  templateUrl: './home-skills-overview.html',
  styleUrl: './home-skills-overview.scss',
})
export class HomeSkillsOverview {
  protected readonly skillsGroups: SkillsGroup[] = [
    {
      title: 'Frontend',
      items: ['Angular', 'React', 'TypeScript', 'RxJS', 'NgRx', 'HTML5', 'SCSS'],
    },
    {
      title: 'Backend y APIs',
      items: ['Node.js', 'Express.js', 'REST', 'GraphQL', 'Microfrontends'],
    },
    {
      title: 'Cloud y DevOps',
      items: ['Azure', 'AWS', 'Google Cloud', 'Jenkins', 'GitHub Actions', 'Docker'],
    },
    {
      title: 'Calidad y Metodologías',
      items: ['Jasmine', 'Jest', 'Karma', 'Code Review', 'Scrum', 'Kanban'],
    },
  ];
}
