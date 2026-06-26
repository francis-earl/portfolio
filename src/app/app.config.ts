import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideIcons } from '@ng-icons/core';
import {
  heroBars3,
  heroXMark,
  heroHome,
  heroBriefcase,
  heroCodeBracketSquare,
  heroFolder,
  heroAcademicCap,
  heroEnvelope
} from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      heroBars3,
      heroXMark,
      heroHome,
      heroBriefcase,
      heroCodeBracketSquare,
      heroFolder,
      heroAcademicCap,
      heroEnvelope
    })
  ]
};
