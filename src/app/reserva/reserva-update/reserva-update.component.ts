import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { ReservaService } from '../reserva.service';

import { ReservaDetail } from '../reserva-detail';


/**
 * Componente para editar un reserva
 */
@Component({
    selector: 'app-reserva-update',
    templateUrl: './reserva-update.component.html',
    styleUrls: ['./reserva-update.component.css']

})
export class ReservaUpdateComponent implements OnInit {

    /**
     * Constructor del componente
     */
    constructor(
        private reservaService: ReservaService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
     * reserva y su id el cual se busca editar
     */
    reserva:ReservaDetail;

    id:number;

  /**
   * Consigue el detail del reserva
   */
    getreserva(){
        this.reservaService.getReservaDetail(this.id).subscribe(reserva => {
            
            this.reserva = reserva;
        });
    }

    /**
     * El metodo que cambia el reserva
     */
    updateReserva(): void {
        this.reservaService.updateReserva(this.reserva)
            .subscribe(() => {
                this.router.navigate(['/reservas/' + this.id]);
                this.toastrService.success("La reserva se edito correctamente", 'reserva edition');
            });
    }
    
    /**
     * Metodo que avisa si no se edito el reserva
     */
    cancelEdition(): void {
        this.toastrService.warning('La reserva no fue editada', 'reserva edition');
        this.router.navigate(['/reservas/list']);
    }

  /**
   * Inicializacion
   */
   ngOnInit() {
       this.id = +this.route.snapshot.paramMap.get('id');
       this.getreserva();
   }
}