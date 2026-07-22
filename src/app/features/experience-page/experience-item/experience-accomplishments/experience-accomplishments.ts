import { Component, input } from '@angular/core';
import { Experience } from '../../experience-page.model';

@Component({
  selector: 'experience-accomplishments',
  imports: [],
  templateUrl: './experience-accomplishments.html',
})
export class ExperienceAccomplishments {
  experience = input.required<Experience>();
}
