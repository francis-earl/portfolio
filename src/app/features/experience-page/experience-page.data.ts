import { PageHeaderContent } from '../../shared/models/page-header.model';
import { Experience } from './experience-page.model';

export const PAGE_HEADER_CONTENT: PageHeaderContent = {
  label: '// EXPERIENCE',
  title: `Where I've made impact`,
  description1: `Throughout my career, I've had the opportunity to work across different 
  industries, collaborate with talented teams, and contribute to products that solve 
  real business problems.`,
  description2: `Each role has shaped how I approach software development and the impact 
  I strive to make.`,
};

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: 4,
    startDate: 'Jan 2025',
    //     endDate: 'Jul 2026',
    logo: 'logo/macquarie.jpg',
    company: 'Macquarie Group Services (Philippines), Inc.',
    website: 'https://www.macquarie.com/ph/en.html',
    role: 'Frontend Developer',
    employmentType: 'Full-time',
    location: 'Makati City, Philippines',
    overview: `Contributed as a full-stack developer to Ops Workstation, 
    an internal trading platform used to validate and monitor financial trades. 
    While my primary focus was Angular, I also worked across the backend and 
    served as the primary frontend engineer responsible for the 
    Angular application, codebase maintenance, and ongoing platform enhancements.`,
    achievements: [
      `Led the modernization of our team's Angular application by implementing automated testing, 
      upgrading framework versions, improving project architecture, reducing technical debt, 
      establishing a CI pipeline, and contributing to plans for future CD automation.`,

      `Served as the team's front-end subject matter expert, providing technical guidance, 
      resolving Angular-related issues, and supporting other developers with 
      front-end implementation decisions.`,

      `Developed and maintained full-stack features using Angular, Spring Boot, and SQL 
      in an Agile environment, leveraging Claude Code to accelerate development, debugging, 
      and code quality improvements.`,

      `Collaborated with our business analysts to analyze requirements, clarify technical 
      feasibility, and translate business needs into scalable application features.`,

      `Conducted UI demonstrations for stakeholders, incorporating feedbacks received to ensure 
      alignment with business requirements.`,

      `Investigated and resolved production issues, prepared incident reports, and 
      communicated updates and resolutions to end users.`,

      `Authored technical documentation covering Angular modernization efforts and 
      production issue resolutions.`,
    ],
    techStack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Jasmine',
      'Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'Claude Code',
      'Bitbucket',
      'Bamboo',
      'ArgoCD',
    ],
  },
  {
    id: 3,
    startDate: 'Sep 2021',
    endDate: 'Nov 2024',
    logo: 'logo/samsung.jpg',
    company: 'Samsung Electronics Philippines Corporation',
    website: 'https://research.samsung.com/srph',
    role: 'Engineer',
    employmentType: 'Full-time',
    location: 'Taguig City, Philippines',
    overview: `Developed front-end applications including internal 
    administration portals, a centralized developer portal for open-source 
    resources, and public-facing conference websites supporting 
    Samsung's developer community.`,
    achievements: [
      `Spearheaded the redevelopment of a legacy Angular application by rebuilding it from scratch 
      using Angular 18, modernizing the UI/UX, implementing new features, 
      resolving long-standing issues, and improving maintainability through adherence 
      to organizational coding standards.`,

      `Developed and maintained enterprise web applications using Angular 
      and public-facing web applications using React delivering user-focused and 
      maintainable front-end solutions.`,

      `Optimized data retrieval performance in an Angular-based administrative portal 
      through code refactoring and application logic enhancements, 
      improving responsiveness and user experience.`,

      `Introduced unit testing to an Angular administrative portal with no existing test coverage, 
      establishing a foundation for improved code reliability and future development.`,

      `Collaborated closely with Korean stakeholders and development teams through 
      daily progress updates, technical discussions, and feature demonstrations while supporting 
      multilingual (English/Korean) application functionality.`,
    ],
    techStack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Jasmine',
      'Tailwind CSS',
      'GitHub',
      'GitHub Actions',
      'GitHub Pages',
      'REST APIs',
      'React',
    ],
  },
  {
    id: 2,
    startDate: 'Jul 2018',
    endDate: 'Sep 2021',
    logo: 'logo/pointwest.jpg',
    company: 'Pointwest Innovations Corporation',
    website: 'https://pointwest.com/',
    role: 'Software Engineer',
    employmentType: 'Full-time',
    location: 'Quezon City, Philippines',
    overview: `Developed full-stack web applications across multiple business 
    domains, including employee self-service, employee benefits management, 
    e-commerce platforms, financial services, administration portals, and 
    CRM solutions built on Salesforce.`,
    achievements: [
      `Led a team of three front-end developers in delivering an Angular-based wealth management 
      application ahead of schedule through effective task coordination and technical guidance.`,

      `Developed and maintained full-stack enterprise web applications using Angular, Spring Boot, 
      Java EE, SQL, Salesforce, and jQuery across multiple client projects.`,

      `Developed and customized Salesforce solutions using Lightning Web Components (LWC) and Apex 
      to support client requirements and business processes.`,

      `Improved data retrieval performance in an Angular administrative portal by implementing 
      caching, lazy loading, and Angular Ahead-of-Time (AOT) compilation, 
      enhancing application responsiveness.`,

      `Developed mobile-responsive, cross-browser-compatible, and secure web applications, 
      ensuring a consistent user experience across devices and browsers.`,
    ],
    techStack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Bootstrap',
      'Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'Git',
      'Salesforce LWC',
      'Salesforce Apex',
      'Java EE',
      'JSP',
      'Node.js',
    ],
  },
  {
    id: 1,
    startDate: 'Apr 2017',
    endDate: 'May 2017',
    logo: 'logo/indra.jpg',
    company: 'Indra Philippines, Inc.',
    website: 'https://www.indragroup.com/en',
    role: 'Frontend Developer',
    employmentType: 'Internship',
    location: 'Pasig City, Philippines',
    overview: `Completed my internship by developing a skills inventory web application 
      while gaining hands-on experience with Angular, laying the foundation 
      for my frontend development career.`,
    achievements: [
      `Developed a skills inventory web application using Angular as a solo front-end developer 
      while collaborating with other intern back-end developers.`,
    ],
    techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
  },
];
