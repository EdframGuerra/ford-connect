import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppStateService } from '../../services/app.state.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  isSidebarOpen: boolean = false;
  isHomeLinkEnabled: boolean = false;

  private isLandingPage: boolean = false;
  private appStateSubscription: any;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private appStateService: AppStateService
  ) {}

  ngOnInit(): void {
    this.appStateSubscription = this.appStateService.isMenuEnabled$.subscribe(
      (enabled) => {
        this.isHomeLinkEnabled = enabled;
      }
    );

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isLandingPage = event.urlAfterRedirects === '/';
        if (!this.isLandingPage) {
          this.isHomeLinkEnabled = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-scroll');
    if (this.appStateSubscription) {
      this.appStateSubscription.unsubscribe();
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  openSidebar(): void {
    if (!this.isLandingPage || this.isHomeLinkEnabled) {
      this.isSidebarOpen = true;
    }
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  handleHomeLinkClick(event: Event): void {
    if (!this.isHomeLinkEnabled) {
      event.preventDefault();
      console.log(
        'O link Home ainda não está habilitado. Aguarde 30 segundos na Landing Page.'
      );
    }
  }
}
