import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Viaje } from '../model/Viaje';
import { Observable } from 'rxjs';

@Injectable()
export class ViajeService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/viajes';

  obtenerViajes(idConductor?: number): Observable<Viaje[]> {
    let params = new HttpParams();
    
    if (idConductor !== undefined && idConductor !== null) {
      params = params.set('idConductor', idConductor.toString());
    }

    return this.http.get<Viaje[]>(this.Url, { params });
  }

  getViaje() {
    return this.http.get<Viaje[]>(this.Url);
  }
  crearViaje(viaje: Viaje){
    return this.http.post<Viaje>(this.Url, viaje);
  }
  getViajeId(id: number){
    return this.http.get<Viaje>(this.Url + "/" + id);
  }
  updateViaje(viaje: Viaje){
    return this.http.put<Viaje>(this.Url + "/" + viaje.id, viaje);
  }
  deleteViaje(viaje: Viaje){
    return this.http.delete<Viaje>(this.Url + "/" + viaje.id);
  }
}