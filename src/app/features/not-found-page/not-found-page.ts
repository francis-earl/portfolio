import { Component } from '@angular/core';
import { NOT_FOUND_PAGE_CONTENT } from './not-found-page.data';
import { NotFoundPageContent } from './not-found-page.model';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [NgIcon, RouterLink],
  templateUrl: './not-found-page.html',
})
export class NotFoundPage {
  protected readonly content: NotFoundPageContent = NOT_FOUND_PAGE_CONTENT;
}
