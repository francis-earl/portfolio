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
  heroStar,
  heroInformationCircle,
} from '@ng-icons/heroicons/outline';
import { diJavaPlain, diLinkedinPlain } from '@ng-icons/devicon/plain';
import { diAngularOriginal, diArgocdOriginal, diBambooOriginal, diBitbucketOriginal, diBootstrapOriginal, diCss3Original, diExpressOriginal, diGithubactionsOriginal, diGithubOriginal, diGitOriginal, diHtml5Original, diJasmineOriginal, diJavaOriginal, diJavascriptOriginal, diJunitOriginalWordmark, diMysqlOriginal, diOpenapiOriginal, diPostgresqlOriginal, diReactOriginal, diRxjsOriginal, diSalesforceOriginal, diSpringOriginal, diTailwindcssOriginal, diTypescriptOriginal } from '@ng-icons/devicon/original';
import { heroDevicePhoneMobileSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import {
  simpleHackerrank,
  simpleAnthropic,
  simpleUdemy,
} from '@ng-icons/simple-icons';
import { tablerAward, tablerBook, tablerBrandGithub, tablerBulb, tablerCalendar, tablerCalendarCheck, tablerFileCode, tablerCalendarCode, tablerCode, tablerCodeDots, tablerDeviceDesktopCode, tablerNotebook, tablerRocket, tablerSchool, tablerServerBolt, tablerShieldCheck, tablerStack2, tablerTargetArrow } from '@ng-icons/tabler-icons';

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
      heroStar,
      heroStarSolid,
      heroInformationCircle,

      // Devicons
      diAngularOriginal,
      diTypescriptOriginal,
      diTailwindcssOriginal,
      diLinkedinPlain,
      diGithubOriginal,
      diJavascriptOriginal,
      diRxjsOriginal,
      diHtml5Original,
      diCss3Original,
      diSpringOriginal,
      diJavaOriginal,
      diOpenapiOriginal,
      diPostgresqlOriginal,
      diGitOriginal,
      diJasmineOriginal,
      diJunitOriginalWordmark,
      diBootstrapOriginal,
      diGithubactionsOriginal,
      diBitbucketOriginal,
      diBambooOriginal,
      diArgocdOriginal,
      diMysqlOriginal,
      diReactOriginal,
      diJavaPlain,
      diExpressOriginal,
      diSalesforceOriginal,

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
      tablerNotebook,
      tablerCodeDots,
      tablerBrandGithub,
      tablerDeviceDesktopCode,
      tablerStack2,
      tablerRocket,
      tablerShieldCheck,
      tablerBulb,
      tablerCalendarCode,
      tablerCode,
      tablerServerBolt
    })
  ]
};
