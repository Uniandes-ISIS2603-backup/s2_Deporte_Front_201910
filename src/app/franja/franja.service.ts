import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Franja } from './franja';
import { FranjaDetail } from './franja-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const franjas = '/franjas';


@Injectable()
export class FranjaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of agendas retrieved from the API
    * @returns The list of agendas in real time
    */
    getFranjas(): Observable<Franja[]> {
        return this.http.get<Franja[]>(API_URL + franjas);
    }

    /**
    * Returns the Observable object with the details of an agenda retrieved from the API
    * @returns The agenda details
    */
    getFranjaDetail(franjaId: number): Observable<FranjaDetail> {
        return this.http.get<FranjaDetail>(API_URL + franjas + '/' + franjaId);
    }
}