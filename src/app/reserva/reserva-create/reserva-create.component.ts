 import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import { ReservaService } from '../reserva.service';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-reservacreate',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [DatePipe]
})
export class ReservaCreateComponent implements OnInit {
constructor(
        private reservaService: ReservaService,
        private toastrService: ToastrService,
        private router: Router
  ) { }
  
  reserva:Reserva;
  
  fecha: Date;
  
      @Output() cancel = new EventEmitter();
      
          @Output() create = new EventEmitter();



  cancelCreation(): void {
        this.toastrService.warning('The reserva wasn\'t created', 'reserva creation');
        this.router.navigate(['/reserva/list']);
    }

    createReserva(): Reserva{
        this.reservaService.createReserva(this.reserva)
            .subscribe(reserva => {
                this.reserva.id = reserva.id;
                this.reserva.fecha = reserva.fecha;
                this.router.navigate(['/reservas/' + reserva.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.reserva;
    }

    ngOnInit() {
    reserva: Reserva;
        this.reserva = new Reserva();
    }
}