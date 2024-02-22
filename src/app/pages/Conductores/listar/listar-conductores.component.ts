import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { ConductorService } from '../../../service/ConductorService';
import { Conductor } from '../../../model/Conductor';





@Component({
  selector: 'app-listar',
  templateUrl: './listar-conductores.component.html',
  styleUrls: ['./listar-conductores.component.css']
})
export class ListarConductoresComponent implements OnInit {
   
conductores: Conductor[];
displayedColumns: string[] = ['nombre', 'apellidos', 'fechaNacimiento', 'dni', 'telefono', 'modeloCamion', 'sueldo', 'acciones'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private service: ConductorService, private router: Router) { }
//dataSource = new ClienteDataSource(this.service);
dataSource;
ngOnInit() {
  this.service.getConductores()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Conductor>(data);
        this.conductores = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        const sortState: Sort = {active: 'fecha', direction: 'asc'};
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
        alert("Error obteniendo los conductores");
      })
}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

Editar(conductor: Conductor):void{
  localStorage.setItem("id", conductor.id.toString());
  this.router.navigate(["pages/conductores/editar"]);
}

Delete(conductor: Conductor){
  this.service.deleteConductor(conductor)
  .subscribe(data=>{
    this.dataSource = this.conductores.filter(p => p !== conductor);
    alert("Conductor eliminado...");
  },
  error => {
    console.error(error.error, error);
    alert("Error eliminando conductor: " + error.error);
  })
}
anadir(){
  this.router.navigate(["pages/conductores/anadir"]);
}
verViajes(conductor: Conductor):void{
  this.router.navigate(['pages/viajes', conductor.id]);
  }
}