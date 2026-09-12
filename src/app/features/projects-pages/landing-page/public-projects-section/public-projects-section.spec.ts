import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProjectsSection } from './public-projects-section';

describe('PublicProjectsSection', () => {
  let component: PublicProjectsSection;
  let fixture: ComponentFixture<PublicProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicProjectsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicProjectsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
