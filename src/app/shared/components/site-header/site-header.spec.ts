import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  let component: SiteHeader;
  let fixture: ComponentFixture<SiteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('mobile menu state', () => {
    it('should start closed', () => {
      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(false);
    });

    it('should open when toggle method is called', () => {
      (component as unknown as { toggleMobileMenu: () => void }).toggleMobileMenu();

      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(true);
    });

    it('should close when close method is called', () => {
      (component as unknown as { toggleMobileMenu: () => void }).toggleMobileMenu();
      (component as unknown as { closeMobileMenu: () => void }).closeMobileMenu();

      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(false);
    });
  });

  describe('body scroll lock', () => {
    it('should add lock class when menu opens', () => {
      const body = document.body;
      body.classList.remove('is-mobile-menu-open');
      (component as unknown as { toggleMobileMenu: () => void }).toggleMobileMenu();

      expect(body.classList.contains('is-mobile-menu-open')).toBe(true);
    });

    it('should remove lock class when menu closes', () => {
      const body = document.body;
      body.classList.remove('is-mobile-menu-open');
      (component as unknown as { toggleMobileMenu: () => void }).toggleMobileMenu();
      (component as unknown as { closeMobileMenu: () => void }).closeMobileMenu();

      expect(body.classList.contains('is-mobile-menu-open')).toBe(false);
    });

    it('should remove lock class on destroy', () => {
      document.body.classList.add('is-mobile-menu-open');
      fixture.destroy();

      expect(document.body.classList.contains('is-mobile-menu-open')).toBe(false);
    });
  });

  describe('mobile menu ui interactions', () => {
    function clickToggleButton(targetFixture: ComponentFixture<SiteHeader>): void {
      const toggleButton = targetFixture.nativeElement.querySelector(
        '.site-header__menu-toggle .ui-button',
      ) as HTMLButtonElement;
      toggleButton.click();
      targetFixture.detectChanges();
    }

    it('should open menu when toggle button is clicked', () => {
      fixture.detectChanges();
      clickToggleButton(fixture);

      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(true);
    });

    it('should render overlay when menu is open', () => {
      fixture.detectChanges();
      clickToggleButton(fixture);

      expect(fixture.nativeElement.querySelector('.site-header__mobile-overlay')).toBeTruthy();
    });

    it('should close menu when mobile cta is clicked', () => {
      fixture.detectChanges();
      clickToggleButton(fixture);

      const mobileCtaButton = fixture.nativeElement.querySelector(
        '.site-header__mobile-cta .ui-button',
      ) as HTMLButtonElement;
      mobileCtaButton.click();
      fixture.detectChanges();

      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(false);
    });

    it('should close menu when a mobile link is clicked', () => {
      fixture.detectChanges();
      clickToggleButton(fixture);

      const firstMobileLink = fixture.nativeElement.querySelector(
        '.site-header__mobile-link',
      ) as HTMLAnchorElement;
      firstMobileLink.click();
      fixture.detectChanges();

      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(false);
    });

    it('should close menu when close button is clicked', () => {
      fixture.detectChanges();
      clickToggleButton(fixture);

      const closeButton = fixture.nativeElement.querySelector(
        '.site-header__mobile-close .ui-button',
      ) as HTMLButtonElement;
      closeButton.click();
      fixture.detectChanges();

      expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(false);
    });
  });

  it('should close menu on escape key event', () => {
    fixture.detectChanges();
    const toggleButton = fixture.nativeElement.querySelector(
      '.site-header__menu-toggle .ui-button',
    ) as HTMLButtonElement;
    toggleButton.click();
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect((component as unknown as { mobileMenuOpen: boolean }).mobileMenuOpen).toBe(false);
  });
});
