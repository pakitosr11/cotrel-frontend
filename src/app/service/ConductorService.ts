import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conductor } from '../model/Conductor';
import { Observable } from 'rxjs';

@Injectable()
export class ConductorService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/conductores';

  getConductores(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.Url);
  }
  crearConductor(conductor: Conductor): Observable<Conductor>{
    return this.http.post<Conductor>(this.Url, conductor);
  }
  getConductorId(id: number): Observable<Conductor>{
    return this.http.get<Conductor>(this.Url + "/" + id);
  }
  updateConductor(conductor: Conductor): Observable<Conductor> {
    return this.http.put<Conductor>(this.Url + "/" + conductor.id, conductor);
  }
  deleteConductor(conductor: Conductor): Observable<Conductor>{
    return this.http.delete<Conductor>(this.Url + "/" + conductor.id);
  }
  
}