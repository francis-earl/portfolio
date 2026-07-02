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
  heroEnvelope,
  heroArrowUpRight,
  heroDocumentText,
  heroGlobeAlt,
  heroClock,
  heroComputerDesktop,
  heroMapPin
} from '@ng-icons/heroicons/outline';
import { diLinkedinPlain } from '@ng-icons/devicon/plain';
import { diGithubOriginal } from '@ng-icons/devicon/original';
import { heroDevicePhoneMobileSolid } from '@ng-icons/heroicons/solid';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      // Heroicons
      heroBars3,
      heroXMark,
      heroHome,
      heroBriefcase,
      heroCodeBracketSquare,
      heroFolder,
      heroAcademicCap,
      heroEnvelope,
      heroArrowUpRight,
      heroDevicePhoneMobileSolid,
      heroGlobeAlt,
      heroClock,
      heroMapPin,
      heroComputerDesktop,
      heroDocumentText,

      // Devicons
      diLinkedinPlain,
      diGithubOriginal
    })
  ]
};
