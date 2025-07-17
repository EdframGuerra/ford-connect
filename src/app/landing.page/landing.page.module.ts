import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';

import { LandingPageRoutingModule } from './landing.page.routing.module';

@NgModule({
  declarations: [LandingPage],
  imports: [CommonModule, LandingPageRoutingModule, RouterModule],
  exports: [],
})
export class LandingPageModule {} 
