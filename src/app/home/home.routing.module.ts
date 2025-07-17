import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home'; // Importe o HomeComponent
import { HomeLayout } from './home.layout/home.layout';
import { VehicleCompareTable } from './vehicle.compare.table/vehicle.compare.table';

    const routes: Routes = [
  {
    path: '', // Rota base para /home
    component: HomeLayout, // HomeLayout é o componente principal para esta rota (o pai)
    children: [
      { path: '', redirectTo: 'default-content', pathMatch: 'full' }, // Redireciona a rota base /home para um conteúdo padrão
      { path: 'default-content', component: Home }, // A rota /home/default-content exibe o HomeComponent (com o carrossel e CTAs)
      { path: 'compare', component: VehicleCompareTable }, // A rota /home/compare exibe o VehicleCompareTableComponent
      // Adicione aqui as rotas para Vendas, Fale Conosco, Área do Usuário quando os componentes forem criados
      // { path: 'sales', component: VehicleSalesComponent },
      // { path: 'contact', component: ContactServiceComponent },
      // { path: 'user-area', component: UserAreaComponent },
    ]
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class HomeRoutingModule { }
