import { Component, input } from '@angular/core';
import { CoreCompetency, SectionHeading } from '../skills-page.model';
import { Card } from "../../../shared/components/card/card";
import { NgIcon } from '@ng-icons/core';
import { SectionHeader } from "../shared/section-header/section-header";

@Component({
  selector: 'skills-core-competencies',
  imports: [Card, NgIcon, SectionHeader],
  templateUrl: './core-competencies.html',
})
export class CoreCompetencies {
  readonly competenciesHeader = input.required<SectionHeading>();
  readonly competencies = input.required<CoreCompetency[]>();
}
