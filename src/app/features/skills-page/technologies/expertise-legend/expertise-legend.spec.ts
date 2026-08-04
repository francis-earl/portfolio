import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseLegend } from './expertise-legend';

describe('ExpertiseLegend', () => {
  let component: ExpertiseLegend;
  let fixture: ComponentFixture<ExpertiseLegend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseLegend],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseLegend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
