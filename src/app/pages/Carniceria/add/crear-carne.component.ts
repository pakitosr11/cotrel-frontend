import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fruta } from '../../../model/Cliente';
import { Carne } from '../../../model/Carne';
import { CarniceriaService } from '../../../service/CarniceriaService';

@Component({
  selector: 'app-add',
  templateUrl: './crear-carne.component.html',
  styleUrls: ['./crear-carne.component.css']
})
export class AñadirCarneComponent implements OnInit {

  private carne : Carne;
  constructor(private router: Router, private service: CarniceriaService, private route: ActivatedRoute) {
    this.carne = new Fruta();
  }

  ngOnInit() {
  }

  Guardar(carne: Carne){
    this.service.crearCarne(carne)
    .subscribe(data=>{
      console.log(carne);
      alert("Se agregó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    })
  }

  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
