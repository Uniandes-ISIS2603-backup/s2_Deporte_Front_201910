import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  constructor(private clienteService: ClienteService,
        private toastrService: ToastrService) { }

  @Input() cliente: ClienteDetail;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  
  editCliente(): void {
        this.clienteService.updateCliente(this.cliente)
            .subscribe(() => {
                this.toastrService.success("The cliente's information was updated", "Cliente edition");
            });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
      //Hacer lo de cambios de representnate de equipo
      //hacer el cambio de favoritos
      //hacer el cambio de campeonatos
     }
         
    ngOnChanges() {
        this.ngOnInit();
    }

}