import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private baseUrl = `${environment.apiBaseUrl}/watch-list`;

  constructor(private http: HttpClient) {}

  // Add to watchlist (already done earlier)
  addToWatchList(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, payload);
  }

  // ✅ New method: Get watchlist by buyerId
  getWatchList(buyerId: string): Observable<any> {
    const payload = { buyerId };
    return this.http.post(`${this.baseUrl}/filter`, payload);
  }

  removeFromWatchList(buyerId: string, productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove`, { params: { buyerId, productId } });
  }

  getSavedProductIds(buyerId: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/ids`, { params: { buyerId } });
  }
}
