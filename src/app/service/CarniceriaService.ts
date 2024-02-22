import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carne } from '../model/Carne';

@Injectable()
export class CarniceriaService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/carniceria';

  getCarnes() {
    return this.http.get<Carne[]>(this.Url);
  }
  crearCarne(carne: Carne){
    return this.http.post<Carne>(this.Url, carne);
  }
  getCarneId(id: number){
    return this.http.get<Carne>(this.Url + "/" + id);
  }
  updateCarne(carne: Carne){
    return this.http.put<Carne>(this.Url + "/" + carne.id, carne);
  }
  deleteCarne(carne: Carne){
    return this.http.delete<Carne>(this.Url + "/" + carne.id);
  }
}
