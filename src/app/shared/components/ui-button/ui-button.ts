import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular/src/icons';

type UiButtonVariant = 'primary' | 'ghost';
type UiButtonSize = 'md' | 'sm';
type UiButtonIconPosition = 'left' | 'right';

@Component({
  selector: 'app-ui-button',
  imports: [LucideAngularModule],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton {
  @Input() public label = 'Button';
  @Input() public href?: string;
  @Input() public type: 'button' | 'submit' | 'reset' = 'button';
  @Input() public variant: UiButtonVariant = 'primary';
  @Input() public size: UiButtonSize = 'md';
  @Input() public icon?: LucideIconData;
  @Input() public iconPosition: UiButtonIconPosition = 'left';
  @Input() public iconOnly = false;
  @Input() public ariaLabel?: string;
  @Input() public ariaControls?: string;
  @Input() public ariaExpanded?: boolean | null;

  protected get computedAriaLabel(): string {
    return this.ariaLabel ?? this.label;
  }

  protected get iconSize(): number {
    return this.size === 'sm' ? 16 : 18;
  }
}
