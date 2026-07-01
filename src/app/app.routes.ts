import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { WorkExperiencePage } from './features/work-experience-page/work-experience-page';
import { SkillsPage } from './features/skills-page/skills-page';
import { ProjectsPage } from './features/projects-page/projects-page';
import { LearningPage } from './features/learning-page/learning-page';
import { ContactPage } from './features/contact-page/contact-page';
import { ChangelogPage } from './features/changelog-page/changelog-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'experience',
    component: WorkExperiencePage
  },
  {
    path: 'skills',
    component: SkillsPage,
  },
  {
    path: 'projects',
    component: ProjectsPage
  },
  {
    path: 'learning',
    component: LearningPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
  {
    path: 'changelog',
    component: ChangelogPage
  }
];
