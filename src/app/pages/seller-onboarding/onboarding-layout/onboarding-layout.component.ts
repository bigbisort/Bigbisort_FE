import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss'],
  standalone: false
})
export class OnboardingLayoutComponent implements OnInit, OnDestroy {
  currentStep = 1;
  private routerSub!: Subscription;

  steps = [
    { num: 1, label: 'Identity', route: '/onboarding/identity' },
    { num: 2, label: 'Verification', route: '/onboarding/verification' },
    { num: 3, label: 'Farm', route: '/onboarding/farm' },
    { num: 4, label: 'Products', route: '/onboarding/products' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.detectStep(this.router.url);
    // Listen for route changes to update stepper
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.detectStep(event.urlAfterRedirects || event.url);
      });
  }

  ngOnDestroy() {
    if (this.routerSub) this.routerSub.unsubscribe();
  }

  private detectStep(url: string) {
    if (url.includes('products')) this.currentStep = 4;
    else if (url.includes('farm')) this.currentStep = 3;
    else if (url.includes('verification')) this.currentStep = 2;
    else this.currentStep = 1;
  }

  goBack() {
    if (this.currentStep > 1) {
      this.router.navigate([this.steps[this.currentStep - 2].route]);
    }
  }

  isStepCompleted(stepNum: number): boolean {
    return stepNum < this.currentStep;
  }

  isStepActive(stepNum: number): boolean {
    return stepNum === this.currentStep;
  }
}
