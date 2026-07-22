import { Component, input } from '@angular/core';
import { Experience } from '../../experience-page.model';
import { Badge } from "../../../../shared/components/badge/badge";

@Component({
  selector: 'experience-header',
  imports: [Badge],
  templateUrl: './experience-header.html',
})
export class ExperienceHeader {
  experience = input.required<Experience>();
}
