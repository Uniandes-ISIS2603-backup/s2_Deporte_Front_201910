

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReservaService } from '../reserva.service';
import { Reserva } from '../reserva';
import { ReservaDetail } from '../reserva-detail';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
})
export class ReservaDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute
  ) { }

  /**
  * la reserva en detalle que se quiere mostrar
  */
  @Input() reservaDetail: ReservaDetail;



  /**
  * El id de la reserva
  */
  reserva_id: number;

  /**
  * Metodo que le pide al servicio el detail de reserva
  */
  getReservaDetail(): void {
    this.reservaService.getReservaDetail(this.reserva_id)
      .subscribe(reservaDetail => {
        this.reservaDetail = reservaDetail
      });
  }

  /**
  * metodo que inicializa el componente, en este caso se crea vacio la reserva en detalle
  */
  ngOnInit() {
    this.reserva_id = +this.route.snapshot.paramMap.get('id');
    if (this.reserva_id) {
      this.reservaDetail = new ReservaDetail();
      this.getReservaDetail();
    }

  }
}