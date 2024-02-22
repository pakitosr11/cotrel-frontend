import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Camion } from '../model/Camion';
import { Observable } from 'rxjs';

@Injectable()
export class CamionService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/camiones';

  getCamiones() {
    return this.http.get<Camion[]>(this.Url);
  }
  crearCamion(camion: Camion){
    return this.http.post<Camion>(this.Url, camion);
  }
  getCamionId(id: number){
    return this.http.get<Camion>(this.Url + "/" + id);
  }
  updateCamion(camion: Camion){
    return this.http.put<Camion>(this.Url + "/" + camion.id, camion);
  }
  deleteCamion(camion: Camion){
    return this.http.delete<Camion>(this.Url + "/" + camion.id);
  }

  filterItemsByDate(fromDate: Date, toDate: Date): Observable<Camion[]> {
    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);

    const fromDateStr = fromDateObj.toISOString();
    const toDateStr = toDateObj.toISOString();
    let params = new HttpParams()
      .set('fromDate', fromDateStr)
      .set('toDate', toDateStr);

    return this.http.get<Camion[]>(this.Url + "/fechacomprarango", { params });
  }

  filtrarRegistros(desde: string, hasta: string): Observable<Camion[]> {
    let fromDateObj = null;
    let toDateObj = null;
    let toDateStr = null;
    let fromDateStr = null;
    if (desde != undefined && desde != ""){
       fromDateObj = new Date(desde);
      fromDateStr = fromDateObj.toISOString();
    }
    
    if (hasta != undefined && hasta != ""){
       toDateObj = new Date(hasta);
       toDateStr = toDateObj.toISOString();
    }
    

    
    let params;
    if (fromDateStr != null && toDateStr != null ){
      params = new HttpParams()
      .set('desde', fromDateStr)
      .set('hasta', toDateStr);;
      
    }
    else if (fromDateStr == null && toDateStr != null){
      params = new HttpParams()
      .set('hasta', toDateStr);
    }
    else if (fromDateStr != null && toDateStr == null ){
      params = new HttpParams()
      .set('desde', fromDateStr);
    }
    // Construir la URL con los parámetros de consulta
    const url = `${this.Url + "/fechacomprarango"}?desde=${desde}&hasta=${hasta}`;
    // Hacer la solicitud al backend para filtrar registros
    return this.http.get<Camion[]>(this.Url + "/fechacomprarango", { params });
  }
  
}