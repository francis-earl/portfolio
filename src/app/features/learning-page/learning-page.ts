import { Component } from '@angular/core';
import { PageHeaderContent } from '../../shared/components/models/page-header.model';
import { PageHeader } from '../../shared/components/page-header/page-header';
import {
  COMPLETED_COURSES_HEADER,
  CURRENTLY_LEARNING_HEADER,
  EARNED_CERTIFICATES_HEADER,
  LEARNING_ITEMS,
  PAGE_HEADER_CONTENT,
} from './learning-page.data';
import { LearningSection } from './learning-section/learning-section';
import { NgIcon } from '@ng-icons/core';
import { Badge } from '../../shared/components/badge/badge';

@Component({
  imports: [PageHeader, LearningSection, NgIcon, Badge],
  templateUrl: './learning-page.html',
})
export class LearningPage {
  readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;

  readonly sectionHeaders = {
    completed: COMPLETED_COURSES_HEADER,
    certificates: EARNED_CERTIFICATES_HEADER,
    current: CURRENTLY_LEARNING_HEADER,
  };

  readonly completedCoursesItems = LEARNING_ITEMS.filter(
    (item) => item.type === 'course' && item.status === 'completed',
  ).sort(this.sortByDateDesc((item) => item.completedDate));

  readonly earnedCertificatesItems = LEARNING_ITEMS.filter(
    (item) => item.type === 'certificate' && item.status === 'completed',
  ).sort(this.sortByDateDesc((item) => item.completedDate));

  readonly currentlyLearningItems = LEARNING_ITEMS.filter(
    (item) => item.status === 'in progress',
  ).sort(this.sortByDateDesc((item) => item.startDate));

  private sortByDateDesc<T>(selector: (item: T) => string | undefined) {
    return (a: T, b: T) => {
      const dateA = selector(a);
      const dateB = selector(b);

      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      return Date.parse(dateB) - Date.parse(dateA);
    };
  }
}
