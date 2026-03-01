import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-projects-preview',
  imports: [RouterLink],
  templateUrl: './home-projects-preview.html',
  styleUrl: './home-projects-preview.scss',
})
export class HomeProjectsPreview {
  protected readonly projects = [
    {
      title: 'Plataforma financiera en banca',
      stack: 'Angular · TypeScript · RxJS',
      summary:
        'Implementación de funcionalidades críticas, soporte de producción y mejoras continuas.',
    },
    {
      title: 'Arquitectura de microfrontends',
      stack: 'Angular · REST · GraphQL',
      summary:
        'Desarrollo modular para escalar productos digitales en múltiples equipos y entornos.',
    },
    {
      title: 'Soluciones web corporativas',
      stack: 'Frontend · APIs · Cloud',
      summary:
        'Integración de servicios y mejoras de experiencia para aplicaciones de alto tráfico.',
    },
  ];
}
