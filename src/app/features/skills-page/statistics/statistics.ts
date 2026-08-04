import { Component, input } from '@angular/core';
import { Stat } from '../skills-page.model';
import { Card } from '../../../shared/components/card/card';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'skills-statistics',
  imports: [Card, NgIcon],
  templateUrl: './statistics.html',
})
export class Statistics {
  readonly stats = input.required<Stat[]>();
}
