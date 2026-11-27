import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  CATALOG_CATEGORIES, CatalogCategory, CatalogProduct, productsIn
} from '../catalog.data';

@Component({
    selector: 'app-prdlandpg',
    templateUrl: './prdlandpg.component.html',
    styleUrls: ['./prdlandpg.component.scss'],
    standalone: false
})
export class PrdlandpgComponent implements OnInit, OnDestroy {

  categories = CATALOG_CATEGORIES;

  // null = show the category cards; otherwise the category whose products are listed.
  selected: CatalogCategory | null = null;
  products: CatalogProduct[] = [];

  private sub?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // /prdland?category=fruits - kept in the URL so a category can be linked to.
    this.sub = this.route.queryParamMap.subscribe(params => {
      const slug = params.get('category');
      this.selected = this.categories.find(c => c.slug === slug) || null;
      this.products = this.selected ? productsIn(this.selected.slug) : [];
      window.scrollTo({ top: 0 });
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  count(slug: string): number {
    return productsIn(slug).length;
  }
}
