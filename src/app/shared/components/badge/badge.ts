import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [NgClass],
  templateUrl: './badge.html',
})
export class Badge {
  color = input.required<'green' | 'orange'>();
  ariaLabel = input<string>();
}
