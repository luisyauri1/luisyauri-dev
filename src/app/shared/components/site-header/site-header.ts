import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { ArrowUpRight, LucideAngularModule, Menu, X } from 'lucide-angular/src/icons';
import { UiButton } from '../ui-button/ui-button';

type NavItem = {
  label: string;
  href: string;
};

@Component({
  selector: 'app-site-header',
  imports: [UiButton, LucideAngularModule],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '(document:keydown.escape)': 'onEscapeKey()',
  },
})
export class SiteHeader implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly bodyLockClass = 'is-mobile-menu-open';

  protected mobileMenuOpen = false;
  protected readonly menuIcon = Menu;
  protected readonly closeIcon = X;
  protected readonly linkIcon = ArrowUpRight;

  protected readonly navItems: NavItem[] = [
    { label: 'Sobre mi', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Skills', href: '#skills' },
  ];

  protected toggleMobileMenu(): void {
    this.setMobileMenuState(!this.mobileMenuOpen);
  }

  protected closeMobileMenu(): void {
    this.setMobileMenuState(false);
  }

  protected onEscapeKey(): void {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.bodyLockClass);
  }

  private setMobileMenuState(isOpen: boolean): void {
    this.mobileMenuOpen = isOpen;
    this.document.body.classList.toggle(this.bodyLockClass, isOpen);
  }
}
