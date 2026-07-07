import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSectionItem } from './learning-section-item';

describe('LearningSectionItem', () => {
  let component: LearningSectionItem;
  let fixture: ComponentFixture<LearningSectionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningSectionItem],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningSectionItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
