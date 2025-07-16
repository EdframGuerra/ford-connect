import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa o componente LandingPageComponent. O nome da classe gerada pelo Angular é 'LandingPageComponent'.
import { LandingPage } from './landing.page';

// Importa o módulo de roteamento da landing page.
import { LandingPageRoutingModule } from './landing.page.routing.module';

@NgModule({
  declarations: [
    // Declara o LandingPageComponent neste módulo.
    LandingPage
  ],
  imports: [
    CommonModule, // Necessário para diretivas como *ngIf, *ngFor
    LandingPageRoutingModule // Importa as rotas definidas para a landing page
  ],
  // Se este módulo precisar exportar componentes para serem usados por outros módulos,
  // eles seriam listados aqui. Para um módulo de rota principal como este, geralmente não é necessário.
  // exports: [LandingPageComponent]
})
export class LandingPageModule { }
