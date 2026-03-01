import { Component } from '@angular/core';
import { SiteFooter } from '../../../../shared/components/site-footer/site-footer';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';

@Component({
  selector: 'app-projects-page',
  imports: [SiteHeader, SiteFooter],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
