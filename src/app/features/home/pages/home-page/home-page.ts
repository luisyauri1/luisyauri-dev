import { Component } from '@angular/core';
import { HomeExperienceHighlights } from '../../components/home-experience-highlights/home-experience-highlights';
import { HomeHero } from '../../components/home-hero/home-hero';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';

@Component({
  selector: 'app-home-page',
  imports: [SiteHeader, HomeHero, HomeExperienceHighlights],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
