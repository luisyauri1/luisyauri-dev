import { Component } from '@angular/core';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';

@Component({
  selector: 'app-home-page',
  imports: [SiteHeader],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
