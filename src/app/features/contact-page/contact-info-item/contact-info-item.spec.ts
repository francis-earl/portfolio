import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoItem } from './contact-info-item';

describe('ContactInfoItem', () => {
  let component: ContactInfoItem;
  let fixture: ComponentFixture<ContactInfoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
