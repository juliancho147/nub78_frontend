import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../../models/sucursal/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(public http: HttpClient) { }
  getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>("http://localhost:5001/get_sucursales")
  }
}
