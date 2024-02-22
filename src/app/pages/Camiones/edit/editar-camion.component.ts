import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Camion } from '../../../model/Camion';
import { CamionService } from '../../../service/CamionService';
import { ConductorService } from '../../../service/ConductorService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-camion.component.html',
  styleUrls: ['./editar-camion.component.css']
})
export class EditarCamionComponent implements OnInit {

  camion: Camion = new Camion();
  fechaCompraFormateada: any =  null;
  fechaMatriculacionFormateada: any =  null;
  conductorSeleccionado: any = null;
  conductores: any[] = [];
  constructor(private router: Router, private service: CamionService, private conductorService: ConductorService, private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit() {
    this.conductorService.getConductores()
      .subscribe(data => {
        this.conductores = data;
      },
      error => {
        console.error(error.error, error);
        alert("Error obteniendo los conductores");
      });
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getCamionId(+id)
    .subscribe(data=>{
      this.camion = data;
      this.fechaCompraFormateada = this.datePipe.transform(this.camion.fechaCompra, 'yyyy-MM-dd');
      this.fechaMatriculacionFormateada = this.datePipe.transform(this.camion.fechaMatriculacion, 'yyyy-MM-dd');
      if(this.camion.conductor != null) {
        this.conductorSeleccionado = this.camion.conductor.id;
      }
    },
    error => {
      console.error(error.error, error);
      alert("Error obteniendo el camión");
    });

  }
  Actualizar(formulario: NgForm, camion: Camion){
    if (formulario.invalid) {
      // Si el formulario es inválido, no se hace nada y los mensajes de error se mostrarán
      // ya que myForm.submitted será true
    } else {
      // Si el formulario es válido, se procede con la lógica de guardado
      // Aquí puedes guardar los datos, llamar a un servicio, etc.
      console.log('Formulario válido. Se puede guardar.');
    this.camion.fechaCompra = this.fechaCompraFormateada;
    this.camion.fechaMatriculacion = this.fechaMatriculacionFormateada;
    this.camion.conductor = this.conductores.find(p => p.id == this.conductorSeleccionado);
    this.service.updateCamion(camion)
    .subscribe(data=>{
      this.camion = data;
      alert("Se actualizó con éxito...!!!");
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
