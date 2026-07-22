import { Component, computed, input } from '@angular/core';
import { Experience } from '../experience-page.model';
import { Card } from '../../../shared/components/card/card';
import { ExperienceHeader } from './experience-header/experience-header';
import { ExperienceAccomplishments } from './experience-accomplishments/experience-accomplishments';
import { Tags } from '../../../shared/components/tags/tags';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'experience-item',
  imports: [Card, ExperienceHeader, ExperienceAccomplishments, Tags, NgIcon],
  templateUrl: './experience-item.html',
})
export class ExperienceItem {
  readonly experience = input.required<Experience>();
  readonly isLast = input<boolean>(false);

  protected readonly timeline = computed(
    () => `${this.experience().startDate}
  -
  ${this.experience().endDate ?? 'Present'}`,
  );
}
