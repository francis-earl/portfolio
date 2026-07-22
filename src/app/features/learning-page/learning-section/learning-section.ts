import { Component, input } from '@angular/core';
import { LearningSectionHeader } from "./learning-section-header/learning-section-header";
import { Card } from "../../../shared/components/card/card";
import { LearningSectionItem } from "./learning-section-item/learning-section-item";
import { LearningHeader, LearningItem } from '../learning-page.model';

@Component({
  selector: 'learning-section',
  imports: [LearningSectionHeader, Card, LearningSectionItem],
  templateUrl: './learning-section.html',
  host: {
    class: 'flex flex-col gap-4.5'
  }
})
export class LearningSection {
  readonly learningHeader = input.required<LearningHeader>();
  readonly learningItems = input.required<LearningItem[]>();
}
