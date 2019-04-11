import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Equipo} from './equipo';
import {EquipoDetail} from './equipo-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const equipos = '/equipos';

@Injectable()
export class EquipoService {

  constructor(private http:HttpClient) { }
  getEquipos() : Observable<Equipo[]> {
        return this.http.get<Equipo[]>(API_URL + equipos);
  }

  getEquipoDetail(EquipoId): Observable<EquipoDetail> {
      console.log(EquipoId+" "+API_URL + "Equipo-" + EquipoId+".json");
        return this.http.get<EquipoDetail>(API_URL + "Equipo-" + EquipoId+".json");
  }

  deleteEquipo(EquipoId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + equipos + '/' + EquipoId);
  }

  updateEquipo(Equipo): Observable<EquipoDetail> {
        return this.http.put<EquipoDetail>(API_URL + equipos + '/' + Equipo.id, Equipo);
  }

  createEquipo(Equipo): Observable<Equipo> {
        return this.http.post<Equipo>(API_URL + equipos, Equipo);
  }
}