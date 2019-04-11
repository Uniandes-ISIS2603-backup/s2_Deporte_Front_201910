import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Amistoso } from './amistoso';
import { AmistosoDetail } from './amistoso-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const amistosos= 'amistosos.json';

@Injectable()
export class AmistosoService {

    /**
    * Constructor del servicio
    * @param http El HttpClient
    */
    constructor(private http: HttpClient) { }

    /**
     * Metodo que retorna de manera observable la lista de amistosos.
     */
    getAmistosos() : Observable<Amistoso[]> {
        return this.http.get<Amistoso[]>(API_URL+amistosos);
    }


    /**
    * metodo que retorna el observable del detalle de un amistoso
    */
    getAmistosoDetail(amistosoId): Observable<AmistosoDetail> {

     return this.http.get<AmistosoDetail>(API_URL + "amistoso"+amistosoId+".json");
    }

    /**
     * Metodo que elimina un amistoso dado el id
     */
    deleteAmistoso(amistosoId): Observable<boolean> {
          return this.http.delete<boolean>(API_URL + '/' + amistosoId);
    }
    /**
    * Metodo que actualiza el amistoso dado
    */
    updateAmistoso(Amistoso): Observable<AmistosoDetail> {
        return this.http.put<AmistosoDetail>(API_URL + '/' + amistosos, Amistoso);
    }

    /**
     * Metodo que crea un amistoso
     */
    createAmistoso(Amistoso): Observable<Amistoso> {
        return this.http.post<Amistoso>(API_URL + amistosos, Amistoso);
    }
}