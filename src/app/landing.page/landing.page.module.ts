import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORTAR RouterModule AQUI

// Importa o componente LandingPage.
import { LandingPage } from './landing.page';

// Importa o módulo de roteamento da landing page.
import { LandingPageRoutingModule } from './landing.page.routing.module';

// Importa o SharedModule para reutilizar componentes e módulos comuns, como o cabeçalho.
// Certifique-se de que o caminho para o seu SharedModule está correto.
// import { SharedModule } from '../shared/shared.module'; // Descomente e ajuste o caminho se for usar

@NgModule({
  declarations: [
    // Componentes que NÃO são standalone DEVEM ser declarados aqui.
    LandingPage,
  ],
  imports: [
    CommonModule, // Necessário para diretivas como *ngIf, *ngFor
    LandingPageRoutingModule, // Importa as rotas definidas para a landing page
    RouterModule, // <-- ADICIONAR RouterModule AQUI para que routerLink funcione
    // SharedModule // Adicione aqui se for usar e já tiver descomentado a importação acima
  ],
  // Garante que o módulo LandingPageModule seja exportado
  exports: [
    // Se LandingPageModule for carregado ansiosamente, não precisa de exports aqui
    // Mas para garantir que a classe LandingPageModule seja exportada, mantemos a declaração da classe.
  ],
})
export class LandingPageModule {} // <-- GARANTIR 'export' AQUI
