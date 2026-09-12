import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { ExperiencePage } from './features/experience-page/experience-page';
import { SkillsPage } from './features/skills-page/skills-page';
import { LearningPage } from './features/learning-page/learning-page';
import { ContactPage } from './features/contact-page/contact-page';
import { ChangelogPage } from './features/changelog-page/changelog-page';
import { ProjectsLandingPage } from './features/projects-pages/landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'experience',
    component: ExperiencePage,
  },
  {
    path: 'skills',
    component: SkillsPage,
  },
  {
    path: 'projects',
    component: ProjectsLandingPage,
  },
  {
    path: 'learning',
    component: LearningPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: 'changelog',
    component: ChangelogPage,
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found-page/not-found-page').then((c) => c.NotFoundPage),
  },
];
