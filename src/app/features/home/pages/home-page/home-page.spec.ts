import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { provideRouter } from '@angular/router';

import { HomePage } from './home-page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should configure seo metadata for home', () => {
    fixture.detectChanges();

    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);
    const document = TestBed.inject(DOCUMENT);

    expect(title.getTitle()).toContain('Luis Yauri');
    expect(meta.getTag("name='description'")?.content).toContain('Portafolio profesional');
    expect(meta.getTag("property='og:url'")?.content).toBe('https://luisyauri.dev/');
    expect(document.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(
      'https://luisyauri.dev/',
    );
  });
});
