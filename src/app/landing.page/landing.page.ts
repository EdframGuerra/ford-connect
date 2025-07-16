import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../services/app.state.service';

@Component({
  selector: 'app-landing-page', // O seletor permanece 'app-landing-page'
  standalone: false,
  templateUrl: './landing.page.html', // O template é 'landing.page.html'
  styleUrls: ['./landing.page.css'], // O estilo é 'landing.page.css'
})
// A classe é LandingPage, conforme sua convenção e geração via CLI.
export class LandingPage implements OnInit, OnDestroy {
  // Propriedade para controlar a visibilidade e habilitação do link manual
  isLinkEnabled: boolean = false;
  // Propriedade para o tempo total de redirecionamento automático (o número não será exibido no HTML)
  // Mantido em 90s para o setTimeout final.
  countdown: number = 90;

  private countdownInterval: any; // Variável para armazenar o ID do intervalo do contador

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private appStateService: AppStateService // Injetar o AppStateService
  ) {}

  ngOnInit(): void {
    // Adiciona uma classe ao body para estilos específicos da landing page
    this.renderer.addClass(document.body, 'landing-page-background');

    // Inicia um contador interno para a lógica do setTimeout de 90s.
    // O countdown exibido no HTML não é mais atualizado a cada segundo.
    let internalCountdown = 90;
    this.countdownInterval = setInterval(() => {
      if (internalCountdown > 0) {
        internalCountdown--;
      } else {
        clearInterval(this.countdownInterval);
      }
    }, 1000);

    // Define um temporizador para habilitar o link manual após 30 segundos
    setTimeout(() => {
      this.isLinkEnabled = true; // Habilita a mensagem com o link "clique aqui"
      this.appStateService.enableMenu(); // HABILITA O MENU PRINCIPAL
      console.log('Link manual e menu principal habilitados após 30 segundos.');
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
   * Manipula o clique no link "clique aqui".
   * Impede a navegação se o link ainda não estiver habilitado.
   * @param event O evento de clique.
   */
  handleLinkClick(event: Event): void {
    // <-- MÉTODO ADICIONADO/RESTAURADO
    if (!this.isLinkEnabled) {
      event.preventDefault(); // Impede a navegação se o link estiver desabilitado
      console.log('O link ainda não está habilitado. Aguarde 30 segundos.');
      // Opcional: Adicionar um feedback visual para o usuário.
    }
  }
}
