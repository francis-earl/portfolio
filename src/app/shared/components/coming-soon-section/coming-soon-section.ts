import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Badge } from '../badge/badge';
import { ComingSoonSectionContent } from '../../models/coming-soon-section.model';

@Component({
  selector: 'app-coming-soon-section',
  imports: [NgIcon, Badge],
  templateUrl: './coming-soon-section.html',
})
export class ComingSoonSection {
  readonly content = input.required<ComingSoonSectionContent>();
}
