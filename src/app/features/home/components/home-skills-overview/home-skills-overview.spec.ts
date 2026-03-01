import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillsOverview } from './home-skills-overview';

describe('HomeSkillsOverview', () => {
  let component: HomeSkillsOverview;
  let fixture: ComponentFixture<HomeSkillsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSkillsOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSkillsOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
