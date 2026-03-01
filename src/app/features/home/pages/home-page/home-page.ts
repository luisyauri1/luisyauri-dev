import { Component, OnInit, inject } from '@angular/core';
import { HomeContactCta } from '../../components/home-contact-cta/home-contact-cta';
import { HomeExperienceHighlights } from '../../components/home-experience-highlights/home-experience-highlights';
import { HomeHero } from '../../components/home-hero/home-hero';
import { HomeSkillsOverview } from '../../components/home-skills-overview/home-skills-overview';
import { SiteFooter } from '../../../../shared/components/site-footer/site-footer';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';
import { SeoService } from '../../../../core/seo/seo.service';

@Component({
  selector: 'app-home-page',
  imports: [
    SiteHeader,
    HomeHero,
    HomeExperienceHighlights,
    HomeSkillsOverview,
    HomeContactCta,
    SiteFooter,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setPageSeo({
      title: 'Luis Yauri | Software Engineer Frontend Angular y React',
      description:
        'Portafolio profesional de Luis Yauri, Software Engineer con +5 años creando soluciones web escalables en banca, fintech y corporativo.',
      path: '/',
      type: 'profile',
      keywords:
        'Luis Yauri, Software Engineer, Frontend Engineer, Angular, React, TypeScript, Portafolio, Lima Peru',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Luis David Yauri Martinez',
        url: 'https://luisyauri.dev/',
        jobTitle: 'Software Engineer',
        knowsAbout: [
          'Angular',
          'React',
          'TypeScript',
          'Microfrontends',
          'APIs REST',
          'GraphQL',
          'Azure',
          'AWS',
          'Google Cloud',
        ],
        sameAs: ['https://www.linkedin.com/in/luisyaurimartinez/', 'https://github.com/luisyauri1'],
      },
    });
  }
}
