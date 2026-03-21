import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {

  constructor(private router: Router) {}



canActivate(route: ActivatedRouteSnapshot): boolean {
  const expectedRole = route.data['expectedRole'];
  const storedRole = localStorage.getItem('role');

  console.log('🛡 RoleGuard check');
  console.log('Expected role:', expectedRole);
  console.log('Stored role:', storedRole);

  if (storedRole === expectedRole) {
    console.log('✅ Role matched – access granted');
    return true;
  }

  console.log('❌ Role mismatch – redirecting to login');
  this.router.navigate(['/login']);
  return false;
}



}
