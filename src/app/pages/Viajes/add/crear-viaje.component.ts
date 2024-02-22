import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Viaje } from '../../../model/Viaje';
import { ViajeService } from '../../../service/ViajeService';
import { ConductorService } from '../../../service/ConductorService';
import { Conductor } from '../../../model/Conductor';

@Component({
  selector: 'app-add',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class AñadirViajeComponent implements OnInit {

  fecha: Date;
  origen: string;
  destino: string;
  mercancia: string;
  peso: number;
  precio: number;
  conductorSeleccionado: any = null;
  conductores: any[] = [];

  private viaje : Viaje;
  constructor(private router: Router, private service: ViajeService, private conductorService: ConductorService, private route: ActivatedRoute) {
    this.viaje = new Viaje();
  }

  ngOnInit() {
    this.conductorService.getConductores()
      .subscribe(data => {
        this.conductores = data;
        
        
      });
  }

  Guardar(){
    const viaje = {
      id: null,
      fecha: this.fecha,
      origen: this.origen,
      destino: this.destino,
      mercancia: this.mercancia,
      peso: this.peso,
      precio: this.precio,
      conductor: this.conductores.find(p => p.id == this.conductorSeleccionado)
    };
    this.service.crearViaje(viaje)
    .subscribe(data=>{
      alert("Se agregó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    })
  }

  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
