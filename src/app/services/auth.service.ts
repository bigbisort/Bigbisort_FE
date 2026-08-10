import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiBaseUrl;
  public tokenExpired$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  notifyTokenExpired() {
    this.tokenExpired$.next(true);
  }

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

  /**
   * Google Sign-In for Buyer / Seller / Admin. Posts the Google ID token to
   * the backend, which verifies it with Google and either logs in an
   * existing account or provisions a new one (except ADMIN — see backend
   * GoogleOAuth2Service, admin accounts are never auto-created).
   *
   * Note: on failure the backend still responds 200 with a `message`
   * describing the problem rather than an HTTP error status — callers must
   * check `res.accessToken`, not just subscribe to `error`.
   */
  googleLogin(
    idToken: string,
    authenticationType: 'BUYER' | 'SELLER' | 'ADMIN'
  ): Observable<any> {
    const url = `${this.apiUrl}/auth/google-login`;
    return this.http.post(url, { idToken, authenticationType });
  }

  /**
   * Send OTP to mobile number
   */
  sendOtp(data: { mobile: string }): Observable<any> {
    const url = `${this.apiUrl}/auth/send-otp`;
    return this.http.post(url, { phoneNumber: '+91' + data.mobile, channel: 'sms' });
  }

  /**
   * Verify OTP
   */
  verifyOtp(data: { mobile: string; otp: string }): Observable<any> {
    const url = `${this.apiUrl}/auth/validate-otp`;
    return this.http.post(url, { phoneNumber: '+91' + data.mobile, code: data.otp });
  }

  // ✅ ROLE HANDLING
  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // ✅ TOKEN HANDLING
  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  // ✅ USER ID (generic account id, present for buyer/seller/admin alike)
  setUserId(userId: string) {
    sessionStorage.setItem('userId', userId);
  }

  getUserId(): string | null {
    return sessionStorage.getItem('userId');
  }

  // ✅ ADMIN HELPERS
  setAdminId(adminId: string) {
    sessionStorage.setItem('adminId', adminId);
  }

  getAdminId(): string | null {
    return sessionStorage.getItem('adminId');
  }

  // ✅ SELLER HELPERS
  setSellerId(sellerId: string) {
    localStorage.setItem('sellerId', sellerId);
  }

  getSellerId(): string | null {
    return localStorage.getItem('sellerId');
  }

  setSellerName(name: string) {
    localStorage.setItem('sellerName', name);
  }

  getSellerName(): string | null {
    return localStorage.getItem('sellerName');
  }

  setSellerEmail(email: string) {
    localStorage.setItem('sellerEmail', email);
  }

  setSellerPhone(phone: string) {
    localStorage.setItem('sellerPhone', phone);
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

  setBuyerCountry(country: string) {
    sessionStorage.setItem('buyerCountry', country);
  }

  getBuyerCountry(): string | null {
    return sessionStorage.getItem('buyerCountry');
  }

  setBuyerCompany(company: string) {
    sessionStorage.setItem('buyerCompany', company);
  }

  getBuyerCompany(): string | null {
    return sessionStorage.getItem('buyerCompany');
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
    localStorage.removeItem('adminName');
    localStorage.removeItem('sellerId');
    localStorage.removeItem('sellerName');
    localStorage.removeItem('sellerEmail');
    localStorage.removeItem('sellerPhone');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('adminId');
    sessionStorage.removeItem('buyerId');
    sessionStorage.removeItem('buyerName');
    sessionStorage.removeItem('buyerCountry');
    sessionStorage.removeItem('buyerCompany');
  }
}
