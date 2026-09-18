export interface SectionHeading {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  projectUrl: string;
  repositoryUrl: string;
}

export interface EnterpriseProject extends Project {
  type: 'enterprise';
  summarizedOverview: string;
  fullOverview: string;
  professionalInspiration: string;
  keyCapabilities: SkillsDemonstrated[];
  keyFeatures: string[][];
  technicalHighlights: string[];
}

export interface SkillsDemonstrated {
  id: number;
  title: string;
  description: string;
}

export interface PublicProject extends Project {
  type: 'public';
  overview: string;
  role: string;
  keyContributions: string[];
  technologies: string[];
}
