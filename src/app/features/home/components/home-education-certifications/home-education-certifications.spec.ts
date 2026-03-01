import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEducationCertifications } from './home-education-certifications';

describe('HomeEducationCertifications', () => {
  let component: HomeEducationCertifications;
  let fixture: ComponentFixture<HomeEducationCertifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEducationCertifications],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEducationCertifications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
