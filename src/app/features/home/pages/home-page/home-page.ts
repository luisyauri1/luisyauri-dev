import { Component } from '@angular/core';
import { HomeExperienceHighlights } from '../../components/home-experience-highlights/home-experience-highlights';
import { HomeHero } from '../../components/home-hero/home-hero';
import { HomeSkillsOverview } from '../../components/home-skills-overview/home-skills-overview';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';

@Component({
  selector: 'app-home-page',
  imports: [SiteHeader, HomeHero, HomeExperienceHighlights, HomeSkillsOverview],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
