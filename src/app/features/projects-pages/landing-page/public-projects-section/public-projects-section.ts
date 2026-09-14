import { Component, input } from '@angular/core';
import { SectionHeader } from '../shared/section-header/section-header';
import { SectionHeading } from '../../projects-pages.model';

@Component({
  selector: 'proj-public-projects-section',
  imports: [SectionHeader],
  templateUrl: './public-projects-section.html',
})
export class PublicProjectsSection {
  readonly publicProjectsHeader = input.required<SectionHeading>();
}
