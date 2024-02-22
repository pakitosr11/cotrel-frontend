import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fruta } from '../model/Cliente';

@Injectable()
export class FrutaService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/frutas';

  getFrutas() {
    return this.http.get<Fruta[]>(this.Url);
  }
  createFruta(fruta: Fruta){
    return this.http.post<Fruta>(this.Url, fruta);
  }
  getFrutaId(id: number){
    return this.http.get<Fruta>(this.Url + "/" + id);
  }
  updateFruta(fruta: Fruta){
    return this.http.put<Fruta>(this.Url + "/" + fruta.id, fruta);
  }
  deleteFruta(fruta: Fruta){
    return this.http.delete<Fruta>(this.Url + "/" + fruta.id);
  }
}
