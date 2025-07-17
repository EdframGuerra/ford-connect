import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { App } from './app'; // Assuming 'App' is your root component
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingPageModule } from './landing.page/landing.page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule, 
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
