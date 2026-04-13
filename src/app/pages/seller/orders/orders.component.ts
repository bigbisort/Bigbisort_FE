import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  // Mock Data mimicking the provided wireframe image
  orders = [
    { id: 1, productName: 'Apples', productSubtitle: 'Kashmir Apple', buyerName: 'Priya Exports', quantity: '400 kg', requestDate: '22 June 2026', status: 'Pending' },
    { id: 2, productName: 'Lettuce', productSubtitle: 'Iceberg Lettuce', buyerName: 'Dell Fresh', quantity: '300 kg', requestDate: '20 June 2026', status: 'Approved' },
    { id: 3, productName: 'Mangoes', productSubtitle: 'Alphonso', buyerName: 'Farm Select', quantity: '200 kg', requestDate: '18 June 2026', status: 'Rejected' },
    { id: 4, productName: 'Tomatoes', productSubtitle: 'Cherry', buyerName: 'Agro Mart', quantity: '150 kg', requestDate: '17 June 2026', status: 'Pending' }
  ];

  filteredOrders: any[] = [];
  paginatedOrders: any[] = [];

  searchTerm = '';
  selectedStatus = 'All Status';
  statusOptions = ['All Status', 'Pending', 'Approved', 'Rejected'];

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;

  constructor() {}

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    let temp = [...this.orders];

    if (this.searchTerm) {
      const lowerTerm = this.searchTerm.toLowerCase();
      temp = temp.filter(o => 
        o.productName.toLowerCase().includes(lowerTerm) || 
        o.buyerName.toLowerCase().includes(lowerTerm)
      );
    }

    if (this.selectedStatus !== 'All Status') {
      temp = temp.filter(o => o.status === this.selectedStatus);
    }

    this.filteredOrders = temp;
    this.totalPages = Math.ceil(this.filteredOrders.length / this.pageSize) || 1;
    
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }

    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedOrders = this.filteredOrders.slice(startIndex, startIndex + this.pageSize);
  }

  onSearch() {
    this.applyFilters();
  }

  onStatusChange() {
    this.applyFilters();
  }

  approve(order: any) {
    order.status = 'Approved';
    this.applyFilters();
  }

  reject(order: any) {
    order.status = 'Rejected';
    this.applyFilters();
  }

  view(order: any) {
    console.log('Viewing order:', order);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
