import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'bigbisort-frontend';

  constructor(public auth: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return !!this.auth.getRole();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }

  isDashboardRoute(): boolean {
    const url = this.router.url;
    return url.startsWith('/seller') || url.startsWith('/buyer') || url.startsWith('/admin') || url.startsWith('/onboarding');
  }
}
