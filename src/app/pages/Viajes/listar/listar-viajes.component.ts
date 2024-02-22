import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { ViajeService } from '../../../service/ViajeService';
import { Viaje } from '../../../model/Viaje';





@Component({
  selector: 'app-listar',
  templateUrl: './listar-viajes.component.html',
  styleUrls: ['./listar-viajes.component.css']
})
export class ListarViajesComponent implements OnInit {
  
viaje: Viaje;
idConductor: number | null = null;
viajes: Viaje[];
displayedColumns: string[] = ['fecha', 'origen', 'destino', 'mercancia', 'peso','precio', 'conductor', 'acciones'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(private service: ViajeService, private router: Router, private route: ActivatedRoute) { }
//dataSource = new ClienteDataSource(this.service);
dataSource;
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const idConductorParam = params.get('idConductor');
    this.idConductor = idConductorParam !== null ? +idConductorParam : null;

    // Aquí puedes cargar la lista de viajes para el conductor con this.idConductor
  });
  
  
  this.service.obtenerViajes(this.idConductor !== null ? this.idConductor : null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Viaje>(data);
        this.viajes = data;
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
        
      });
}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

Editar(viaje: Viaje):void{
  localStorage.setItem("id", viaje.id.toString());
  this.router.navigate(["pages/viajes/editar"]);
}

Delete(viaje: Viaje){
  this.service.deleteViaje(viaje)
  .subscribe(data=>{
    this.dataSource = this.viajes.filter(p => p !== viaje);
    this.viajes = this.dataSource;
    alert("Viaje eliminado...");
  })
}
anadir(){
  this.router.navigate(["pages/viajes/anadir"]);
}
  }
