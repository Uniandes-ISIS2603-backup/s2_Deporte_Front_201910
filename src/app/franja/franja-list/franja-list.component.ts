import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';

import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Franja} from '../franja';
import {FranjaService} from '../franja.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { AgendaService } from '../../agenda/agenda.service';
import { AgendaDetail } from 'src/app/agenda/agenda-detail';
import { Agenda } from 'src/app/agenda/agenda';
import { t } from '@angular/core/src/render3';

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
    franjasFiltro: Franja[] = new Array();

    agenda_id: number;
    agenda: AgendaDetail;

    horaInicio : number;
    horaFin : number;


    @Input()
    dia:number;
    
    /**
    * The component's constructor
    */
    constructor(
        private franjaService: FranjaService,
        private agendaService: AgendaService,
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
            });

            
    }

    getAgenda(idAgenda: number): void {
        this.agendaService.getAgendaDetail(idAgenda)
        .subscribe(agenda => {
            this.agenda = agenda;
        })
    }

    eliminarFranja(id){
        this.getAgenda(this.agenda_id);
        let f1: Franja;
        for(let f of this.agenda.franjas){
            if(f.id == id) 
            {
                f1 = f;
            }
        }
        this.agenda.franjas.splice( this.agenda.franjas.indexOf(f1), 1 );
        this.agendaService.updateAgenda(this.agenda)
        .subscribe(a => {
            this.router.navigate(['/agendas/' + this.agenda_id]);
        })
        
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.agenda_id = +this.route.snapshot.paramMap.get('id');
       this.geFranjas(this.agenda_id);
       this.getAgenda(this.agenda_id);
    }
}