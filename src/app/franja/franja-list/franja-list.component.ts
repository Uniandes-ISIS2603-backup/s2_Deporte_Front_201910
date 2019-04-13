import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';

import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Franja} from '../franja';
import {FranjaService} from '../franja.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-franja-list',
    templateUrl: './franja-list.component.html',
    styleUrls: ['./franja-list.component.css']
})

export class FranjaListComponent implements OnInit {

    /**
    * The list of agendas to display
    */
    franjas: Franja[];

    agenda_id: number;

    horaInicio : number;
    minutoInicio: number;
    horaFin : number;
    minutoFin: number
    
    /**
    * The component's constructor
    */
    constructor(
        private franjaService: FranjaService,
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

    alfranjas: string = 'no';

    navigationSubscription;

    /**
    * This method retrieves all the franjas in the agenda to show them in the list
    */
    geFranjas(idAgenda : number): void {
        this.franjaService.getFranjas(idAgenda)
            .subscribe(franjas => {
                this.franjas = franjas;
                this.franjas.forEach(franja => { 
                    franja.fechaInicio = new Date();
                    franja.fechaFin = new Date();
                    this.horaFin = franja.fechaFin.getHours();
                    this.minutoFin = franja.fechaFin.getMinutes();
                    this.horaInicio = franja.fechaInicio.getHours();
                    this.minutoInicio = franja.fechaInicio.getMinutes();
                });
            });
            

            
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.agenda_id = +this.route.snapshot.paramMap.get('id');
       this.geFranjas(this.agenda_id);
    }
}