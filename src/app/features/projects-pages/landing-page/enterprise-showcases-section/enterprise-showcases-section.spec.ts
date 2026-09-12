import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseShowcasesSection } from './enterprise-showcases-section';

describe('EnterpriseShowcasesSection', () => {
  let component: EnterpriseShowcasesSection;
  let fixture: ComponentFixture<EnterpriseShowcasesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseShowcasesSection],
    }).compileComponents();

    fixture = TestBed.createComponent(EnterpriseShowcasesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
