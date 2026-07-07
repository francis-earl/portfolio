export interface LearningHeader {
  icon: string;
  title: string;
}

export interface LearningItem {
  provider: string;
  title: string;
  type: 'course' | 'certificate';
  description: string;
  url: string;
  status: 'completed' | 'in progress';
  completedDate?: string;
  startDate?: string;
  targetDate?: string;
}

export interface LearningFooter {
  icon: string;
  label: string;
  value?: string;
  action: string;
}
