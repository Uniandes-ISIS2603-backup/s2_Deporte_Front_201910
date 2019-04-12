import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import { EquipoService } from '../equipo.service';
import { EquipoDetail } from '../equipo-detail';
import {Equipo} from '../equipo';
import {Cliente} from '../../cliente/cliente';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit, OnDestroy {
  
  constructor(
        private equipoService: EquipoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

  equipo_id: number;
  equipoDetail: EquipoDetail;
  cliente:Cliente;
  other_equipos: Equipo[];
  navigationSubscription;

  getEquipoDetail(): void {
        this.equipoService.getEquipoDetail(this.equipo_id)
            .subscribe(equipoDetail => {
                this.equipoDetail = equipoDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherEquipos(): void {
        this.equipoService.getEquipos()
            .subscribe(equipos => {
                this.other_equipos = equipos;                
            });
    }

  ngOnInit() {
        this.equipo_id = +this.route.snapshot.paramMap.get('id');
        this.equipoDetail = new EquipoDetail();
        this.getEquipoDetail();
        this.getOtherEquipos();
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}