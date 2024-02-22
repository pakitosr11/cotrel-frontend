import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { Carne } from '../../../model/Carne';
import { CarniceriaService } from '../../../service/CarniceriaService';





@Component({
  selector: 'app-listar',
  templateUrl: './listar-carnes.component.html',
  styleUrls: ['./listar-carnes.component.css']
})
export class ListarCarnesComponent implements OnInit {
   
carnes: Carne[];
displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'acciones'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private service: CarniceriaService, private router: Router) { }
//dataSource = new ClienteDataSource(this.service);
dataSource;
ngOnInit() {
  this.service.getCarnes()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Carne>(data);
        this.carnes = data;
        this.dataSource.paginator = this.paginator;
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

Editar(carne: Carne):void{
  localStorage.setItem("id", carne.id.toString());
  this.router.navigate(["pages/carnes/editar"]);
}

Delete(carne: Carne){
  this.service.deleteCarne(carne)
  .subscribe(data=>{
    this.dataSource = this.carnes.filter(p => p !== carne);
    alert("Carne eliminada...");
  })
}
anadir(){
  this.router.navigate(["pages/carnes/anadir"]);
}
  }
