import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperienceHighlights } from './home-experience-highlights';

describe('HomeExperienceHighlights', () => {
  let component: HomeExperienceHighlights;
  let fixture: ComponentFixture<HomeExperienceHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExperienceHighlights],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExperienceHighlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
