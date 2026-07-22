import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.html',
})
export class Tags {
  items = input.required<string[]>();
}
