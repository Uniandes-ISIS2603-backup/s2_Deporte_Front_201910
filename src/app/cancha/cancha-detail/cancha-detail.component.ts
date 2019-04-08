import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {CanchaService} from '../cancha.service';
import {Cancha} from '../cancha';
import { CanchaDetail } from '../cancha-detail';

@Component({
    selector: 'app-cancha-detail',
    templateUrl: './cancha-detail.component.html',
    styleUrls: ['./cancha-detail.component.css']
})
export class CanchaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private canchaService: CanchaService,
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
    cancha_id: number;

    /**
    * The book whose details are shown
    */
    canchaDetail: CanchaDetail;

    numeros:number[];

    /**
    * The other books shown in the sidebar
    */
    other_canchas: Cancha[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getCanchaDetail(): void {
        this.canchaService.getCanchaDetail(this.cancha_id)
            .subscribe(canchaDetail => {
                this.canchaDetail = canchaDetail;
                this.numeros=this.canchaDetail.contactos;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherCanchas(): void {
        this.canchaService.getCanchas()
            .subscribe(canchas => {
                this.other_canchas = canchas;
                this.other_canchas = this.other_canchas.filter(cancha => cancha.tipoCancha !== this.canchaDetail.tipoCancha);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.cancha_id = +this.route.snapshot.paramMap.get('id');
        this.canchaDetail = new CanchaDetail();
        this.getCanchaDetail();
        this.getOtherCanchas();
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