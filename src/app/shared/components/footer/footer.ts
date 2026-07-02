import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUILD_INFO } from '../../../core/build-info';
import { DatePipe } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, DatePipe, NgIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly currentYear: number = new Date().getFullYear();
  readonly buildInfo = BUILD_INFO;
  readonly techStack: { name: string; version: string; icon: string }[] = [
    { name: 'Angular', version: '22', icon: 'diAngularOriginal' },
    { name: 'TypeScript', version: '6', icon: 'diTypescriptOriginal' },
    { name: 'Tailwind CSS', version: '4', icon: 'diTailwindcssOriginal' },
  ];
}
