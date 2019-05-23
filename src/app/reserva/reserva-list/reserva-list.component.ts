 import {Component, OnInit, ViewContainerRef,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../reserva';
import { ReservaDetail } from '../reserva-detail';
import { ReservaService } from '../reserva.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
  constructor(private reservaService: ReservaService,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService) { }
  /**
   * Atributos sobre la reserva seleccionado
   */
  reserva_id: number;
  selectedReserva: Reserva;
  campeonato_edit_id: number;
      showCreate: boolean;


  /**
   * La lista de reservas 
   */
  reservas: Reserva[];

  /**
   * Metodo que le pide al servicio que le actualice la lista de reservas
   */
  getReservas(): void {
     this.reservaService.getReservas()
            .subscribe(reservas => this.reservas = reservas);
  }
 onSelected(campeonato_id: number): void {
    
    this.campeonato_edit_id = campeonato_id;
    this.selectedReserva = new ReservaDetail();
}
//  onSelected(reserva_id: number): void {
//  this.reserva_id = reserva_id;
//  this.selectedReserva= new ReservaDetail();
//  this.reservaService.getReservaDetail(reserva_id).subscribe(o => this.selectedReserva = o);
//  }

 showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }

  /**
   * Este es el metodo que se llama cuando se inicia el componente
   */
  ngOnInit() {
  this.getReservas();
  }
  
   deleteReserva(postId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a campeonato',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this post?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.reservaService.deleteReserva(postId).subscribe(() => {
                            this.toastrService.error("The post was successfully deleted", "Post deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

}