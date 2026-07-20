export interface Experience {
  id: number;
  startDate: string;
  endDate?: string;
  logo: string;
  company: string;
  website: string;
  role: string;
  employmentType: string;
  location: string;
  overview: string;
  achievements: string[];
  techStack: string[];
}