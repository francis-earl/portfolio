import { Component, input, signal } from '@angular/core';
import { CategoryFilters } from './category-filters/category-filters';
import { TechnologyList } from './technology-list/technology-list';
import { ExpertiseLegend } from './expertise-legend/expertise-legend';
import { Category, ExpertiseLevel, SectionHeading, Technology } from '../skills-page.model';
import { SectionHeader } from "../shared/section-header/section-header";

@Component({
  selector: 'skills-technologies',
  imports: [CategoryFilters, TechnologyList, ExpertiseLegend, SectionHeader],
  templateUrl: './technologies.html',
})
export class Technologies {
  readonly technologiesHeader = input.required<SectionHeading>();
  readonly categories = input.required<string[]>();
  readonly technologies = input.required<Technology[]>();
  readonly expertiseLevel = input.required<ExpertiseLevel>();

  readonly activeFilter = signal<string>(Category.All);

  onFilterSelected(filter: string): void {
    this.activeFilter.set(filter);
  }
}
