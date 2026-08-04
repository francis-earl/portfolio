export enum Category {
  All = 'all',
  Language = 'language',
  Framework = 'framework',
  Frontend = 'frontend',
  Backend = 'backend',
  Database = 'database',
  Tools = 'tools',
  DevOps = 'devops',
  Testing = 'testing',
  AI = 'ai',
  LowCode = 'low-code'
}

export interface Stat {
  value: string;
  field: string;
  icon: string;
}

export interface Technology {
  id: number;
  name: string;
  icon: string;
  rating: number;
  years: number;
  categories: string[];
  hasPlusYears: boolean;
}

export interface CoreCompetency {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface ExpertiseLevel {
  description: string;
  levels: ExpertiseLevelItem[];
}

export interface ExpertiseLevelItem {
  rating: number;
  name: string;
}

export interface SectionHeading {
  title: string;
  description: string;
}