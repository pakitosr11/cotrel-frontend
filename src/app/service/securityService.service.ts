import { HttpClient, HttpHeaders } from '@angular/common/http';

export class SecurityService {

    constructor(private http:HttpClient) { }
  
  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:8080/clientes",{headers,responseType: 'text' as 'json'})
  }
  }