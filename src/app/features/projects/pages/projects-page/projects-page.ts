import { Component, OnInit, inject } from '@angular/core';
import { SiteFooter } from '../../../../shared/components/site-footer/site-footer';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';
import { SeoService } from '../../../../core/seo/seo.service';

@Component({
  selector: 'app-projects-page',
  imports: [SiteHeader, SiteFooter],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setPageSeo({
      title: 'Proyectos | Luis Yauri',
      description:
        'Explora los proyectos de Luis Yauri: implementación frontend, arquitectura, integración de APIs y resultados en productos digitales.',
      path: '/projects',
      keywords:
        'Proyectos frontend, Angular projects, React projects, Portafolio desarrollador, Luis Yauri',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Proyectos de Luis Yauri',
        url: 'https://luisyauri.dev/projects',
        description:
          'Página de proyectos de software con foco en frontend, arquitectura y delivery de producto.',
      },
    });
  }
}
