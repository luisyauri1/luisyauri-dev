import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomeProjectsPreview } from './home-projects-preview';

describe('HomeProjectsPreview', () => {
  let component: HomeProjectsPreview;
  let fixture: ComponentFixture<HomeProjectsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProjectsPreview],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProjectsPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
