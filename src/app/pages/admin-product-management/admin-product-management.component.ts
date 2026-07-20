import { Component, OnInit } from '@angular/core';
import {
  AdminProductDetailDto,
  AdminProductListDto,
  AdminProductManagementService,
} from 'src/app/services/admin-product-management.service';

type ReviewTab = 'REVIEW' | 'APPROVED' | 'MEDIA' | 'CATEGORIES';

@Component({
  selector: 'app-admin-product-management',
  templateUrl: './admin-product-management.component.html',
  styleUrls: ['./admin-product-management.component.scss'],
  standalone: false,
})
export class AdminProductManagementComponent implements OnInit {
  activeTab: ReviewTab = 'REVIEW';

  products: AdminProductListDto[] = [];
  totalProducts = 0;

  searchQuery = '';
  pageSize = 10;
  currentPage = 0;

  selectedProduct: AdminProductDetailDto | null = null;
  activeDetailTab: 'submission' | 'notes' | 'history' = 'submission';
  noteValue = '';
  saving = false;

  categories: string[] = [];
  private categoriesLoaded = false;

  constructor(private productService: AdminProductManagementService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private statusForTab(): string | undefined {
    if (this.activeTab === 'REVIEW') return 'PENDING_APPROVAL';
    if (this.activeTab === 'APPROVED') return 'APPROVED';
    return undefined;
  }

  loadProducts(): void {
    this.productService.getProducts(this.statusForTab(), this.searchQuery, this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        this.products = res.content;
        this.totalProducts = res.totalElements;
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.products = [];
        this.totalProducts = 0;
      },
    });
  }

  setTab(tab: ReviewTab): void {
    this.activeTab = tab;
    this.currentPage = 0;
    this.closeDetails();
    if (tab === 'REVIEW' || tab === 'APPROVED') {
      this.loadProducts();
    } else if (tab === 'CATEGORIES' && !this.categoriesLoaded) {
      this.productService.getCategories().subscribe({
        next: (categories) => {
          this.categories = categories;
          this.categoriesLoaded = true;
        },
        error: (err) => console.error('Error loading categories', err),
      });
    }
  }

  onSearch(): void {
    this.currentPage = 0;
    this.loadProducts();
  }

  goToPage(page: number): void {
    if (page < 0 || page * this.pageSize >= this.totalProducts) return;
    this.currentPage = page;
    this.loadProducts();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalProducts / this.pageSize));
  }

  openProductDetails(id: string): void {
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.selectedProduct = data;
        this.noteValue = data.adminNotes || '';
        this.activeDetailTab = 'submission';
      },
      error: (err) => console.error('Error loading product details', err),
    });
  }

  closeDetails(): void {
    this.selectedProduct = null;
  }

  setDetailTab(tab: 'submission' | 'notes' | 'history'): void {
    this.activeDetailTab = tab;
  }

  saveNotes(): void {
    if (!this.selectedProduct) return;
    this.productService.updateNotes(this.selectedProduct.id, this.noteValue).subscribe({
      next: () => (this.selectedProduct!.adminNotes = this.noteValue),
      error: (err) => console.error('Error saving notes', err),
    });
  }

  approve(): void {
    if (!this.selectedProduct) return;
    this.saving = true;
    this.productService.approveProduct(this.selectedProduct.id).subscribe({
      next: () => this.afterAction('APPROVED'),
      error: (err) => {
        console.error('Error approving product', err);
        this.saving = false;
      },
    });
  }

  requestChanges(): void {
    if (!this.selectedProduct) return;
    this.saving = true;
    this.productService.requestChanges(this.selectedProduct.id, this.noteValue).subscribe({
      next: () => this.afterAction('PENDING_UPDATES'),
      error: (err) => {
        console.error('Error requesting changes', err);
        this.saving = false;
      },
    });
  }

  reject(): void {
    if (!this.selectedProduct) return;
    this.saving = true;
    this.productService.rejectProduct(this.selectedProduct.id, this.noteValue).subscribe({
      next: () => this.afterAction('REJECTED'),
      error: (err) => {
        console.error('Error rejecting product', err);
        this.saving = false;
      },
    });
  }

  private afterAction(newStatus: string): void {
    this.saving = false;
    if (this.selectedProduct) {
      this.selectedProduct.status = newStatus;
      this.selectedProduct.adminNotes = this.noteValue;
    }
    this.loadProducts();
  }

  statusLabel(status: string): string {
    if (!status) return '';
    return status
      .split('_')
      .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
      .join(' ');
  }

  statusClass(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'badge-approved';
      case 'REJECTED':
        return 'badge-rejected';
      case 'PENDING_UPDATES':
        return 'badge-updates';
      case 'PENDING_APPROVAL':
        return 'badge-pending';
      default:
        return 'badge-default';
    }
  }
}
