import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FrutaService } from '../../../service/frutaService';
import { Fruta } from '../../../model/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-fruta.component.html',
  styleUrls: ['./editar-fruta.component.css']
})
export class EditarFrutasComponent implements OnInit {

  fruta: Fruta = new Fruta();
  public campos: string[] = ["codigo", "nombre", "precio"]
  constructor(private router: Router, private service: FrutaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getFrutaId(+id)
    .subscribe(data=>{
      this.fruta = data;
    })

  }
  Actualizar(fruta: Fruta){
    this.service.updateFruta(fruta)
    .subscribe(data=>{
      this.fruta = data;
      alert("Se actualizó con éxito...!!!");
      this.router.navigate(["../listar"], {relativeTo: this.route});
    })
  }
  cancelar(){
    this.router.navigate(["../listar"], {relativeTo: this.route});
  }

}
