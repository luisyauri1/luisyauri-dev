import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let title: Title;
  let meta: Meta;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
    document = TestBed.inject(DOCUMENT);
  });

  it('should set title, canonical and metadata', () => {
    service.setPageSeo({
      title: 'Test title',
      description: 'Test description',
      path: '/test',
      noindex: true,
      keywords: 'k1, k2',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Test page',
      },
    });

    expect(title.getTitle()).toBe('Test title');
    expect(meta.getTag("name='description'")?.content).toBe('Test description');
    expect(meta.getTag("name='robots'")?.content).toBe('noindex, nofollow');
    expect(meta.getTag("name='keywords'")?.content).toBe('k1, k2');
    expect(meta.getTag("property='og:url'")?.content).toBe('https://luisyauri.dev/test');
    expect(document.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(
      'https://luisyauri.dev/test',
    );
    expect(document.querySelectorAll('script[data-seo-jsonld]').length).toBe(1);
  });

  it('should replace old structured data entries', () => {
    service.setPageSeo({
      title: 'First',
      description: 'First description',
      path: '/first',
      structuredData: { '@context': 'https://schema.org', '@type': 'Thing', name: 'First' },
    });

    service.setPageSeo({
      title: 'Second',
      description: 'Second description',
      path: '/second',
      structuredData: [
        { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Second' },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [] },
      ],
    });

    expect(document.querySelectorAll('script[data-seo-jsonld]').length).toBe(2);
    expect(meta.getTag("property='og:url'")?.content).toBe('https://luisyauri.dev/second');
  });
});
