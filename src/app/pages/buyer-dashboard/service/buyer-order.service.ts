import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyerOrderService {
 private baseUrl = `${environment.apiBaseUrl}/buyer-order`;

  constructor(private http: HttpClient) {}

  filterBuyerOrders(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/filter`, payload);
  }

  getOrderStatusCounts(buyerId: string): Observable<any> {
    if (!buyerId) {
      throw new Error('buyerId is required');
    }
    const url = `${this.baseUrl}/status/count?buyerId=${buyerId}`;
    return this.http.get<any>(url);
  }
}
