import { Component } from '@angular/core';
import { PageHeaderContent } from '../../shared/models/page-header.model';
import { PageHeader } from '../../shared/components/page-header/page-header';
import {
  COMPLETED_COURSES_HEADER,
  CURRENTLY_LEARNING_HEADER,
  EARNED_CERTIFICATES_HEADER,
  LEARNING_ITEMS,
  LEARNING_JOURNAL_SECTION,
  PAGE_HEADER_CONTENT,
} from './learning-page.data';
import { LearningSection } from './learning-section/learning-section';
import { ComingSoonSectionContent } from '../../shared/models/coming-soon-section.model';
import { ComingSoonSection } from '../../shared/components/coming-soon-section/coming-soon-section';

@Component({
  imports: [PageHeader, LearningSection, ComingSoonSection],
  templateUrl: './learning-page.html',
})
export class LearningPage {
  protected readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;

  protected readonly sectionHeaders = {
    completed: COMPLETED_COURSES_HEADER,
    certificates: EARNED_CERTIFICATES_HEADER,
    current: CURRENTLY_LEARNING_HEADER,
  };

  protected readonly learningJournalSection: ComingSoonSectionContent = LEARNING_JOURNAL_SECTION;

  protected readonly completedCoursesItems = LEARNING_ITEMS.filter(
    (item) => item.type === 'course' && item.status === 'completed',
  ).sort(this.sortByDateDesc((item) => item.completedDate));

  protected readonly earnedCertificatesItems = LEARNING_ITEMS.filter(
    (item) => item.type === 'certificate' && item.status === 'completed',
  ).sort(this.sortByDateDesc((item) => item.completedDate));

  protected readonly currentlyLearningItems = LEARNING_ITEMS.filter(
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
