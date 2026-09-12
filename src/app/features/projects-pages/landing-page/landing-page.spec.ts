import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLandingPage } from './landing-page';

describe('ProjectsLandingPage', () => {
  let component: ProjectsLandingPage;
  let fixture: ComponentFixture<ProjectsLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
