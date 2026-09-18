import { ComingSoonSectionContent } from '../../shared/models/coming-soon-section.model';
import { PageHeaderContent } from '../../shared/models/page-header.model';
import { EnterpriseProject, PublicProject, SectionHeading } from './projects-pages.model';

export const PAGE_HEADER_CONTENT: PageHeaderContent = {
  label: '// PROJECTS',
  title: `What I've worked on`,
  description1: `Each project is an opportunity to apply what I know, explore what's new, and turn ideas into practical solutions.`,
  description2: `Here, you'll find projects that showcase the things I've built, the problems I've solved, and the technologies I've explored along the way.`,
};

export const ENTERPRISE_SHOWCASES_SECTION_HEADER: SectionHeading = {
  title: 'Enterprise Showcases',
  description: `Production-inspired applications that demonstrate enterprise-grade development, scalability, and real-world problem solving.`,
  icon: 'tablerDeviceDesktopCode',
};

export const PUBLIC_PROJECTS_SECTION_HEADER: SectionHeading = {
  title: 'Public Projects',
  description: `Publicly accessible projects that showcase my contributions, practical development experience, and work on real-world digital products.`,
  icon: 'tablerWorldCode',
};

export const PERSONAL_EXPERIMENTS_SECTION: ComingSoonSectionContent = {
  title: 'Personal Experiments',
  description: `Projects where I apply what I've learned, experiment with new technologies, and build practical skills through hands-on development.`,
  icon: 'tablerFlask',
};

const publicProject = (project: Omit<PublicProject, 'type'>): PublicProject => ({
  ...project,
  type: 'public',
});

export const PUBLIC_PROJECTS: PublicProject[] = [
  publicProject({
    id: 1,
    title: 'OSORI',
    overview: `OSORI (Open Source DB Integration) is an open-source project that integrates and publicly provides open-source information data to support a more transparent and reliable open-source ecosystem.`,
    role: 'Frontend Developer',
    keyContributions: [
      'Core UI Styling & Layout',
      'Responsive UI Development',
      'English/Korean Localization',
      'Static Content Integration',
      'GitHub Pages Deployment',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    thumbnail: 'images/project_thumbnails/osori.png',
    projectUrl: 'https://olis.or.kr:13443/',
    repositoryUrl: 'https://github.com/osori-db/osori-db.github.io',
  }),
];

const enterpriseProject = (project: Omit<EnterpriseProject, 'type'>): EnterpriseProject => ({
  ...project,
  type: 'enterprise',
});
