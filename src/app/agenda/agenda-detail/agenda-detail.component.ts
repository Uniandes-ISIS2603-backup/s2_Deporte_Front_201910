import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
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

    /**
    * The book whose details are shown
    */
    agendaDetail: AgendaDetail;

    /**
    * The other books shown in the sidebar
    */
    other_agendas: Agenda[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getAgendaDetail(): void {
        this.agendaService.getAgendaDetail(this.agenda_id)
            .subscribe(agendaDetail => {
                this.agendaDetail = agendaDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherAgendas(): void {
        this.agendaService.getAgendas()
            .subscribe(agendas => {
                this.other_agendas = agendas;
                this.other_agendas = this.other_agendas.filter(agenda => agenda.id !== this.agenda_id);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.agenda_id = +this.route.snapshot.paramMap.get('id');
        this.agendaDetail = new AgendaDetail();
        this.getAgendaDetail();
        //this.getOtherAgendas();
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