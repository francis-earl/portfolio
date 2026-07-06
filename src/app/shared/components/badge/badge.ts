import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [NgClass],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  color = input.required<'green' | 'orange'>();
  ariaLabel = input<string>();
}
