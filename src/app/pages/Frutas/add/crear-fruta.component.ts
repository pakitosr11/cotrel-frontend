import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fruta } from '../../../model/Cliente';
import { FrutaService } from '../../../service/frutaService';

@Component({
  selector: 'app-add',
  templateUrl: './crear-fruta.component.html',
  styleUrls: ['./crear-fruta.component.css']
})
export class AñadirFrutaComponent implements OnInit {

  private fruta : Fruta;
  constructor(private router: Router, private service: FrutaService, private route: ActivatedRoute) {
    this.fruta = new Fruta();
  }

  ngOnInit() {
  }

  Guardar(fruta: Fruta){
    this.service.createFruta(fruta)
    .subscribe(data=>{
      console.log(fruta);
      alert("Se agregó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    })
  }

  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
