import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BuyerDashboardComponent } from './pages/buyer-dashboard/buyer-dashboard.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { RoleGuard } from './guards/role.guard';
import { BuyerOrderComponent } from './pages/buyer-dashboard/buyer-order/buyer-order.component';
import { HomeComponent } from './home-dashboard/home/home.component';
import { AboutUsComponent } from './home-dashboard/about-us/about-us.component';
import { ProductsComponent } from './home-dashboard/products/products.component';
import { ContactComponent } from './home-dashboard/contact/contact.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { CategoryComponent } from './home-dashboard/category/category.component';
import { NewArrivalsComponent } from './pages/buyer-dashboard/new-arrivals/new-arrivals.component';
import { WatchListComponent } from './pages/buyer-dashboard/watch-list/watch-list.component';
import { BuyersproductsComponent } from './pages/buyer-dashboard/buyersproducts/buyersproducts.component';
import { PrdlandpgComponent } from './home-dashboard/prdlandpg/prdlandpg.component';
import { AppleComponent } from './home-dashboard/30_Products/apple/apple.component';
import { AvocadoComponent } from './home-dashboard/30_Products/avocado/avocado.component';
import { CarrotComponent } from './home-dashboard/30_Products/carrot/carrot.component';
import { BananaComponent } from './home-dashboard/30_Products/banana/banana.component';
import { PineappleComponent } from './home-dashboard/30_Products/pineapple/pineapple.component';
import { CoconutComponent } from './home-dashboard/30_Products/coconut/coconut.component';
import { PepperComponent } from './home-dashboard/30_Products/pepper/pepper.component';

// Onboarding Components
import { OnboardingLayoutComponent } from './pages/seller-onboarding/onboarding-layout/onboarding-layout.component';
import { Step1IdentityComponent } from './pages/seller-onboarding/step1-identity/step1-identity.component';
import { Step2VerificationComponent } from './pages/seller-onboarding/step2-verification/step2-verification.component';
import { Step3FarmComponent } from './pages/seller-onboarding/step3-farm/step3-farm.component';
import { Step4ProductsComponent } from './pages/seller-onboarding/step4-products/step4-products.component';

const routes: Routes = [

{
    path: '',
    component: HomeDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'category/:type', component: CategoryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'prdland', component: PrdlandpgComponent },
      { path: 'apple', component: AppleComponent },
      { path: 'avocado', component: AvocadoComponent },
      { path: 'carrot', component: CarrotComponent },
      { path: 'banana', component: BananaComponent },
      { path: 'pineapple', component: PineappleComponent },
      { path: 'coconut', component: CoconutComponent },
      { path: 'pepper', component: PepperComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'YWRtaW4=', component: AdminLoginComponent },

  // Seller Onboarding Wizard
  {
    path: 'onboarding',
    component: OnboardingLayoutComponent,
    children: [
      { path: '', redirectTo: 'identity', pathMatch: 'full' },
      { path: 'identity', component: Step1IdentityComponent },
      { path: 'verification', component: Step2VerificationComponent },
      { path: 'farm', component: Step3FarmComponent },
      { path: 'products', component: Step4ProductsComponent },
    ]
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'ADMIN' }
  },
  {
    path: 'seller',
    redirectTo: 'seller/products',
    pathMatch: 'full'
  },
  {
    path: 'seller/products',
    loadComponent: () => import('./pages/seller/products/product-list/product-list.component').then(m => m.ProductListComponent),
    canActivate: [RoleGuard],
    data: { expectedRole: 'SELLER' }
  },
  {
    path: 'seller/products/add-product',
    loadComponent: () => import('./pages/seller/products/add-product/add-product.component').then(m => m.AddProductComponent),
    canActivate: [RoleGuard],
    data: { expectedRole: 'SELLER' }
  },
  {
    path: 'seller/products/edit-product/:id',
    loadComponent: () => import('./pages/seller/products/edit-product/edit-product.component').then(m => m.EditProductComponent),
    canActivate: [RoleGuard],
    data: { expectedRole: 'SELLER' }
  },

 {
  path: 'buyer',
  component: BuyerDashboardComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'BUYER' }
},
{
  path: 'buyer/orders',
  component: BuyerOrderComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'BUYER' }
},
{
  path: 'buyer/newarr',
  component: NewArrivalsComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'BUYER' }
},
{
  path: 'buyer/WL',
  component: WatchListComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'BUYER' }
},
{
  path: 'buyer/categories',
  component: BuyersproductsComponent,
  canActivate: [RoleGuard],
  data: { expectedRole: 'BUYER' }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
