import { Component, input } from '@angular/core';
import { SectionHeader } from '../shared/section-header/section-header';
import { EnterpriseProject, SectionHeading } from '../../projects-pages.model';
import { SectionCard } from '../shared/section-card/section-card';

@Component({
  selector: 'proj-enterprise-showcases-section',
  imports: [SectionHeader, SectionCard],
  templateUrl: './enterprise-showcases-section.html',
})
export class EnterpriseShowcasesSection {
  readonly enterpriseShowcasesHeader = input.required<SectionHeading>();
  readonly enterpriseProjects = input.required<EnterpriseProject[]>();
}
