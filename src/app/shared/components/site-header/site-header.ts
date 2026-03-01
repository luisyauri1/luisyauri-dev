import { Component } from '@angular/core';
import { UiButton } from '../ui-button/ui-button';

type NavItem = {
  label: string;
  href: string;
};

@Component({
  selector: 'app-site-header',
  imports: [UiButton],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly navItems: NavItem[] = [
    { label: 'Sobre mi', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Skills', href: '#skills' },
  ];
}
