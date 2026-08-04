import { Component } from '@angular/core';
import { PageHeaderContent } from '../../shared/models/page-header.model';
import { CORE_COMPETENCIES, CORE_COMPETENCIES_SECTION_HEADER, EXPERTISE_LEVEL, PAGE_HEADER_CONTENT, STATISTICS, TECHNOLOGIES, TECHNOLOGIES_SECTION_HEADER } from './skills-page.data';
import { PageHeader } from "../../shared/components/page-header/page-header";
import { Category, CoreCompetency, ExpertiseLevel, SectionHeading, Stat, Technology } from './skills-page.model';
import { CoreCompetencies } from './core-competencies/core-competencies';
import { Statistics } from "./statistics/statistics";
import { Technologies } from "./technologies/technologies";

@Component({
  imports: [PageHeader, Statistics, Technologies, CoreCompetencies],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.css',
})
export class SkillsPage {
  protected readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;
  protected readonly statistics: Stat[] = STATISTICS;

  protected readonly technologiesHeader: SectionHeading = TECHNOLOGIES_SECTION_HEADER;
  protected readonly categories: string[] = Object.values(Category);
  protected readonly technologies: Technology[] = TECHNOLOGIES;
  protected readonly expertiseLevel: ExpertiseLevel = EXPERTISE_LEVEL;
  
  protected readonly competenciesHeader: SectionHeading = CORE_COMPETENCIES_SECTION_HEADER;
  protected readonly competencies: CoreCompetency[] = CORE_COMPETENCIES;
}
