import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cancha } from './cancha';
import { CanchaDetail } from './cancha-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const canchas = '/canchas';

@Injectable()
export class CanchaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getCanchas(): Observable<Cancha[]> {
        return this.http.get<Cancha[]>(API_URL + canchas);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getCanchaDetail(canchaId): Observable<CanchaDetail> {
        return this.http.get<CanchaDetail>(API_URL + canchas + '/' + canchaId);
    }

}