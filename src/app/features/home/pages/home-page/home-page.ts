import { Component } from '@angular/core';
import { HomeContactCta } from '../../components/home-contact-cta/home-contact-cta';
import { HomeExperienceHighlights } from '../../components/home-experience-highlights/home-experience-highlights';
import { HomeHero } from '../../components/home-hero/home-hero';
import { HomeSkillsOverview } from '../../components/home-skills-overview/home-skills-overview';
import { SiteFooter } from '../../../../shared/components/site-footer/site-footer';
import { SiteHeader } from '../../../../shared/components/site-header/site-header';

@Component({
  selector: 'app-home-page',
  imports: [
    SiteHeader,
    HomeHero,
    HomeExperienceHighlights,
    HomeSkillsOverview,
    HomeContactCta,
    SiteFooter,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
