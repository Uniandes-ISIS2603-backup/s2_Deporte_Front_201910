import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Propietario } from './propietario';
import { PropietarioDetail } from './propietario-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const propietarios = '/propietarios';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class PropietarioService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    */
    getPropietarios(): Observable<Propietario[]> {
        return this.http.get<Propietario[]>(API_URL + propietarios);
    }

    /**
    * Returns the Observable object containing the editorial retrieved from the API
    */
    getPropietarioDetail(propietarioId): Observable<PropietarioDetail> {
        return this.http.get<PropietarioDetail>(API_URL + propietarios + '/' + propietarioId);
    }

    /**
    * Returns the Observable object containing the editorial retrieved from the API
    */
    createPropietario(propietario){
        return this.http.post<PropietarioDetail>(API_URL + propietarios, propietario);
    }

    /**
    * Returns the Observable object containing the editorial retrieved from the API
    */
    updatePropietario(propietario){
        return this.http.put<PropietarioDetail>(API_URL + propietarios + '/' + propietario.id, propietario);
    }
}