import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencePage } from './work-experience-page';

describe('WorkExperiencePage', () => {
  let component: WorkExperiencePage;
  let fixture: ComponentFixture<WorkExperiencePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperiencePage],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperiencePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
