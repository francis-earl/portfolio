import { Component, input } from '@angular/core';
import { SectionHeader } from '../shared/section-header/section-header';
import { SectionHeading } from '../../projects-pages.model';

@Component({
  selector: 'proj-enterprise-showcases-section',
  imports: [SectionHeader],
  templateUrl: './enterprise-showcases-section.html',
})
export class EnterpriseShowcasesSection {
  readonly enterpriseShowcasesHeader = input.required<SectionHeading>();
}
