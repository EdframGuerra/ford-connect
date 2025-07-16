import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page', // O seletor permanece 'app-landing-page'
  standalone:false,
  templateUrl: './landing.page.html', // O template é 'landing.page.html'
  styleUrls: ['./landing.page.css'], // O estilo é 'landing.page.css'
})
// A classe é LandingPage, conforme sua convenção e geração via CLI.
export class LandingPage implements OnInit, OnDestroy {
  // Propriedade para controlar a visibilidade e habilitação do link manual
  isLinkEnabled: boolean = false;
  // Propriedade para exibir o tempo restante (para o redirecionamento automático final)
  countdown: number = 90; // Inicia em 90 segundos (duração total do vídeo)

  private countdownInterval: any; // Variável para armazenar o ID do intervalo do contador

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Adiciona uma classe ao body para estilos específicos da landing page
    this.renderer.addClass(document.body, 'landing-page-background');

    // Inicia o contador regressivo para o redirecionamento automático final
    this.startCountdown();

    // Define um temporizador para habilitar o link manual após 30 segundos
    setTimeout(() => {
      this.isLinkEnabled = true; // Habilita a mensagem com o link "clique aqui"
      console.log('Link manual habilitado após 30 segundos.');
    }, 30000); // 30000 milissegundos = 30 segundos

    // Define um temporizador para redirecionar automaticamente para a Home
    // após a duração total do vídeo (90 segundos)
    setTimeout(() => {
      console.log(
        'Redirecionando automaticamente para a Home após a exibição do vídeo.'
      );
      // Limpa o intervalo do contador (se ainda estiver ativo)
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
      // Redireciona automaticamente para a página Home
      this.router.navigate(['/home']);
    }, 90000); // 90000 milissegundos = 90 segundos (duração aproximada do vídeo)
  }

  ngOnDestroy(): void {
    // Remove a classe do body ao sair da página para não afetar outras rotas
    this.renderer.removeClass(document.body, 'landing-page-background');
    // Limpa todos os temporizadores e intervalos para evitar vazamento de memória
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  /**
   * Inicia o contador regressivo, atualizando a cada segundo.
   * Este contador agora reflete o tempo total até o redirecionamento automático.
   */
  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        // O contador chegou a zero, limpa o intervalo.
        // O redirecionamento automático já será tratado pelo setTimeout de 90s.
        clearInterval(this.countdownInterval);
      }
    }, 1000); // Atualiza a cada 1 segundo
  }
}
