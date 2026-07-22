import { Component } from '@angular/core';
import { PAGE_HEADER_CONTENT, WORK_EXPERIENCES } from './experience-page.data';
import { PageHeaderContent } from '../../shared/models/page-header.model';
import { Experience } from './experience-page.model';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { ExperienceItem } from './experience-item/experience-item';

@Component({
  selector: 'app-experience-page',
  imports: [PageHeader, ExperienceItem],
  templateUrl: './experience-page.html',
  styleUrl: './experience-page.css',
})
export class ExperiencePage {
  protected readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;
  protected readonly workExperiences: Experience[] = WORK_EXPERIENCES;
}
