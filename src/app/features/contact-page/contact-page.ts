import { Component } from '@angular/core';
import { ContactInfo } from './contact-page.model';
import { ContactInfoItem } from './contact-info-item/contact-info-item';
import { EngagementDetailsSection } from './engagement-details-section/engagement-details-section';
import { Card } from '../../shared/components/card/card';
import { PageHeaderContent } from '../../shared/components/models/page-header.model';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { CONTACT_INFO_ITEMS, PAGE_HEADER_CONTENT } from './contact-page.data';

@Component({
  selector: 'app-contact-page',
  imports: [ContactInfoItem, EngagementDetailsSection, Card, PageHeader],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  readonly pageHeaderContent: PageHeaderContent = PAGE_HEADER_CONTENT;
  readonly contactInfoItems: ContactInfo[] = CONTACT_INFO_ITEMS;
}
