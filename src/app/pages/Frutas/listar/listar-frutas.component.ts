import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Fruta } from '../../../model/Cliente';
import { FrutaService } from '../../../service/frutaService';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';





@Component({
  selector: 'app-listar',
  templateUrl: './listar-frutas.component.html',
  styleUrls: ['./listar-frutas.component.css']
})
export class ListarFrutasComponent implements OnInit {
   
frutas: Fruta[];
displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'acciones'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private service: FrutaService, private router: Router) { }
//dataSource = new ClienteDataSource(this.service);
dataSource;
ngOnInit() {
  this.service.getFrutas()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Fruta>(data);
        this.frutas = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sort = this.sort;

        const sortState: Sort = {active: 'codigo', direction: 'asc'};
        this.sort.active = sortState.active;
        this.sort.direction = sortState.direction;
        this.sort.sortChange.emit(sortState);

        this.paginator._intl.itemsPerPageLabel = 'Elementos por página.';
        this.paginator._intl.nextPageLabel = 'Siguiente';
        this.paginator._intl.lastPageLabel = 'Última página';
        this.paginator._intl.firstPageLabel = 'Primera página';
        this.paginator._intl.previousPageLabel = 'Anterior';
        
      });
}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

Editar(fruta: Fruta):void{
  localStorage.setItem("id", fruta.id.toString());
  this.router.navigate(["pages/frutas/editar"]);
}

Delete(fruta: Fruta){
  this.service.deleteFruta(fruta)
  .subscribe(data=>{
    this.dataSource = this.frutas.filter(p => p !== fruta);
    alert("Fruta eliminada...");
  })
}
anadir(){
  this.router.navigate(["pages/frutas/anadir"]);
}
  }
