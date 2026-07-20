import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAccomplishments } from './experience-accomplishments';

describe('ExperienceAccomplishments', () => {
  let component: ExperienceAccomplishments;
  let fixture: ComponentFixture<ExperienceAccomplishments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceAccomplishments],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceAccomplishments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
