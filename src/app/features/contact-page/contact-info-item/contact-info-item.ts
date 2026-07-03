import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ContactInfo } from '../contact-page.model';

@Component({
  selector: 'contact-info-item',
  imports: [NgIcon],
  templateUrl: './contact-info-item.html',
  styleUrl: './contact-info-item.css',
})
export class ContactInfoItem {
  contactInfoItem = input.required<ContactInfo>();
  readonly isLast = input<boolean>(false);
}
