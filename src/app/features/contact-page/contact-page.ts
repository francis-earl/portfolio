import { Component } from '@angular/core';
import { ContactInfo } from './contact-page.model';
import { ContactInfoItem } from './contact-info-item/contact-info-item';
import { EngagementDetailsSection } from "./engagement-details-section/engagement-details-section";

@Component({
  selector: 'app-contact-page',
  imports: [ContactInfoItem, EngagementDetailsSection],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
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
      isPrimary: true
    },
    {
      icon: 'heroDevicePhoneMobileSolid',
      label: 'Phone',
      value: `+63 ${this.mobile}`,
      link: `tel:+63${this.mobile}`,
      isPrimary: false
    },
    {
      icon: 'diLinkedinPlain',
      label: 'Linkedin',
      value: this.linkedin,
      link: `https://${this.linkedin}`,
      isPrimary: false,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      icon: 'diGithubOriginal',
      label: 'GitHub',
      value: this.github,
      link: `https://${this.github}`,
      isPrimary: false,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ];
}
