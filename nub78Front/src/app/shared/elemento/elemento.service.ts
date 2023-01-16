import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elemento } from '../../models/elemento/elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  constructor(public http: HttpClient) { }
  getAllElementos(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>("http://localhost:5001/get_todos_los_elementos")
  }
  insertElementoToTecnico(id:String, elemento_id:String):Observable<String>{
    let body = {
      "tecnico": {
        "id":id,
        "elemento_id":elemento_id
      }
    };
    const formHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json');
    return this.http.post<String>("http://localhost:5001/insert_elemento_to_tecnico",body,{
      headers:formHeaders
    })
  }
}
