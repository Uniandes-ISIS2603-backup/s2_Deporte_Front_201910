/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Campeonato} from './campeonato';
import {CampeonatoDetail} from './campeonato-detail';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const campeonatos = '/campeonato';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class CampeonatoService {

/**
* Constructor of the service
* @param http The HttpClient - This is necessary in order to perform requests
*/
constructor(private http: HttpClient) {}

/**
* Returns the Observable object containing the list of editorials retrieved from the API
* @returns The list of books in real time
*/
getCampeonatos(): Observable<Campeonato[]> {
    return this.http.get<Campeonato[]>(API_URL + campeonatos);
}

getCampeonatoDetail(campeonatoName): Observable<CampeonatoDetail> {
    return this.http.get<CampeonatoDetail>(API_URL + campeonatos + "/" + campeonatoName);
}

createCampeonato(campeonato): Observable<Campeonato> {
    return this.http.post<Campeonato>(API_URL + campeonatos, campeonato);
}

 updateCampeonato(campeonato): Observable<CampeonatoDetail> {
        return this.http.put<CampeonatoDetail>(API_URL + campeonatos + '/' + campeonato.id, campeonato);
    }

    deleteCampeonato(campeonatoId): Observable<CampeonatoDetail> {
        return this.http.delete<CampeonatoDetail>(API_URL + campeonatos + '/' + campeonatoId);
    }
    
}


