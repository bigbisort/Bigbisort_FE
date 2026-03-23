import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
  standalone: false
})
export class AdminLoginComponent {
  adminUsername = '';
  adminPassword = '';
  loginErrors: any = {};

  isRegisterVisible = false;
  registerData = {
    userName: '', email: '', phone: '', password: '', name: '', city: '', state: '', zip: '', country: '', address: ''
  };
  registerErrors: any = {};

  constructor(private auth: AuthService, private router: Router) {}

  showRegister(event: Event) { event.preventDefault(); this.isRegisterVisible = true; }
  cancelRegister() { this.isRegisterVisible = false; }

  loginAdmin() {
    this.loginErrors = {};
    if (!this.adminUsername) this.loginErrors.adminUsername = 'Username required';
    if (!this.adminPassword) this.loginErrors.adminPassword = 'Password required';
    if (Object.keys(this.loginErrors).length) return;

    this.auth.loginAdmin(this.adminUsername, this.adminPassword).subscribe({
      next: (res: any) => {
        if (res.roles?.length) {
          this.auth.setRole(res.roles[0]); // ADMIN
        }
        this.router.navigateByUrl('/admin');
      },
      error: () => alert('❌ Invalid admin credentials')
    });
  }

  registerAdmin() {
    this.registerErrors = {};
    if (!this.registerData.userName) this.registerErrors.userName = 'Username required';
    if (!this.registerData.email) this.registerErrors.email = 'Email required';
    if (!this.registerData.phone) this.registerErrors.phone = 'Phone required';
    if (!this.registerData.password) this.registerErrors.password = 'Password required';

    if (Object.keys(this.registerErrors).length) return;

    this.auth.registerAdmin(this.registerData).subscribe({
      next: () => {
        alert('✅ Admin Registration successful. Please login.');
        this.isRegisterVisible = false;
        this.adminUsername = this.registerData.userName;
        this.adminPassword = this.registerData.password;
      },
      error: () => alert('❌ Admin Registration failed')
    });
  }
}
