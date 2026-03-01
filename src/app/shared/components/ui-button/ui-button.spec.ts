import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButton } from './ui-button';

describe('UiButton', () => {
  let component: UiButton;
  let fixture: ComponentFixture<UiButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButton],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('computedAriaLabel', () => {
    it('should return label when ariaLabel is not provided', () => {
      component.label = 'Contactar';

      expect((component as unknown as { computedAriaLabel: string }).computedAriaLabel).toBe(
        'Contactar',
      );
    });

    it('should return ariaLabel when provided', () => {
      component.ariaLabel = 'Abrir menu';

      expect((component as unknown as { computedAriaLabel: string }).computedAriaLabel).toBe(
        'Abrir menu',
      );
    });
  });

  describe('iconSize', () => {
    it('should return 18 for md size', () => {
      component.size = 'md';

      expect((component as unknown as { iconSize: number }).iconSize).toBe(18);
    });

    it('should return 16 for sm size', () => {
      component.size = 'sm';

      expect((component as unknown as { iconSize: number }).iconSize).toBe(16);
    });
  });
});
