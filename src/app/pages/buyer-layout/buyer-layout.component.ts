import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-buyer-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './buyer-layout.component.html',
  styleUrl: './buyer-layout.component.scss',
})
export class BuyerLayoutComponent implements OnInit {
  showUserMenu = false;
  buyerName = '';

  notificationCount = 5;
  messageCount = 3;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.buyerName = this.authService.getBuyerName() || '';
  }

  get initials(): string {
    if (!this.buyerName) return 'B';
    return this.buyerName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0].toUpperCase())
      .join('');
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
