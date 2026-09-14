import { Component, input } from '@angular/core';
import { SectionHeading } from '../../../projects-pages.model';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'proj-section-header',
  imports: [NgIcon],
  templateUrl: './section-header.html',
})
export class SectionHeader {
  readonly header = input.required<SectionHeading>();
}
