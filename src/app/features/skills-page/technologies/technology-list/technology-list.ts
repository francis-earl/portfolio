import { Component, computed, input } from '@angular/core';
import { Category, Technology } from '../../skills-page.model';
import { Card } from '../../../../shared/components/card/card';
import { NgIcon } from '@ng-icons/core';
import { DurationPipe } from './duration-pipe/duration-pipe';

@Component({
  selector: 'skills-technology-list',
  imports: [Card, NgIcon, DurationPipe],
  templateUrl: './technology-list.html',
})
export class TechnologyList {
  readonly technologies = input.required<Technology[]>();
  readonly activeFilter = input.required<string>();

  protected readonly stars: number[] = [5, 4, 3, 2, 1];
  protected readonly selectedTechnologies = computed(() => {
    if (this.activeFilter() === Category.All) {
      return this.technologies();
    }

    return this.technologies().filter((tech) => tech.categories.includes(this.activeFilter()));
  });
}
