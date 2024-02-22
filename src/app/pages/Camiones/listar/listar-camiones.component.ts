import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { Camion } from '../../../model/Camion';
import { CamionService } from '../../../service/CamionService';





@Component({
  selector: 'app-listar',
  templateUrl: './listar-camiones.component.html',
  styleUrls: ['./listar-camiones.component.css']
})
export class ListarCamionesComponent implements OnInit {
   
camiones: Camion[];
fromDate: Date;
toDate: Date;
desde: string;
hasta: string;
displayedColumns: string[] = ['fechaCompra', 'marca', 'modelo', 'matricula', 'color', 'fechaMatriculacion', 'conductor', 'acciones'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private service: CamionService, private router: Router) { 
  this.fromDate = new Date(); // Fecha actual
  this.toDate = new Date();   // Fecha actual
}
//dataSource = new ClienteDataSource(this.service);
dataSource;
ngOnInit() {
  this.service.getCamiones()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Camion>(data);
        this.camiones = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        const sortState: Sort = {active: 'fechaCompra', direction: 'asc'};
        this.sort.active = sortState.active;
        this.sort.direction = sortState.direction;
        this.sort.sortChange.emit(sortState);
        this.paginator._intl.itemsPerPageLabel = 'Elementos por página.';
        this.paginator._intl.nextPageLabel = 'Siguiente';
        this.paginator._intl.lastPageLabel = 'Última página';
        this.paginator._intl.firstPageLabel = 'Primera página';
        this.paginator._intl.previousPageLabel = 'Anterior';
      },
      error => {
        console.error(error.error, error);
        alert("Error obteniendo los camiones");
      })
}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

Editar(camion: Camion):void{
  localStorage.setItem("id", camion.id.toString());
  this.router.navigate(["pages/camiones/editar"]);
}

Delete(camion: Camion){
  this.service.deleteCamion(camion)
  .subscribe(()=>{
    this.dataSource = this.camiones.filter(p => p !== camion);
    alert("Camión eliminado...");
  },
  error => {
    console.error(error.error, error);
    alert("Error eliminando camión: " + error.error);
  })
}
anadir(){
  this.router.navigate(["pages/camiones/anadir"]);
}
verViajes(camion: Camion):void{
  this.router.navigate(['pages/camiones', camion.id]);
  }

  filterItems(): void {
    // this.service.filterItemsByDate(this.fromDate, this.toDate)
    //   .subscribe(data =>{
    //     this.dataSource = new MatTableDataSource<Camion>(data);
    //     this.camiones = data});
    this.service.filtrarRegistros(this.desde, this.hasta)
      .subscribe(data =>{
        this.dataSource = new MatTableDataSource<Camion>(data);
        this.camiones = data
      });
  }
}