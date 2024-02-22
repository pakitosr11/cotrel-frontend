import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Camion } from '../../../model/Camion';
import { CamionService } from '../../../service/CamionService';
import { ConductorService } from '../../../service/ConductorService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './crear-camion.component.html',
  styleUrls: ['./crear-camion.component.css']
})
export class AñadirCamionComponent implements OnInit {

  private camion : Camion;
  conductorSeleccionado: any = null;
  conductores: any[] = [];
  constructor(private router: Router, private service: CamionService, private conductorService: ConductorService, private route: ActivatedRoute) {
    this.camion = new Camion();
  }

  ngOnInit() {
    this.conductorService.getConductores()
      .subscribe(data => {
        this.conductores = data;
      },
      error => {
        console.error(error.error, error);
        alert("Error obteniendo los conductores");
      });
  }

  Guardar(formulario: NgForm, camion: Camion){
    if (formulario.invalid) {
      // Si el formulario es inválido, no se hace nada y los mensajes de error se mostrarán
      // ya que myForm.submitted será true
    } else {
      // Si el formulario es válido, se procede con la lógica de guardado
      // Aquí puedes guardar los datos, llamar a un servicio, etc.
      console.log('Formulario válido. Se puede guardar.');
    
    camion.conductor = this.conductores.find(p => p.id == this.conductorSeleccionado);
    this.service.crearCamion(camion)
    .subscribe(()=>{
      console.log(camion);
      alert("Se agregó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    },
    error => {
      console.error("Error guardando el camión", error);
      alert("Error guardando el camión: " + error.error);
    })
  }
  }

  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
