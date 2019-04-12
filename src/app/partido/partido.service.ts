import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Partido} from './partido';
import {PartidoDetail} from './partido-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const partidos = '/partidos';

@Injectable()
export class PartidoService {

  constructor(private http:HttpClient) { }

  getPartidos() : Observable<Partido[]> {
        return this.http.get<Partido[]>(API_URL + partidos);
  }

  getPartidoDetail(PartidoId): Observable<PartidoDetail> {
      console.log(PartidoId+" "+API_URL + "Partido-" + PartidoId+".json");
        return this.http.get<PartidoDetail>(API_URL + "Partido-" + PartidoId+".json");
  }

  deletePartido(PartidoId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + partidos + '/' + PartidoId);
  }

  updatePartido(Partido): Observable<PartidoDetail> {
        return this.http.put<PartidoDetail>(API_URL + partidos + '/' + Partido.id, Partido);
  }

  createPartido(Partido): Observable<Partido> {
        return this.http.post<Partido>(API_URL + partidos, Partido);
  }

}