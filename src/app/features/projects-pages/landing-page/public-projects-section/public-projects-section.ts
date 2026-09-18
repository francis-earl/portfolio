import { Component, input } from '@angular/core';
import { SectionHeader } from '../shared/section-header/section-header';
import { PublicProject, SectionHeading } from '../../projects-pages.model';
import { SectionCard } from '../shared/section-card/section-card';

@Component({
  selector: 'proj-public-projects-section',
  imports: [SectionHeader, SectionCard],
  templateUrl: './public-projects-section.html',
})
export class PublicProjectsSection {
  readonly publicProjectsHeader = input.required<SectionHeading>();
  readonly publicProjects = input.required<PublicProject[]>();
}
