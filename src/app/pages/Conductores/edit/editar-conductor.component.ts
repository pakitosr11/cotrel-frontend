import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Conductor } from '../../../model/Conductor';
import { ConductorService } from '../../../service/ConductorService';
import { DatePipe } from '@angular/common';
import { CamionService } from '../../../service/CamionService';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-conductor.component.html',
  styleUrls: ['./editar-conductor.component.css']
})
export class EditarConductorComponent implements OnInit {

  conductor: Conductor = new Conductor();
  fechaFormateada: any =  null;
  camionSeleccionado: any = null;
  camiones: any[] = [];
  constructor(private router: Router, private service: ConductorService, private camionService: CamionService, private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit() {
    this.camionService.getCamiones()
      .subscribe(data => {
        this.camiones = data;
      },
      error => {
        console.error(error.error, error);
        alert("Error obteniendo los camiones");
      });
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getConductorId(+id)
    .subscribe(data=>{
      this.conductor = data;
      if (this.conductor.camion != null) {
        this.camionSeleccionado = this.conductor.camion.id;
      }
      
      this.fechaFormateada = this.datePipe.transform(this.conductor.fechaNacimiento, 'yyyy-MM-dd');
    },
    error => {
      console.error(error.error, error);
      alert("Error obteniendo el conductor");
    });

  }
  Actualizar(conductor: Conductor){
    this.conductor.fechaNacimiento = this.fechaFormateada;
    this.conductor.camion = this.camiones.find(p => p.id == this.camionSeleccionado);
    // if (this.conductor != null && this.conductor.camio)
    this.service.updateConductor(conductor)
    .subscribe(respuesta => {
      console.log('Viaje enviado con éxito al backend', respuesta);
      alert("Se actualizó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    },
      error => {
        console.error(error.error, error);
        alert("Error guardando el conductor: " + error.error);
      })
  }
  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
