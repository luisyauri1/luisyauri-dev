import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { provideRouter } from '@angular/router';

import { ProjectsPage } from './projects-page';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should configure seo metadata for projects', () => {
    fixture.detectChanges();

    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);
    const document = TestBed.inject(DOCUMENT);

    expect(title.getTitle()).toBe('Proyectos | Luis Yauri');
    expect(meta.getTag("property='og:url'")?.content).toBe('https://luisyauri.dev/projects');
    expect(meta.getTag("name='description'")?.content).toContain('Explora los proyectos');
    expect(document.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(
      'https://luisyauri.dev/projects',
    );
  });
});
