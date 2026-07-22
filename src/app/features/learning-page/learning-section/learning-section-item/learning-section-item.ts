import { Component, computed, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { LearningFooter, LearningItem } from '../../learning-page.model';
import { PROVIDER_ICONS } from '../../learning-page.data';

@Component({
  selector: 'learning-section-item',
  imports: [NgIcon],
  templateUrl: './learning-section-item.html',
})
export class LearningSectionItem {
  readonly learningItem = input.required<LearningItem>();

  protected readonly learningItemIcon = computed<string>(
    () => PROVIDER_ICONS[this.learningItem().provider.toLowerCase()] ?? 'tablerFileCode',
  );

  protected readonly sectionFooter = computed<LearningFooter>(() => {
    const item = this.learningItem();

    if (item.status === 'completed') {
      return {
        icon: 'tablerCalendarCheck',
        label: item.type === 'certificate' ? 'Earned:' : 'Completed:',
        value: item.completedDate,
        action: item.type === 'certificate' ? 'View Certificate' : 'View Course',
      };
    }

    return {
      icon: 'tablerCalendar',
      label: 'Started:',
      value: item.startDate,
      action: 'View Course',
    };
  });
}
