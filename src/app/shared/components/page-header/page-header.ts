import { Component, input } from '@angular/core';
import { PageHeaderContent } from '../../../core/models/page-header.model';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  pageHeaderContent = input.required<PageHeaderContent>();
}
