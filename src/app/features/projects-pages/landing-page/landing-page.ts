import { Component } from '@angular/core';
import { ENTERPRISE_PROJECTS, ENTERPRISE_SHOWCASES_SECTION_HEADER, PAGE_HEADER_CONTENT, PERSONAL_EXPERIMENTS_SECTION, PUBLIC_PROJECTS, PUBLIC_PROJECTS_SECTION_HEADER } from '../projects-pages.data';
import { PageHeaderContent } from '../../../shared/models/page-header.model';
import { PageHeader } from "../../../shared/components/page-header/page-header";
import { ComingSoonSectionContent } from '../../../shared/models/coming-soon-section.model';
import { ComingSoonSection } from '../../../shared/components/coming-soon-section/coming-soon-section';
import { EnterpriseShowcasesSection } from './enterprise-showcases-section/enterprise-showcases-section';
import { PublicProjectsSection } from './public-projects-section/public-projects-section';
import { EnterpriseProject, PublicProject, SectionHeading } from '../projects-pages.model';

@Component({
  imports: [PageHeader, ComingSoonSection, EnterpriseShowcasesSection, PublicProjectsSection],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class ProjectsLandingPage {
  protected readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;
  
  protected readonly enterpriseShowcasesHeader: SectionHeading = ENTERPRISE_SHOWCASES_SECTION_HEADER;
  protected readonly enterpriseProjectsList: EnterpriseProject[] = ENTERPRISE_PROJECTS;
  
  protected readonly publicProjectsHeader: SectionHeading = PUBLIC_PROJECTS_SECTION_HEADER;
  protected readonly publicProjectsList: PublicProject[] = PUBLIC_PROJECTS;
  
  protected readonly personalExperimentsSection: ComingSoonSectionContent = PERSONAL_EXPERIMENTS_SECTION;
}
