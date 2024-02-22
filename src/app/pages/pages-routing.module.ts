import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarFrutasComponent } from './Frutas/listar/listar-frutas.component';
import { EditarFrutasComponent } from './Frutas/edit/editar-fruta.component';
import { LoginComponent } from './login/login.component';
import { ListarCarnesComponent } from './Carniceria/listar/listar-carnes.component';
import { AñadirCarneComponent } from './Carniceria/add/crear-carne.component';
import { EditarCarneComponent } from './Carniceria/edit/editar-carne.component';
import { AñadirFrutaComponent } from './Frutas/add/crear-fruta.component';
import { ListarViajesComponent } from './Viajes/listar/listar-viajes.component';
import { EditarViajeComponent } from './Viajes/edit/editar-viaje.component';
import { AñadirViajeComponent } from './Viajes/add/crear-viaje.component';
import { ListarConductoresComponent } from './Conductores/listar/listar-conductores.component';
import { EditarConductorComponent } from './Conductores/edit/editar-conductor.component';
import { AñadirConductorComponent } from './Conductores/add/crear-conductor.component';
import { ListarCamionesComponent } from './Camiones/listar/listar-camiones.component';
import { EditarCamionComponent } from './Camiones/edit/editar-camion.component';
import { AñadirCamionComponent } from './Camiones/add/crear-camion.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'inicio'
    },
    {
      path: 'inicio',
      component: InicioComponent
    },

    {
      path:'frutas/listar', 
      component: ListarFrutasComponent},
    {
        path:'login', 
        component:LoginComponent},
    {
      path:'frutas/anadir',
      component: AñadirFrutaComponent},
    {
      path:'frutas/editar',
      component: EditarFrutasComponent},

      {
        path:'carnes/listar', 
        component: ListarCarnesComponent},
      {
        path:'carnes/anadir',
        component: AñadirCarneComponent},
      {
        path:'carnes/editar',
        component: EditarCarneComponent},
      {
        path:'viajes/listar',
        component: ListarViajesComponent},
      {
        path:'viajes/editar',
        component: EditarViajeComponent},
      {
        path:'viajes/anadir',
        component: AñadirViajeComponent},
      {
        path:'conductores/listar',
        component: ListarConductoresComponent},
      {
        path:'conductores/editar',
        component: EditarConductorComponent},
      {
        path:'conductores/anadir',
        component: AñadirConductorComponent},

      { path: 'viajes/:idConductor', 
        component: ListarViajesComponent },
      
        {
        path:'camiones/listar',
        component: ListarCamionesComponent},
      {
        path:'camiones/editar',
        component: EditarCamionComponent},
      {
        path:'camiones/anadir',
        component: AñadirCamionComponent},
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
