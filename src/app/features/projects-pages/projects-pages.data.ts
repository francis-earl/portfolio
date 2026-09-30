import { ComingSoonSectionContent } from '../../shared/models/coming-soon-section.model';
import { PageHeaderContent } from '../../shared/models/page-header.model';
import { EnterpriseProject, PublicProject, SectionHeading } from './projects-pages.model';
import { BUILD_INFO } from '../../core/build-info';

export const PAGE_HEADER_CONTENT: PageHeaderContent = {
  label: '// PROJECTS',
  title: `What I've worked on`,
  description1: `Each project is an opportunity to apply what I know, explore what's new, \
  and turn ideas into practical solutions.`,
  description2: `Here, you'll find projects that showcase the things I've built, \
  the problems I've solved, and the technologies I've explored along the way.`,
};

export const ENTERPRISE_SHOWCASES_SECTION_HEADER: SectionHeading = {
  title: 'Enterprise Showcases',
  description: `Production-inspired applications that demonstrate enterprise-grade development, \
  scalability, and real-world problem solving.`,
  icon: 'tablerDeviceDesktopCode',
};

export const PUBLIC_PROJECTS_SECTION_HEADER: SectionHeading = {
  title: 'Public Projects',
  description: `Publicly accessible projects that showcase my contributions, \
  practical development experience, and work on real-world digital products.`,
  icon: 'tablerWorldCode',
};

export const PERSONAL_EXPERIMENTS_SECTION: ComingSoonSectionContent = {
  title: 'Personal Experiments',
  description: `Projects where I apply what I've learned, experiment with new technologies, \
  and build practical skills through hands-on development.`,
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
    overview: `OSORI (Open Source DB Integration) is an open-source project that integrates \
    and publicly provides open-source information data to support a more transparent \
    and reliable open-source ecosystem.`,
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

export const ENTERPRISE_PROJECTS: EnterpriseProject[] = [
  enterpriseProject({
    id: 1,
    title: 'Enterprise Data Explorer - Products Inventory',
    summarizedOverview: `A production-inspired enterprise data management experience \
    showcasing an intuitive and configurable approach to exploring complex product data.`,

    fullOverview: `Enterprise Data Explorer - Products Inventory is a production-inspired \
    enterprise data management experience built around a flexible and configurable \
    product inventory. \
    It explores how complex business data can be presented through an intuitive \
    and highly interactive data exploration interface.
    
    The project focuses on common enterprise patterns for finding, organizing, customizing, \
    and working with large datasets.`,

    professionalInspiration: `This project is inspired by my experience building \
    enterprise applications and working with complex business data. \
    Rather than recreating a specific proprietary system, I used those experiences \
    to independently explore common enterprise patterns such as configurable data tables, \
    reusable templates, advanced filtering, and scalable UI architecture.`,

    keyCapabilities: [
      {
        id: 1,
        title: 'Enterprise UI Development',
        description: `Designing intuitive interfaces for complex business data and workflows.`,
      },
      {
        id: 2,
        title: 'Reusable Component Design',
        description: `Building configurable UI components that can adapt to different datasets and use cases.`,
      },
      {
        id: 3,
        title: 'Data Interaction Design',
        description: `Creating efficient experiences for searching, filtering, sorting, organizing, and exporting data.`,
      },
      {
        id: 4,
        title: 'Scalable Frontend Architecture',
        description: `Structuring features and application logic for maintainability and future expansion.`,
      },
    ],

    summarizedKeyFeatures: [
      'Search',
      'Sort & Filter',
      'Pagination',
      'Table Templates',
      'Responsive UI',
    ],

    fullKeyFeatures: [
      {
        id: 1,
        scope: 'Data Exploration',
        features: [
          'Global search',
          'Sorting & filtering',
          'Column visibility',
          'Column reordering',
          'Pagination',
        ],
      },
      {
        id: 2,
        scope: 'Table Templates',
        features: [
          'Create & save templates',
          'Apply saved templates',
          'Restore default configurations',
        ],
      },
      {
        id: 3,
        scope: 'User Experience',
        features: ['Loading & empty states', 'Responsive layout'],
      },
    ],

    technicalHighlights: [
      'Angular 22',
      'Typescript 6',
      'Signals',
      'RxJS',
      'AG Grid',
      'Tailwind CSS 4',
    ],

    thumbnail: 'images/project_thumbnails/enterprise_data_explorer.png',
    projectUrl: 'enterprise-data-explorer',
    repositoryUrl: `https://github.com/francis-earl/portfolio/tree/release/v${BUILD_INFO.version}/src/app/features/projects-pages/enterprise/data-explorer-page`,
  }),
];
