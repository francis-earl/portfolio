import { Component, computed, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { LearningFooter, LearningItem } from '../../learning-page.model';
import { PROVIDER_ICONS } from '../../learning-page.data';

@Component({
  selector: 'learning-section-item',
  imports: [NgIcon],
  templateUrl: './learning-section-item.html',
  styleUrl: './learning-section-item.css',
})
export class LearningSectionItem {
  readonly learningItem = input.required<LearningItem>();

  readonly learningItemIcon = computed<string>(
    () => PROVIDER_ICONS[this.learningItem().provider.toLowerCase()] ?? 'tablerFileCode',
  );

  readonly sectionFooter = computed<LearningFooter>(() => {
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
