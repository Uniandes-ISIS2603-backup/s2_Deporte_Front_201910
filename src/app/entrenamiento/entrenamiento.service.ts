import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrenamiento } from './entrenamiento';
import { EntrenamientoDetail } from './entrenamiento-detail';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const entrenamientos = '/entrenamientos';

@Injectable()
export class EntrenamientoService {

    /**
    * Constructor del servicio
    * @param http El HttpClient
    */
    constructor(private http: HttpClient) { }

    /**
     * Metodo que retorna de manera observable la lista de entrenamientos.
     */
    getEntrenamientos() : Observable<Entrenamiento[]> {
        return this.http.get<Entrenamiento[]>(API_URL+entrenamientos);
    }


    /**
    * metodo que retorna el observable del detalle de un entrenamiento
    */
    getEntrenamientoDetail(entrenamientoId): Observable<EntrenamientoDetail> {

     return this.http.get<EntrenamientoDetail>(API_URL + entrenamientos + '/' + entrenamientoId);
    }

    /**
     * Metodo que elimina un entrenamiento dado el id
     */
    deleteEntrenamiento(EntrenamientoId): Observable<boolean> {
          return this.http.delete<boolean>(API_URL + '/' + EntrenamientoId);
    }
    /**
    * Metodo que actualiza el entrenamiento dado
    */
    updateEntrenamiento(Entrenamiento): Observable<EntrenamientoDetail> {
        return this.http.put<EntrenamientoDetail>(API_URL + entrenamientos + '/' + Entrenamiento.id, Entrenamiento);
    }

    /**
     * Metodo que crea un entrenamiento
     */
    createEntrenamiento(Entrenamiento): Observable<Entrenamiento> {
        return this.http.post<Entrenamiento>(API_URL + entrenamientos, Entrenamiento);
    }
}