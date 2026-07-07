import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUILD_INFO } from '../../../core/build-info';
import { DatePipe } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { TechStackItem } from './footer.model';
import { TECH_STACK } from './footer.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, DatePipe, NgIcon],
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear: number = new Date().getFullYear();
  readonly buildInfo = BUILD_INFO;
  readonly techStack: TechStackItem[] = TECH_STACK;
}
