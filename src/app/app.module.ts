import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { App } from './app'; // Assuming 'App' is your root component
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Importação CORRETA do LandingPageModule
// O caminho deve ser relativo ao 'app.module.ts' e apontar para o arquivo do módulo.
import { LandingPageModule } from './landing.page/landing.page.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule, // Certifique-se que está importado aqui
    HttpClientModule,
    ReactiveFormsModule,
    // SharedModule // Keep this commented out for now as per previous discussions
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
