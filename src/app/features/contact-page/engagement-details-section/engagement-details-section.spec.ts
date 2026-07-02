import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementDetailsSection } from './engagement-details-section';

describe('EngagementDetailsSection', () => {
  let component: EngagementDetailsSection;
  let fixture: ComponentFixture<EngagementDetailsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementDetailsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(EngagementDetailsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
