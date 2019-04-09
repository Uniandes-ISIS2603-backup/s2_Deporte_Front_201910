/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Campeonato} from './campeonato';
import {CampeonatoDetailComponent} from './campeonato-detail/campeonato-detail.component';

const API_URL = "../../assets/";
const campeonatos = '/campeonatos.json';

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

getCampeonatoDetail(campeonatoName): Observable<CampeonatoDetailComponent> {
  console.log(campeonatoName+" "+API_URL + "campeonato-" + campeonatoName+".json");
    return this.http.get<CampeonatoDetailComponent>(API_URL + "campeonato-" + campeonatoName +".json");
}

createCampeonato(campeonato): Observable<CampeonatoDetailComponent> {
    return this.http.post<CampeonatoDetailComponent>(API_URL + campeonatos, campeonato);
}

}


