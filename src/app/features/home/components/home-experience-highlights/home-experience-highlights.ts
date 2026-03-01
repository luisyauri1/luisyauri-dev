import { Component } from '@angular/core';

type ExperienceHighlight = {
  title: string;
  period: string;
  description: string;
};

@Component({
  selector: 'app-home-experience-highlights',
  imports: [],
  templateUrl: './home-experience-highlights.html',
  styleUrl: './home-experience-highlights.scss',
})
export class HomeExperienceHighlights {
  protected readonly highlights: ExperienceHighlight[] = [
    {
      title: 'Senior Software Engineer | Encora',
      period: 'Ago 2024 - Ene 2026',
      description:
        'Desarrollo y mantenimiento de aplicaciones financieras de alta demanda, con enfoque en estabilidad, seguridad y despliegues a produccion.',
    },
    {
      title: 'Software Developer | BF Digital',
      period: 'Mar 2022 - Ago 2024',
      description:
        'Implementacion de arquitectura de microfrontends e integracion de APIs REST/GraphQL para productos digitales en banca.',
    },
    {
      title: 'Senior Frontend Developer | UMATEC',
      period: 'Ene 2021 - Ene 2022',
      description:
        'Liderazgo tecnico frontend, analisis funcional e integracion de APIs para soluciones corporativas con alcance regional.',
    },
    {
      title: 'Frontend Developer | DOAPPS',
      period: 'Ago 2019 - Nov 2020',
      description:
        'Desarrollo frontend, integracion de servicios y soporte tecnico para plataformas web orientadas a usuarios finales.',
    },
  ];
}
