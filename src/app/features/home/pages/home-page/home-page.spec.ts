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

  describe('seo metadata', () => {
    it('should set page title', () => {
      fixture.detectChanges();

      const title = TestBed.inject(Title);

      expect(title.getTitle()).toContain('Luis Yauri');
    });

    it('should set meta description', () => {
      fixture.detectChanges();

      const meta = TestBed.inject(Meta);

      expect(meta.getTag("name='description'")?.content).toContain('Portafolio profesional');
    });

    it('should set og:url meta tag', () => {
      fixture.detectChanges();

      const meta = TestBed.inject(Meta);

      expect(meta.getTag("property='og:url'")?.content).toBe('https://luisyauri.dev/');
    });

    it('should set canonical link', () => {
      fixture.detectChanges();

      const document = TestBed.inject(DOCUMENT);

      expect(document.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(
        'https://luisyauri.dev/',
      );
    });
  });
});
