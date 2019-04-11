import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrenamiento } from './entrenamiento';
import { EntrenamientoDetail } from './entrenamiento-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const entrenamientos= 'amistosos.json';

@Injectable()
export class EntrenamientoService {

    /**
    * Constructor del servicio
    * @param http El HttpClient
    */
    constructor(private http: HttpClient) { }

    /**
     * Metodo que retorna de manera observable la lista de reservas.
     */
    getEntrenamientos() : Observable<Entrenamiento[]> {
        return this.http.get<Entrenamiento[]>(API_URL+entrenamientos);
    }


    /**
    * metodo que retorna el observable del detalle de un entrenamiento
    */
    getEntrenamientoDetail(entrenamientoId): Observable<EntrenamientoDetail> {

     return this.http.get<EntrenamientoDetail>(API_URL + "amistoso"+entrenamientoId+".json");
    }

    /**
     * Metodo que elimina un Entrenamiento dado el id
     */
    deleteEntrenamiento(entrenamientoId): Observable<boolean> {
          return this.http.delete<boolean>(API_URL + '/' + entrenamientoId);
    }
    /**
    * Metodo que actualiza el Entrenamiento dado
    */
    updateEntrenamiento(Entrenamiento): Observable<EntrenamientoDetail> {
        return this.http.put<EntrenamientoDetail>(API_URL + '/' + entrenamientos, Entrenamiento);
    }

    /**
     * Metodo que crea un Entrenamiento
     */
    createEntrenamiento(Entrenamiento): Observable<Entrenamiento> {
        return this.http.post<Entrenamiento>(API_URL + entrenamientos, Entrenamiento);
    }
}