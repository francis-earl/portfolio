import { Component, input } from '@angular/core';
import { PageHeaderContent } from '../models/page-header.model';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
})
export class PageHeader {
  pageHeaderContent = input.required<PageHeaderContent>();
}
