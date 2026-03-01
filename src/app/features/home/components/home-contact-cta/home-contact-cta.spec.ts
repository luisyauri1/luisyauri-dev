import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactCta } from './home-contact-cta';

describe('HomeContactCta', () => {
  let component: HomeContactCta;
  let fixture: ComponentFixture<HomeContactCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContactCta],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContactCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
