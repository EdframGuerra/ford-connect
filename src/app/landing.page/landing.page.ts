import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone:false,
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingPage implements OnInit, OnDestroy {

  allowNavigation: boolean = false;

  countdown: number = 30;

  private countdownInterval: any;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {

    this.renderer.addClass(document.body, 'landing-page-background');


    this.startCountdown();


    setTimeout(() => {
      this.allowNavigation = true;
      console.log('Navegação permitida após 30 segundos.');

      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
    }, 30000);
  }

  ngOnDestroy(): void {

    this.renderer.removeClass(document.body, 'landing-page-background');

    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }


  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {

        clearInterval(this.countdownInterval);
      }
    }, 1000); // Atualiza a cada 1 segundo
  }


  goToLogin(): void {
    if (this.allowNavigation) {
      this.router.navigate(['/login']);
    } else {
      console.log('Aguarde o vídeo carregar e o tempo mínimo passar.');

    }
  }

  goToCarouselLink(): void {
    
  }
}
