import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViajeService } from '../../../service/ViajeService';
import { Viaje } from '../../../model/Viaje';
import { ConductorService } from '../../../service/ConductorService';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-viaje.component.html',
  styleUrls: ['./editar-viaje.component.css']
})
export class EditarViajeComponent implements OnInit {

  viaje: Viaje = new Viaje();
  public campos: string[] = ["origen", "destino", "mercancia", "peso", "precio"];
  conductorSeleccionado: any = null;
  fechaFormateada: any =  null;
  conductores: any[] = [];
  constructor(private router: Router, private service: ViajeService, private conductorService: ConductorService, private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit() {
    this.conductorService.getConductores()
      .subscribe(data => {
        this.conductores = data;
      });
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getViajeId(+id)
    .subscribe(data=>{
      this.viaje = data;
      this.conductorSeleccionado = this.viaje.conductor.id;
      this.fechaFormateada = this.datePipe.transform(this.viaje.fecha, 'yyyy-MM-dd');
    })

  }
  Actualizar(viaje: Viaje){
    this.viaje.conductor = this.conductores.find(p => p.id == this.conductorSeleccionado);
    this.viaje.fecha = this.fechaFormateada;
    this.service.updateViaje(viaje)
    .subscribe(data=>{
      this.viaje = data;
      alert("Se actualizó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    })
  }
  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
