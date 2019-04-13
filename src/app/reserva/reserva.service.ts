import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reserva';
import { ReservaDetail } from './reserva-detail';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const reservas = '/reservas';

@Injectable()
export class ReservaService {

    /**
    * Constructor del servicio
    * @param http El HttpClient
    */
    constructor(private http: HttpClient) { }

    /**
     * Metodo que retorna de manera observable la lista de Reservas.
     */
    getReservas() : Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL+reservas);
    }


    /**
    * metodo que retorna el observable del detalle de un Reserva
    */
    getReservaDetail(reservaId): Observable<ReservaDetail> {

     return this.http.get<ReservaDetail>(API_URL + reservas + '/' + reservaId);
    }

    /**
     * Metodo que elimina un Reserva dado el id
     */
    deleteReserva(reservaId): Observable<boolean> {
          return this.http.delete<boolean>(API_URL + '/' + reservaId);
    }
    /**
    * Metodo que actualiza el Reserva dado
    */
    updateReserva(reserva): Observable<ReservaDetail> {
        return this.http.put<ReservaDetail>(API_URL + reservas + '/' + reserva.id, Reserva);
    }

    /**
     * Metodo que crea un Reserva
     */
    createReserva(Reserva): Observable<Reserva> {
        return this.http.post<Reserva>(API_URL + reservas, Reserva);
    }
}