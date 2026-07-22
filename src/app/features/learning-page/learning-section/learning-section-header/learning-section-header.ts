import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { LearningHeader } from '../../learning-page.model';

@Component({
  selector: 'learning-section-header',
  imports: [NgIcon],
  templateUrl: './learning-section-header.html',
})
export class LearningSectionHeader {
  headerDetails = input.required<LearningHeader>();
}
