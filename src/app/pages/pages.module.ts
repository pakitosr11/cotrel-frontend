import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { InicioModule } from './inicio/inicio.module';
import { PagesRoutingModule } from './pages-routing.module';

import { AgGridModule } from 'ag-grid-angular';
// import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ListarFrutasComponent } from './Frutas/listar/listar-frutas.component';
import { EditarFrutasComponent } from './Frutas/edit/editar-fruta.component';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule,MatFormFieldModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
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




@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    InicioModule,
    AgGridModule,
    NgbModule,
    FormsModule,
    CommonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
     
  ],
  declarations: [
    PagesComponent,
    ListarFrutasComponent,
    AñadirFrutaComponent,
    EditarFrutasComponent,
    LoginComponent,
    ListarCarnesComponent,
    AñadirCarneComponent,
    EditarCarneComponent,
    ListarViajesComponent,
    EditarViajeComponent,
    AñadirViajeComponent,
    ListarConductoresComponent,
    EditarConductorComponent,
    AñadirConductorComponent,
    ListarCamionesComponent,
    EditarCamionComponent,
    AñadirCamionComponent
    // FormularioComponent,
  ],
})
export class PagesModule {
}
