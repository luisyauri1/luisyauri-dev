import { Component, Input } from '@angular/core';

type UiButtonVariant = 'primary' | 'ghost';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton {
  @Input() public label = 'Button';
  @Input() public href?: string;
  @Input() public type: 'button' | 'submit' | 'reset' = 'button';
  @Input() public variant: UiButtonVariant = 'primary';
}
