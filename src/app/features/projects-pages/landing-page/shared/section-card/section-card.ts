import { Component, input } from '@angular/core';
import { Card } from '../../../../../shared/components/card/card';
import { NgIcon } from '@ng-icons/core';
import { EnterpriseProject, PublicProject } from '../../../projects-pages.model';

@Component({
  selector: 'proj-section-card',
  imports: [Card, NgIcon],
  templateUrl: './section-card.html',
})
export class SectionCard {
  readonly project = input.required<EnterpriseProject | PublicProject>();
}
