import { PageHeaderContent } from '../../shared/components/models/page-header.model';
import { LearningHeader, LearningItem } from './learning-page.model';

export const PAGE_HEADER_CONTENT: PageHeaderContent = {
  label: '// LEARNING',
  title: 'Keep Growing',
  description1: `Every project teaches something new, but learning doesn't stop there. I continuously expand my skills through online courses, technical assessments, and hands-on practice to stay current with modern software development.`,
};

export const COMPLETED_COURSES_HEADER: LearningHeader = {
  title: 'Completed Courses',
  icon: 'tablerSchool',
};

export const EARNED_CERTIFICATES_HEADER: LearningHeader = {
  title: 'Earned Certificates',
  icon: 'tablerAward',
};

export const CURRENTLY_LEARNING_HEADER: LearningHeader = {
  title: 'Currently Learning',
  icon: 'tablerBook',
};

export const PROVIDER_ICONS: Record<string, string> = {
  'linkedin learning': 'diLinkedinPlain',
  anthropic: 'simpleAnthropic',
  hackerrank: 'simpleHackerrank',
  udemy: 'simpleUdemy',
};

export const LEARNING_ITEMS: LearningItem[] = [
  {
    provider: 'Linkedin Learning',
    title: 'Learning Regular Expressions',
    type: 'course',
    description:
      'Learn how to build and use regular expressions to efficiently search, validate, and manipulate text across popular programming languages.',
    url: 'https://www.linkedin.com/learning/certificates/83e0488ca821a259685cc933f5b81e800b643aeabefd142ea705b12bda96626b',
    status: 'completed',
    completedDate: 'May 2023',
  },
  {
    provider: 'Linkedin Learning',
    title: 'Learning GitHub Pages',
    type: 'course',
    description:
      'Learn how to publish and maintain static websites with GitHub Pages using repositories, Markdown, and modern site generators.',
    url: 'https://www.linkedin.com/learning/certificates/b7c54f2b3c46eb690aab1a37d59d10e08d828373330120f14832577f8c422cc7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BboFLbwDKTQ2bL1uGBBTTmA%3D%3D',
    status: 'completed',
    completedDate: 'October 2023',
  },
  {
    provider: 'Anthropic',
    title: 'Claude Code in Action',
    type: 'course',
    description: `Learn how to use Claude Code to automate development tasks, manage coding workflows, and integrate AI into the software development process.`,
    url: 'https://verify.skilljar.com/c/orobh6nn9bxk',
    status: 'completed',
    completedDate: 'March 2026',
  },
  {
    provider: 'HackerRank',
    title: 'Angular (Basic)',
    type: 'certificate',
    description: `Validate your Angular proficiency in topics like Components, TypeScript, Two-way Binding, Form Validation, and MVC Frameworks.`,
    url: 'https://www.hackerrank.com/certificates/0dcec5ccd011',
    status: 'completed',
    completedDate: 'June 2026',
  },
  {
    provider: 'Udemy',
    title: 'Angular - The Complete Guide',
    type: 'course',
    description: `Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js.`,
    url: 'https://www.udemy.com/course/the-complete-guide-to-angular-2',
    status: 'in progress',
    startDate: 'April 2026',
    targetDate: 'August 2026',
  },
];
