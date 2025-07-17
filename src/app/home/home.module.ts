import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Remover: import { RouterModule, Routes } from '@angular/router'; // RouterModule e Routes não são necessários aqui
// Remover: import { Carousel } from './carousel/carousel'; // Assumindo que Carousel é HomeCarouselComponent
// Remover: import { Home } from './home'; // Assumindo que Home é HomeComponent

// Importar os componentes conforme a sua estrutura de arquivos e nomes de classe
import { Home } from './home'; // Seu HomeComponent (que contém o carrossel)
import { HomeLayout } from './home.layout/home.layout'; // Seu HomeLayoutComponent (o esqueleto)
import { Carousel } from './carousel/carousel'; // Seu HomeCarouselComponent
import { VehicleCompareTable } from './vehicle.compare.table/vehicle.compare.table'; // Seu VehicleCompareTableComponent

import { HomeRoutingModule } from './home.routing.module'; // Importar o módulo de roteamento da Home

// Remover: const routes: Routes = [...] // As rotas são definidas APENAS em HomeRoutingModule

@NgModule({
  declarations: [
    Home, // Declara o HomeComponent
    HomeLayout, // Declara o HomeLayoutComponent
    Carousel, // Declara o HomeCarouselComponent
    VehicleCompareTable // Declara o VehicleCompareTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule // Importa o módulo de roteamento da Home (que já contém RouterModule.forChild)
    // Remover: RouterModule.forChild(routes), // Isso é redundante e incorreto aqui
  ],
  exports: [
    // Exporta os componentes que podem ser usados por outros módulos que importem HomeModule
    // Geralmente, componentes de layout ou de conteúdo principal.
    Home,
    HomeLayout,
    Carousel,
    VehicleCompareTable
  ]
})
export class HomeModule { }
