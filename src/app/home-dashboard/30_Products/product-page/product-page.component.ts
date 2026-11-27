import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CATEGORY_LABELS, MAP_PINS, MapPin, ProductPage, productPage } from './product-pages.data';
import { productPalette } from './product-palette';

// One page template for every product that has no hand-built page of its own
// (route /product/:slug). Content lives in the pages-*.ts files.
@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss'],
    standalone: false
})
export class ProductPageComponent implements OnInit, AfterViewInit, OnDestroy {

  product!: ProductPage;
  label = CATEGORY_LABELS["fruits"];
  images: string[] = [];
  pins: MapPin[] = [];
  enquiryOpen = false;
  /** CSS custom properties (--fp-*) derived from the product colour. */
  vars: Record<string, string> = {};

  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLDivElement>;
  private rafId: number | null = null;
  private paused = false;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const page = productPage(params.get('slug'));
      if (!page) {
        this.router.navigate(['/prdland']);
        return;
      }
      this.product = page;
      this.label = CATEGORY_LABELS[page.category];
      this.images = Array.from({ length: page.photos }, (_, i) => `assets/images/Prdpage/Catalog/${page.slug}/${i + 1}.jpg`);
      this.vars = productPalette(page.theme);
      this.pins = page.states.map(id => MAP_PINS[id]).filter(Boolean);
      window.scrollTo({ top: 0 });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.startAutoScroll(), 500);
  }

  ngOnDestroy(): void {
    if (this.rafId) { cancelAnimationFrame(this.rafId); }
    this.sub?.unsubscribe();
  }

  /** n-th photo, wrapping round when a page has fewer photos than slots. */
  img(i: number): string {
    return this.images[i % this.images.length];
  }

  setPaused(value: boolean): void {
    this.paused = value;
  }

  private startAutoScroll(): void {
    const el = this.scrollContainer?.nativeElement;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
    const step = () => {
      if (!this.paused) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) { el.scrollLeft = 0; } // cards are duplicated
      }
      this.rafId = requestAnimationFrame(step);
    };
    this.rafId = requestAnimationFrame(step);
  }
}
