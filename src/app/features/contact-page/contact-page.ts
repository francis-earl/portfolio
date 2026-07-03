import { Component } from '@angular/core';
import { ContactInfo } from './contact-page.model';
import { ContactInfoItem } from './contact-info-item/contact-info-item';
import { EngagementDetailsSection } from './engagement-details-section/engagement-details-section';
import { Card } from '../../shared/components/card/card';
import { PageHeaderContent } from '../../core/models/page-header.model';
import { PageHeader } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-contact-page',
  imports: [ContactInfoItem, EngagementDetailsSection, Card, PageHeader],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  readonly pageHeaderContent: PageHeaderContent = {
    label: '// CONTACT',
    title: 'Get in Touch',
    description1: `I'm always excited to connect with fellow developers, recruiters, and teams working on meaningful products.`,
    description2: `If you have an opportunity, a question, or just want to say hi, I'd love to hear from you.`,
  };

  readonly email: string = 'francisearl.fojas@gmail.com';
  readonly mobile: string = '9984433996';
  readonly linkedin: string = 'linkedin.com/in/earlfojas';
  readonly github: string = 'github.com/francis-earl';

  readonly contactInfoItems: ContactInfo[] = [
    {
      icon: 'heroEnvelope',
      label: 'Email',
      value: this.email,
      link: `mailto:${this.email}`,
      isPrimary: true,
    },
    {
      icon: 'heroDevicePhoneMobileSolid',
      label: 'Phone',
      value: `+63 ${this.mobile}`,
      link: `tel:+63${this.mobile}`,
      isPrimary: false,
    },
    {
      icon: 'diLinkedinPlain',
      label: 'Linkedin',
      value: this.linkedin,
      link: `https://${this.linkedin}`,
      isPrimary: false,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      icon: 'diGithubOriginal',
      label: 'GitHub',
      value: this.github,
      link: `https://${this.github}`,
      isPrimary: false,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];
}
