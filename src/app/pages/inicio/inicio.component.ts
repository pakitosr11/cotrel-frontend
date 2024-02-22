import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  private rutaListadoFrutas = 'pages/frutas/listar';
  private rutaListadoCarnes = 'pages/carnes/listar';
  private rutaFormulariosCumplimentados = 'pages/list-formularios-cumplimentados';
  private rutaNuevaFruta = 'pages/frutas/anadir';
  private rutaNuevaCarne = 'pages/carnes/anadir';
  private rutaNuevoFormulario = 'pages/new/formulario';
  private rutaListadoViajes = 'pages/viajes/listar';
  private rutaNuevaViaje = 'pages/viajes/anadir';
  private rutaListadoConductores = 'pages/conductores/listar';
  private rutaNuevaConductor = 'pages/conductores/anadir';
  private rutaListadoCamiones = 'pages/camiones/listar';
  private rutaNuevaCamion = 'pages/camiones/anadir';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  listadoFrutas() {
    this.router.navigate([this.rutaListadoFrutas]);
  }

  listadoCarnes() {
    this.router.navigate([this.rutaListadoCarnes]);
  }

  listadoFormcumplimentados() {
    this.router.navigate([this.rutaFormulariosCumplimentados]);
  }

  crearFruta() {
    this.router.navigate([this.rutaNuevaFruta]);
  }

  crearCarne() {
    this.router.navigate([this.rutaNuevaCarne]);
  }

  nuevoFormulario() {
    this.router.navigate([this.rutaNuevoFormulario]);
  }

  listadoViajes() {
    this.router.navigate([this.rutaListadoViajes]);
  }

  crearViaje() {
    this.router.navigate([this.rutaNuevaViaje]);
  }

  listadoConductores() {
    this.router.navigate([this.rutaListadoConductores]);
  }

  crearConductor() {
    this.router.navigate([this.rutaNuevaConductor]);
  }

  listadoCamiones() {
    this.router.navigate([this.rutaListadoCamiones]);
  }

  crearCamion() {
    this.router.navigate([this.rutaNuevaCamion]);
  }

}
