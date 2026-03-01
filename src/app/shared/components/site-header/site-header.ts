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
    '[class.site-header--scrolled]': 'headerScrolled',
    '(document:keydown.escape)': 'onEscapeKey()',
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class SiteHeader implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly bodyLockClass = 'is-mobile-menu-open';
  private readonly scrollThreshold = 14;

  protected mobileMenuOpen = false;
  protected headerScrolled = (this.document.defaultView?.scrollY ?? 0) > this.scrollThreshold;
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

  protected onWindowScroll(): void {
    const currentScroll = this.document.defaultView?.scrollY ?? 0;
    this.headerScrolled = currentScroll > this.scrollThreshold;
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.bodyLockClass);
  }

  private setMobileMenuState(isOpen: boolean): void {
    this.mobileMenuOpen = isOpen;
    this.document.body.classList.toggle(this.bodyLockClass, isOpen);
  }
}
