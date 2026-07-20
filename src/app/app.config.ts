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
  heroMapPin,
  heroWrenchScrewdriver,
  heroArrowTopRightOnSquare,
  heroCalendarDateRange,
} from '@ng-icons/heroicons/outline';
import { diLinkedinPlain } from '@ng-icons/devicon/plain';
import { diAngularOriginal, diGithubOriginal, diTailwindcssOriginal, diTypescriptOriginal } from '@ng-icons/devicon/original';
import { heroDevicePhoneMobileSolid } from '@ng-icons/heroicons/solid';
import {
  simpleHackerrank,
  simpleAnthropic,
  simpleUdemy,
} from '@ng-icons/simple-icons';
import { tablerAward, tablerBook, tablerCalendar, tablerCalendarCheck, tablerFileCode, tablerNotebook, tablerSchool, tablerTargetArrow } from '@ng-icons/tabler-icons';

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
      heroWrenchScrewdriver,
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
      heroArrowTopRightOnSquare,
      heroCalendarDateRange,

      // Devicons
      diAngularOriginal,
      diTypescriptOriginal,
      diTailwindcssOriginal,
      diLinkedinPlain,
      diGithubOriginal,

      // Simple Icons
      simpleHackerrank,
      simpleAnthropic,
      simpleUdemy,

      // Tabler Icons
      tablerSchool,
      tablerAward,
      tablerBook,
      tablerTargetArrow,
      tablerFileCode,
      tablerCalendarCheck,
      tablerCalendar,
      tablerNotebook
    })
  ]
};
