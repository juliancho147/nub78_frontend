import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../../models/tecnico/tecnico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Elementoxtecnico } from '../../models/elemento/elementoxtecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(public http: HttpClient) { }

  getAllTecnicos(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>("http://localhost:5001/get_tecnicos")
  }
  getElementos(id: string): Observable<Elementoxtecnico[]> {
    let body = {
      "tecnico": {
        "id": id

      }
    }
    const formHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json');
    return this.http.post<Elementoxtecnico[]>("http://localhost:5001/get_elementos",body,{
      headers:formHeaders
    })
  }

}
