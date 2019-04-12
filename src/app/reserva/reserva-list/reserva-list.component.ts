import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../reserva';
import { ReservaDetail } from '../reserva-detail';
import { ReservaService } from '../reserva.service';

/**
 * El componente de la lista de reservas
 */
@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html'
})
export class ReservaListComponent implements OnInit {

  /**
   * Constructor delcomponent
   * @param reservaService el servicio del reserva
   */
  constructor(private reservaService: ReservaService) { }
  /**
   * Atributos sobre la reserva seleccionado
   */
  reserva_id: number;
  selectedReserva: ReservaDetail;
  /**
   * La lista de reservas 
   */
  reservas: Reserva[];

  /**
   * Metodo que le pide al servicio que le actualice la lista de reservas
   */
  getReservas(): void {
    this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
  }

  onSelected(reserva_id: number): void {
  this.reserva_id = reserva_id;
  this.selectedReserva= new ReservaDetail();
  this.reservaService.getReservaDetail(reserva_id).subscribe(o => this.selectedReserva = o);
  }



  /**
   * Este es el metodo que se llama cuando se inicia el componente
   */
  ngOnInit() {
  this.getReservas();
  }

}