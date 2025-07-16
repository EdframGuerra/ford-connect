import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { HomeLayout } from './home-layout/home-layout';
import { Carousel } from './carousel/carousel';


const routes: Routes = [
  { path: '', component: Home }
];

@NgModule({
  declarations: [
    Home,
    HomeLayout,
    Carousel
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeLayout,
    Carousel
  ]
})
export class HomeModule { }
