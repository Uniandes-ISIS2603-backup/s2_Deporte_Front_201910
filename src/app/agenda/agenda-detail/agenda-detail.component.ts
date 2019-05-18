import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {AgendaService} from '../agenda.service';
import {Agenda} from '../agenda';
import { AgendaDetail } from '../agenda-detail';

@Component({
    selector: 'app-agenda-detail',
    templateUrl: './agenda-detail.component.html',
    styleUrls: ['./agenda-detail.component.css']
})

export class AgendaDetailComponent implements OnInit, OnDestroy {

    @Input() agenda = AgendaDetail;
    /**
    * The constructor of the component
    * @param agendaService The agenda service which communicates with the API
    * @param route The route which helps to retrieves the id of the agenda to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
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

    /**
    * The book's id retrieved from the path
    */
    agenda_id: number;

    mesString: string;

    dia: number;
    diaMax: number;

    anio: number;

    /**
    * The book whose details are shown
    */
    agendaDetail: AgendaDetail;
    
    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    

    /**
    * The method which retrieves the details of the agendas that
    * we want to show
    */
    getAgendaDetails(): void {
         this.agendaService.getAgendaDetail(this.agenda_id)
            .subscribe(agendaDetail => {
                this.agendaDetail = agendaDetail;
                this.dia = agendaDetail.dia;
                this.anio = agendaDetail.anio;
                switch(agendaDetail.mes){
                            case 1:{
                                this.mesString = "Enero";
                                this.diaMax = 31;
                                break;
                            }
                            case 2: {
                                this.mesString = "Febrero";
                                this.diaMax = 28;
                                break;
                            }
                            case 3: {
                                this.mesString = "Marzo";
                                this.diaMax = 31;
                                break;
                            }
                            case 4: {
                                this.mesString = "Abril";
                                this.diaMax = 30;
                                break;
                            }
                            case 5: {
                                this.mesString = "Mayo";
                                this.diaMax = 31;
                                break;
                            }
                            case 6: {
                                this.mesString = "Junio";
                                this.diaMax = 30;
                                break;
                            }
                            case 7: {
                                this.mesString = "Julio";
                                this.diaMax = 31;
                                break;
                            }
                            case 8: {
                                this.mesString = "Agosto";
                                this.diaMax = 31;
                                break;
                            }
                            case 9: {
                                this.mesString = "Septiembre";
                                this.diaMax = 30;
                                break;
                            }
                            case 10: {
                                this.mesString = "Octubre";
                                this.diaMax = 30;
                                break;
                            }
                            case 11: {
                                this.mesString = "Noviembre";
                                this.diaMax = 30;
                                break;
                            }
                            case 12: {
                                this.mesString = "Diciembre";
                                this.diaMax = 31;
                                break;
                            }
                        }
                
            });
    }


    eliminarAgenda(){
        this.agendaService.eliminarAgenda(this.agenda_id, this.agendaDetail.cancha.id)
        .subscribe(AgendaDetail => {
            
        this.router.navigate(['/canchas/' + this.agendaDetail.cancha.id]);
        });
    }

    diaMas(){
        if(this.agendaDetail.dia < this.diaMax)
        {
            this.agendaDetail.dia++;
        }
        this.agendaService.updateAgenda(this.agendaDetail)
        .subscribe(a => {
            
            this.router.navigate(['/agendas/' + this.agendaDetail.id]);
        })
    }

    diaMenos(){
        if(this.agendaDetail.dia >1)
        {
            this.agendaDetail.dia--;
        }
        this.agendaService.updateAgenda(this.agendaDetail)
        .subscribe(a => {
            
            this.router.navigate(['/agendas/' + this.agendaDetail.id]);
        })
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.agenda_id = +this.route.snapshot.paramMap.get('id');
        this.getAgendaDetails();
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}