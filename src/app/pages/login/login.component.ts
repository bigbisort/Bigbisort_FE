import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OnboardingService } from 'src/app/services/onboarding.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {

  loginType: 'buyer' | 'seller' | 'admin' = 'buyer';

  // Buyer
  username = '';
  password = '';

  // Seller
  phone = '';
  otp = '';

  // Admin
  adminUsername = '';
  adminPassword = '';

  loginErrors: any = {};

  // Register
  isRegisterVisible = false;

  registerData = {
    name: '',
    userName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    password: ''
  };

  registerErrors: any = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    private onboardingService: OnboardingService
  ) {}

  setLoginType(type: 'buyer' | 'seller' | 'admin') {
    this.loginType = type;
    this.clearFields();
  }

  private clearFields() {
    this.username = '';
    this.password = '';
    this.phone = '';
    this.otp = '';
    this.adminUsername = '';
    this.adminPassword = '';
    this.loginErrors = {};
  }

  showRegister(event: Event) {
    event.preventDefault();
    // If seller tab is active, redirect to onboarding step 1 (account creation happens there)
    if (this.loginType === 'seller') {
      this.router.navigate(['/onboarding/identity']);
      return;
    }
    this.isRegisterVisible = true;
  }

  cancelRegister() {
    this.isRegisterVisible = false;
  }

  // MAIN LOGIN
  login() {
    if (this.loginType === 'buyer') this.loginBuyer();
    if (this.loginType === 'seller') this.loginSeller();
    if (this.loginType === 'admin') this.loginAdmin();
  }

// BUYER LOGIN
private loginBuyer() {
  this.loginErrors = {};

  if (!this.username) this.loginErrors.username = 'Username required';
  if (!this.password) this.loginErrors.password = 'Password required';
  if (Object.keys(this.loginErrors).length) return;

  this.auth.login(this.username, this.password, 'BUYER').subscribe({
    next: (res: any) => {

      if (res.roles?.length) {
        let role = res.roles[0];
        if (role.startsWith('ROLE_')) role = role.substring(5);
        this.auth.setRole(role); // BUYER
      }

      if (res.userId) {
        this.auth.setBuyerId(res.userId);
        this.auth.setBuyerName(res.userName || '');
      }

      console.log('Saved role:', this.auth.getRole());

    this.router.navigateByUrl('/buyer').then(result => {
  console.log('Navigation result:', result);
});

    },
    error: () => alert('❌ Invalid buyer credentials')
  });
}


private loginSeller() {
  this.loginErrors = {};

  if (!this.username) this.loginErrors.username = 'Username required';
  if (!this.password) this.loginErrors.password = 'Password required';
  if (Object.keys(this.loginErrors).length) return;

  this.auth.login(this.username, this.password, 'SELLER').subscribe({
    next: (res: any) => {

      // ✅ SAVE ROLE
      if (res.roles?.length) {
        let role = res.roles[0];
        if (role.startsWith('ROLE_')) role = role.substring(5);
        this.auth.setRole(role); // SELLER
      }

      // ✅ SAVE SELLER ID
      if (res.userId) {
        this.auth.setSellerId(res.userId);
        this.auth.setSellerName(res.userName || '');
      }

      // Check onboarding status
      const sellerId = this.auth.getSellerId();
      if (sellerId) {
        this.onboardingService.getOnboardingStatus(sellerId).subscribe({
          next: (status: any) => {
            if (status.currentStep && status.currentStep <= 4) {
              // Onboarding incomplete — redirect to current step
              const stepMap: { [key: number]: string } = {
                1: 'identity',
                2: 'verification',
                3: 'farm',
                4: 'products'
              };
              const route = stepMap[status.currentStep] || 'identity';
              this.router.navigate([`/onboarding/${route}`]);
            } else {
              // Onboarding complete — go to dashboard
              this.router.navigateByUrl('/seller/products');
            }
          },
          error: () => {
            // Fallback to dashboard
            this.router.navigateByUrl('/seller/products');
          }
        });
      } else {
        this.router.navigateByUrl('/seller/products');
      }
    },
    error: () => alert('❌ Invalid seller credentials')
  });
}


  // SELLER LOGIN
  // private loginSeller() {
  //   this.loginErrors = {};

  //   if (!this.phone) this.loginErrors.phone = 'Phone required';
  //   if (!this.otp) this.loginErrors.otp = 'OTP required';
  //   if (Object.keys(this.loginErrors).length) return;

  //   this.auth.login(this.phone, this.otp, 'SELLER').subscribe({
  //     next: (res: any) => {
  //       alert('✅ Seller login successful');

  //       // ✅ SAVE ROLE
  //       if (res.roles?.length) {
  //         this.auth.setRole(res.roles[0]);
  //       }

  //       this.router.navigate(['/seller']);
  //     },
  //     error: () => alert('❌ Invalid seller credentials')
  //   });
  // }


  // SELLER LOGIN (username + password)



  // ADMIN LOGIN
  private loginAdmin() {
    this.loginErrors = {};

    if (!this.adminUsername) this.loginErrors.adminUsername = 'Username required';
    if (!this.adminPassword) this.loginErrors.adminPassword = 'Password required';
    if (Object.keys(this.loginErrors).length) return;

    this.auth.login(this.adminUsername, this.adminPassword, 'ADMIN').subscribe({
      next: (res: any) => {
        alert('✅ Admin login successful');

        // ✅ SAVE ROLE
        if (res.roles?.length) {
          let role = res.roles[0];
          if (role.startsWith('ROLE_')) role = role.substring(5);
          this.auth.setRole(role);
        }

        this.router.navigate(['/admin']);
      },
      error: () => alert('❌ Invalid admin credentials')
    });
  }

  // REGISTER USER (Buyer or Seller)
  register() {
    this.registerErrors = {};

    if (!this.registerData.userName) this.registerErrors.userName = 'Username required';
    if (!this.registerData.email) this.registerErrors.email = 'Email required';
    if (!this.registerData.phone) this.registerErrors.phone = 'Phone required';
    if (!this.registerData.password) this.registerErrors.password = 'Password required';

    if (Object.keys(this.registerErrors).length) return;

    const request = this.loginType === 'seller' 
      ? this.auth.registerSeller(this.registerData) 
      : this.auth.registerBuyer(this.registerData);

    request.subscribe({
      next: () => {
        alert('✅ Registration successful. Please login.');
        this.isRegisterVisible = false;

        this.username = this.registerData.userName;
        this.password = this.registerData.password;
      },
      error: (err: any) => alert('❌ Registration failed')
    });
  }
}
