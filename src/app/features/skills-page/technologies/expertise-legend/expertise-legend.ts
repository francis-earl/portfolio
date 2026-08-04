import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ExpertiseLevel } from '../../skills-page.model';

@Component({
  selector: 'skills-expertise-legend',
  imports: [NgIcon],
  templateUrl: './expertise-legend.html',
  host: {
    class: 'flex gap-5 rounded-xl border border-amber-300 bg-amber-50 px-6 py-4.5'
  }
})
export class ExpertiseLegend {
  readonly expertiseLevel = input.required<ExpertiseLevel>();
  protected readonly stars: number[] = [5, 4, 3, 2, 1];
}
