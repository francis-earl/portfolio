import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHeader } from './experience-header';

describe('ExperienceHeader', () => {
  let component: ExperienceHeader;
  let fixture: ComponentFixture<ExperienceHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
