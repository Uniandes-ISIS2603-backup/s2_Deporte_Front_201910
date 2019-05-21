 import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import 'rxjs/add/operator/filter';

import {Equipo} from '../../equipo/equipo';
import {EquipoService} from '../../equipo/equipo.service';
import {EquipoDetail} from '../equipo-detail';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
 equipos: Equipo[];
 
 showCreate: boolean;

 selectedCampeonato: Equipo;
 
     campeonato_edit_id: number;


  
  constructor(private equipoService: EquipoService, private route: ActivatedRoute,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService) { }

  /**
    * Shows the equipo
    */
   onSelected(campeonato_id: number): void {
    this.showCreate = false;
        this.campeonato_edit_id = campeonato_id;

    this.selectedCampeonato = new EquipoDetail();
    //this.getCampeonatoDetail();
}
showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }
        /**
     * Asks the service to update the list of equipos
     */
    getEquipos(): void {
        this.equipoService.getEquipos()
            .subscribe(campeonatos => this.equipos = campeonatos);
    }
  ngOnInit() {
      this.getEquipos();
  }

}