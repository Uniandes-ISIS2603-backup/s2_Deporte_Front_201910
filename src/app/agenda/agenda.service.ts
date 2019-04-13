import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Agenda } from './agenda';
import { AgendaDetail } from './agenda-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const agendas = '/agendas';


@Injectable()
export class AgendaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of agendas retrieved from the API
    * @returns The list of agendas in real time
    */
    getAgendas(canchaId: number): Observable<AgendaDetail[]> {
        return this.http.get<AgendaDetail[]>(API_URL + agendas+ '/filtroCancha/' + canchaId);
    }

       /**
    * Returns the Observable object containing the editorial retrieved from the API
    */
   createAgenda(agenda){
    return this.http.post<AgendaDetail>(API_URL + agendas, agenda);
}
    /**
    * Returns the Observable object with the details of an agenda retrieved from the API
    * @returns The agenda details
    */
    getAgendaDetail(agendaId: number): Observable<AgendaDetail> {
        return this.http.get<AgendaDetail>(API_URL + agendas + '/' + agendaId);
    }

       /**
    * Returns the Observable object containing the editorial retrieved from the API
    */
   updateAgendaa(agenda){
    return this.http.put<AgendaDetail>(API_URL + agendas + '/' + agenda.id, agenda);
}
}