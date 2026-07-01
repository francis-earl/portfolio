import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUILD_INFO } from '../../../core/build-info';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly currentYear: number = new Date().getFullYear();
  readonly buildInfo = BUILD_INFO;
}
