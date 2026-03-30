import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { OnboardingService } from '../../../../services/onboarding.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId = '';
  
  // Read-only Form Model
  category = '';
  productName = '';
  productVariety = '';

  // Mutable Form Model
  description = '';
  harvestYear = '';
  harvestMonth = '';
  harvestDay = '';
  quantity: number | null = null;
  unit = 'KG';
  grade = '';
  packaging = 'Box';
  productStatus = '';

  measurementUnits: string[] = [];

  // Media
  productImage: File | null = null;
  productImageBase64: string | null = null;
  productVideoBase64: string | null = null;
  farmImageBase64: string | null = null;

  // Constants
  years = ['2026', '2027', '2028', '2029'];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  days = Array.from({length: 31}, (_, i) => (i + 1).toString().padStart(2, '0'));
  grades = ['Grade A', 'Grade B', 'Grade C', 'Premium'];

  isSubmitting = false;
  isLoading = true;
  errors: any = {};

  constructor(
    private productService: ProductService,
    private onboardingService: OnboardingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    if (this.productId) {
      this.loadMeasurementUnits();
      this.loadProduct();
    } else {
      this.router.navigate(['/seller/products']);
    }
  }

  loadMeasurementUnits() {
    this.onboardingService.getMeasurementUnits().subscribe({
      next: (res) => { 
        this.measurementUnits = res; 
      },
      error: (err) => { console.error('Failed to load measurement units', err); }
    });
  }

  loadProduct() {
    this.productService.getProductById(this.productId).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        
        // Map Backend properties
        this.category = res.category || '';
        this.productName = res.productName || '';
        this.description = res.description || '';
        this.productStatus = res.productStatus || 'PENDING_APPROVAL';

        if (res.product_image) {
           this.productImageBase64 = 'data:image/jpeg;base64,' + res.product_image;
        }

        if (res.varietiesList && res.varietiesList.length > 0) {
           const v = res.varietiesList[0];
           this.productVariety = v.varietyName || '';
           
           // parse harvestDate 2026-03-29
           if (v.harvestDate) {
              const parts = v.harvestDate.split('T')[0].split('-');
              if (parts.length === 3) {
                 this.harvestYear = parts[0];
                 const monthIdx = parseInt(parts[1], 10) - 1;
                 if (monthIdx >= 0 && monthIdx < 12) this.harvestMonth = this.months[monthIdx];
                 this.harvestDay = parts[2];
              }
           }
           
           this.quantity = v.estimatedQuantity ? parseInt(v.estimatedQuantity, 10) : null;
           // If backend returns KILOGRAM, we might need a fallback, but the UI constraint is sending exactly as received if it's enum Name like KG or TONNE
           this.unit = v.quantityMeasurementType || 'KG';
           this.grade = this.unmapGrade(v.grade);
           
           if (v.packingType) {
              const p = v.packingType.toLowerCase();
              if (p.includes('loose')) this.packaging = 'Loose';
              else if (p.includes('custom')) this.packaging = 'Custom';
              else this.packaging = 'Box';
           }
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        alert('Failed to load product details.');
        this.router.navigate(['/seller/products']);
      }
    });
  }

  unmapGrade(gradeEnum: string): string {
    if (!gradeEnum) return 'Grade A';
    switch (gradeEnum) {
      case 'GRADE_A': return 'Grade A';
      case 'GRADE_B': return 'Grade B';
      case 'GRADE_C': return 'Grade C';
      case 'GRADE_EXTRA': return 'Premium';
      default: return 'Grade A';
    }
  }

  selectPackaging(type: string) {
    this.packaging = type;
  }

  selectUnit(unit: string) {
    this.unit = unit;
  }

  // File Handlers
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) { this.errors.image = 'Max 15MB'; return; }
      this.productImage = file;
      this.errors.image = null;
      this.getBase64(file).then(data => this.productImageBase64 = data as string);
    }
  }

  onVideoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { this.errors.video = 'Max 50MB'; return; }
      this.getBase64(file).then(data => this.productVideoBase64 = data as string);
    }
  }

  onFarmImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) { this.errors.farmImage = 'Max 15MB'; return; }
      this.getBase64(file).then(data => this.farmImageBase64 = data as string);
    }
  }

  getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  validate(): boolean {
    this.errors = {};
    let isValid = true;
    
    if (!this.harvestYear || !this.harvestMonth || !this.harvestDay) { this.errors.harvestDate = 'Required'; isValid = false; }
    if (!this.quantity || this.quantity <= 0) { this.errors.quantity = 'Invalid quantity'; isValid = false; }
    if (!this.grade) { this.errors.grade = 'Grade required'; isValid = false; }
    if (!this.productImageBase64) { this.errors.image = 'At least 1 product image required'; isValid = false; }

    return isValid;
  }

  cancel() {
    this.router.navigate(['/seller/products']);
  }

  getMonthNumber(monthName: string): string {
    const m = this.months.indexOf(monthName) + 1;
    return m < 10 ? '0' + m : '' + m;
  }

  mapGrade(gradeText: string): string {
    switch (gradeText) {
      case 'Grade A': return 'GRADE_A';
      case 'Grade B': return 'GRADE_B';
      case 'Grade C': return 'GRADE_C';
      case 'Premium': return 'GRADE_EXTRA';
      default: return 'GRADE_A';
    }
  }

  save() {
    if (!this.validate()) return;
    this.isSubmitting = true;

    const sellerId = localStorage.getItem('sellerId') || 'temp-seller'; 
    let hardvestDate = `${this.harvestYear}-${this.getMonthNumber(this.harvestMonth)}-${this.harvestDay}`;

    const payload = {
      id: sellerId,
      authenticationType: 'SELLER',
      productRequestBeanList: [{
        productName: this.productName, // Unchanged logic structurally
        category: this.category,
        description: this.description || '',
        product_image: this.productImageBase64 && this.productImageBase64.includes(',') ? this.productImageBase64.split(',')[1] : null,
        varietiesRequestBeanList: [{
          varietyName: this.productVariety,
          description: this.description || '',
          harvestDate: hardvestDate,
          estimatedQuantity: this.quantity ? this.quantity.toString() : '0',
          quantityMeasurementType: this.unit,
          grade: this.mapGrade(this.grade),
          packingType: this.packaging.toUpperCase()
        }]
      }]
    };

    // Use updateProduct from productService
    this.productService.updateProduct(this.productId, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/seller/products']);
      },
      error: (err) => {
        this.isSubmitting = false;
        console.error(err);
        alert('Failed to update product');
      }
    });
  }
}
