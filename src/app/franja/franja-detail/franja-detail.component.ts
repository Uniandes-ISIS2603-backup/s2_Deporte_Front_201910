import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {FranjaService} from '../franja.service';
import {Franja} from '../franja';
import { FranjaDetail } from '../franja-detail';

@Component({
    selector: 'app-franja-detail',
    templateUrl: './franja-detail.component.html',
    styleUrls: ['./franja-detail.component.css']
})

export class FranjaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param franjaService The agenda service which communicates with the API
    * @param route The route which helps to retrieves the id of the agenda to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
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

    /**
    * The book's id retrieved from the path
    */
    franja_id: number;

    /**
    * The book whose details are shown
    */
    franjaDetail: FranjaDetail;

    /**
    * The other books shown in the sidebar
    */
    other_franjas: Franja[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getFranjaDetail(): void {
        this.franjaService.getFranjaDetail(this.franja_id)
            .subscribe(franjaDetail => {
                this.franjaDetail = franjaDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherFranjas(): void {
        this.franjaService.getFranjas()
            .subscribe(franjas => {
                this.other_franjas = franjas;
                this.other_franjas = this.other_franjas.filter(franja => franja.id !== this.franja_id);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.franja_id = +this.route.snapshot.paramMap.get('id');
        this.franjaDetail = new FranjaDetail();
        this.getFranjaDetail();
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