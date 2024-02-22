import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Conductor } from '../../../model/Conductor';
import { ConductorService } from '../../../service/ConductorService';
import { CamionService } from '../../../service/CamionService';

@Component({
  selector: 'app-add',
  templateUrl: './crear-conductor.component.html',
  styleUrls: ['./crear-conductor.component.css']
})
export class AñadirConductorComponent implements OnInit {

  private conductor : Conductor;
  camionSeleccionado: any = null;
  camiones: any[] = [];
  constructor(private router: Router, private service: ConductorService, private camionService: CamionService, private route: ActivatedRoute) {
    this.conductor = new Conductor();
  }

  ngOnInit() {
    this.camionService.getCamiones()
      .subscribe(data => {
        this.camiones = data;
      },
      error => {
        console.error(error.error, error);
        alert("Error obteniendo los camiones");
      });
  }

  Guardar(conductor: Conductor){
    this.conductor.camion = this.camiones.find(p => p.id == this.camionSeleccionado)
    this.service.crearConductor(conductor)
    .subscribe(data=>{
      console.log(conductor);
      alert("Se agregó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    },
    error => {
      console.error("Error guardando el conductor", error);
      alert("Error guardando el conductor: " + error.error);
    })
  }

  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
