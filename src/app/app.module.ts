/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormioAppConfig } from 'angular-formio';
import { SugaFormioAppConfig } from './formio-config';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { FrutaService } from './service/frutaService';
import { SecurityService } from './service/securityService.service';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CarniceriaService } from './service/CarniceriaService';
import { ViajeService } from './service/ViajeService';
import { ConductorService } from './service/ConductorService';
import { CamionService } from './service/CamionService';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
  ],
  providers: [
    { provide: FormioAppConfig, useValue: SugaFormioAppConfig },
    FrutaService, 
    SecurityService,
    CarniceriaService,
    ViajeService,
    ConductorService,
    CamionService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
