import { Component } from '@angular/core';
import { PAGE_HEADER_CONTENT } from '../projects-pages.data';
import { PageHeaderContent } from '../../../shared/models/page-header.model';
import { PageHeader } from "../../../shared/components/page-header/page-header";
import { NgIcon } from "@ng-icons/core";

@Component({
  imports: [PageHeader, NgIcon],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class ProjectsLandingPage {
  protected readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;
}
