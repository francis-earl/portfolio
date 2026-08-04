import { Component, input } from '@angular/core';
import { SectionHeading } from '../../skills-page.model';

@Component({
  selector: 'skills-section-header',
  imports: [],
  templateUrl: './section-header.html',
  host: {
    class: 'flex flex-wrap items-center gap-1 sm:gap-4.5',
  },
})
export class SectionHeader {
  readonly header = input.required<SectionHeading>();
}
