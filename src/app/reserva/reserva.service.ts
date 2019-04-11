import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reserva';
import { ReservaDetail } from './reserva-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const reservas= 'amistosos.json';

@Injectable()
export class ReservaService {

    /**
    * Constructor del servicio
    * @param http El HttpClient
    */
    constructor(private http: HttpClient) { }

    /**
     * Metodo que retorna de manera observable la lista de reservas.
     */
    getReservas() : Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL+reservas);
    }


    /**
    * metodo que retorna el observable del detalle de una reserva
    */
    getReservaDetail(reservaId): Observable<ReservaDetail> {

     return this.http.get<ReservaDetail>(API_URL + "amistoso"+reservaId+".json");
    }

    /**
     * Metodo que elimina una reserva dado el id
     */
    deleteReserva(reservaId): Observable<boolean> {
          return this.http.delete<boolean>(API_URL + '/' + reservaId);
    }
    /**
    * Metodo que actualiza la reserva dado
    */
    updateReserva(Reserva): Observable<ReservaDetail> {
        return this.http.put<ReservaDetail>(API_URL + '/' + reservas, Reserva);
    }

    /**
     * Metodo que crea un reserva
     */
    createReserva(Reserva): Observable<Reserva> {
        return this.http.post<Reserva>(API_URL + reservas, Reserva);
    }
}