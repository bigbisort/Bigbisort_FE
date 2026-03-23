import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Buyer Registration
   */
  registerBuyer(data: any): Observable<any> {
    const url = `${this.apiUrl}/auth/buyer/sign-up`;
    return this.http.post(url, data);
  }

  /**
   * Seller Registration
   */
  registerSeller(data: any): Observable<any> {
    const url = `${this.apiUrl}/auth/seller/sign-up`;
    return this.http.post(url, data);
  }

  /**
   * Admin Login
   */
  loginAdmin(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/api/admin/login`;
    return this.http.post(url, { username, password });
  }

  /**
   * Admin Registration
   */
  registerAdmin(data: any): Observable<any> {
    const url = `${this.apiUrl}/api/admin/register`;
    const headers = { 'ADMIN_SECRET': 'SUPER_SECRET_ADMIN_TOKEN_123' };
    return this.http.post(url, data, { headers });
  }

  /**
   * Login for Buyer / Seller / Admin
   */
  login(
    usernameOrPhone: string,
    passwordOrOtp: string,
    authenticationType: 'BUYER' | 'SELLER' | 'ADMIN'
  ): Observable<any> {

    const url = `${this.apiUrl}/auth/login`;

    return this.http.post(url, {
      username: usernameOrPhone,
      password: passwordOrOtp,
      authenticationType
    });
  }

  // ✅ ROLE HANDLING
  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // ✅ BUYER HELPERS
  setBuyerId(buyerId: string) {
    sessionStorage.setItem('buyerId', buyerId);
  }

  getBuyerId(): string | null {
    return sessionStorage.getItem('buyerId');
  }

  setBuyerName(name: string) {
    sessionStorage.setItem('buyerName', name);
  }

  getBuyerName(): string | null {
    return sessionStorage.getItem('buyerName');
  }

  // LOGOUT (no tokens involved)
  logout() {
    localStorage.removeItem('role');
    sessionStorage.removeItem('buyerId');
    sessionStorage.removeItem('buyerName');
  }
}
