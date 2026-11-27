import { Component, ElementRef, ViewChild } from '@angular/core';
import { CATALOG_CATEGORIES, productsIn } from '../catalog.data';

interface MainstreamProduct {
  name: string;
  category: string;
  image: string;
  link: string;
  origin: string;
  varieties: string;
  shelfLife: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

  // Shared with the products landing page (/prdland), so the counts are real.
  categories = CATALOG_CATEGORIES;

  count(slug: string): number {
    return productsIn(slug).length;
  }

  // Same products, routes and facts as the pages under home-dashboard/30_Products.
  mainstream: MainstreamProduct[] = [
    { name: 'Apple', category: 'Fruits', image: 'assets/images/Home/products/apple.jpg', link: '/apple',
      origin: 'J&K, Himachal, Uttarakhand, Arunachal', varieties: 'Ambri, McIntosh, Granny Smith, Honeycrisp', shelfLife: '4–8 months (cold storage)' },
    { name: 'Avocado', category: 'Fruits', image: 'assets/images/Home/products/avocado.jpg', link: '/avocado',
      origin: 'Karnataka, Tamil Nadu, Kerala, Maharashtra', varieties: 'Hass, Fuerte, Indian Green, Pollock', shelfLife: '2–4 weeks (5–7°C cold storage)' },
    { name: 'Banana', category: 'Fruits', image: 'assets/images/Home/products/banana.jpg', link: '/banana',
      origin: 'Tamil Nadu, Maharashtra, Gujarat, Karnataka, West Bengal', varieties: 'Cavendish, Robusta, Rasthali, Poovan, Nendran', shelfLife: '2–3 weeks (cold chain)' },
    { name: 'Pineapple', category: 'Fruits', image: 'assets/images/Home/products/pineapple.jpg', link: '/pineapple',
      origin: 'West Bengal, Assam, Kerala, Karnataka, Odisha, Meghalaya', varieties: 'Kew, Queen, Mauritius', shelfLife: '1–2 weeks (refrigerated)' },
    { name: 'Carrot', category: 'Vegetables', image: 'assets/images/Home/products/carrot.jpg', link: '/carrot',
      origin: 'Punjab, Haryana, Karnataka, Uttar Pradesh', varieties: 'Pusa Rudhira, Nantes, Ooty-1, Pusa Kesar', shelfLife: '2–3 weeks (0–2°C cold storage)' },
    { name: 'Black Pepper', category: 'Spices', image: 'assets/images/Home/products/pepper.jpg', link: '/pepper',
      origin: 'Kerala, Karnataka, Tamil Nadu', varieties: 'Malabar, Panniyur varieties', shelfLife: 'Years (dried)' },
    { name: 'Coconut', category: 'Coconut & Tropical', image: 'assets/images/Home/products/coconut.jpg', link: '/coconut',
      origin: 'Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Goa', varieties: 'Tall, Dwarf and Hybrid coconuts', shelfLife: '2–3 months (whole nut); longer for copra' }
  ];

  @ViewChild('mainstreamTrack') private track?: ElementRef<HTMLElement>;

  scrollMainstream(direction: 1 | -1): void {
    const el = this.track?.nativeElement;
    if (!el) { return; }
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.8, 280), behavior: 'smooth' });
  }
}
