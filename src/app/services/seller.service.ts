import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private apiUrl = 'http://localhost:8081/bigbisort-imp-exp/seller';

  constructor(private http: HttpClient) {}

  getDashboardSummary(sellerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${sellerId}/dashboard/summary`);
  }
}
