import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSectionHeader } from './learning-section-header';

describe('LearningSectionHeader', () => {
  let component: LearningSectionHeader;
  let fixture: ComponentFixture<LearningSectionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningSectionHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningSectionHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
