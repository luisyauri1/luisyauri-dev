import { Component } from '@angular/core';

type SocialLink = {
  label: string;
  href: string;
};

@Component({
  selector: 'app-home-hero',
  imports: [],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHero {
  protected readonly socialLinks: SocialLink[] = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luisyaurimartinez/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/luisyauri1',
    },
  ];
}
