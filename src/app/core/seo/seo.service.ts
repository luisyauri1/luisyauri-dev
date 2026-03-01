import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoConfig {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'profile' | 'article';
  imagePath?: string;
  keywords?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly siteUrl = 'https://luisyauri.dev';
  private readonly defaultType: NonNullable<SeoConfig['type']> = 'website';
  private readonly defaultTwitterCard = 'summary_large_image';
  private readonly jsonLdMarker = 'data-seo-jsonld';

  setPageSeo(config: SeoConfig): void {
    const absoluteUrl = this.toAbsoluteUrl(config.path);
    const absoluteImageUrl = this.toAbsoluteUrl(config.imagePath ?? '/luis.png');
    const robotsValue = config.noindex ? 'noindex, nofollow' : 'index, follow';

    this.title.setTitle(config.title);
    this.updateNameMeta('description', config.description);
    this.updateNameMeta('robots', robotsValue);
    this.updateNameMeta('twitter:card', this.defaultTwitterCard);
    this.updateNameMeta('twitter:title', config.title);
    this.updateNameMeta('twitter:description', config.description);
    this.updateNameMeta('twitter:image', absoluteImageUrl);

    if (config.keywords) {
      this.updateNameMeta('keywords', config.keywords);
    }

    this.updatePropertyMeta('og:type', config.type ?? this.defaultType);
    this.updatePropertyMeta('og:site_name', 'luisyauri.dev');
    this.updatePropertyMeta('og:title', config.title);
    this.updatePropertyMeta('og:description', config.description);
    this.updatePropertyMeta('og:url', absoluteUrl);
    this.updatePropertyMeta('og:image', absoluteImageUrl);

    this.setCanonicalUrl(absoluteUrl);
    this.setStructuredData(config.structuredData);
  }

  private updateNameMeta(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name='${name}'`);
  }

  private updatePropertyMeta(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property='${property}'`);
  }

  private toAbsoluteUrl(path: string): string {
    if (!path) {
      return this.siteUrl;
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private setCanonicalUrl(url: string): void {
    let link = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setStructuredData(
    payload?: Record<string, unknown> | Array<Record<string, unknown>>,
  ): void {
    const scripts = this.document.querySelectorAll(`script[${this.jsonLdMarker}]`);
    scripts.forEach((script) => script.remove());

    if (!payload) {
      return;
    }

    const entries = Array.isArray(payload) ? payload : [payload];
    for (const entry of entries) {
      const script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(this.jsonLdMarker, 'true');
      script.textContent = JSON.stringify(entry);
      this.document.head.appendChild(script);
    }
  }
}
