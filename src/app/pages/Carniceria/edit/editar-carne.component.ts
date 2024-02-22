import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Carne } from '../../../model/Carne';
import { CarniceriaService } from '../../../service/CarniceriaService';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-carne.component.html',
  styleUrls: ['./editar-carne.component.css']
})
export class EditarCarneComponent implements OnInit {

  carne: Carne = new Carne();
  public campos: string[] = ["codigo", "nombre", "precio"]
  constructor(private router: Router, private service: CarniceriaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getCarneId(+id)
    .subscribe(data=>{
      this.carne = data;
    })

  }
  Actualizar(carne: Carne){
    this.service.updateCarne(carne)
    .subscribe(data=>{
      this.carne = data;
      alert("Se actualizó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    })
  }
  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
