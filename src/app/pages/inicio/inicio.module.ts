import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { InicioComponent } from './inicio.component';
import { FormioModule } from 'angular-formio';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    FormioModule,
    RouterModule,
    NbIconModule,
  ],
  declarations: [
    InicioComponent,
  ],
})
export class InicioModule { }
