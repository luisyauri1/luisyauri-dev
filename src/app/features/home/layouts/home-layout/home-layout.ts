import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from '@shared/components/site-footer/site-footer';
import { SiteHeader } from '@shared/components/site-header/site-header';

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss',
})
export class HomeLayout {}
