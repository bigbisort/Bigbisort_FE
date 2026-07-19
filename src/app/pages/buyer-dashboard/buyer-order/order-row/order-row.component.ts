import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BuyerOrder, UiOrderStatus } from '../buyer-order.model';
import { getProductDisplay } from '../../shared/product-display.util';

@Component({
  selector: 'tr[app-order-row]',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.scss'],
  standalone: false,
  host: {
    '[class.selected]': 'selected',
    '(click)': 'onClick()',
  },
})
export class OrderRowComponent {
  @Input() order!: BuyerOrder;
  @Input() uiStatus: UiOrderStatus = 'PROCESSING';
  @Input() amount = 0;
  @Input() selected = false;
  @Output() rowClick = new EventEmitter<BuyerOrder>();

  get product() {
    return this.order.productResponseBeanSet?.[0];
  }

  get thumb() {
    return getProductDisplay(this.product?.productName || '', this.product?.category);
  }

  get displayOrderId(): string {
    return this.order.orderNumber ? `#${this.order.orderNumber}` : `#ORD-${this.order.orderId.slice(0, 8).toUpperCase()}`;
  }

  onClick(): void {
    this.rowClick.emit(this.order);
  }
}
