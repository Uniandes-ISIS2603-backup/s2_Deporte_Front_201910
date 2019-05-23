 import {Component, OnInit, ViewContainerRef,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Cancha} from '../../cancha/cancha';
import {CanchaService} from '../../cancha/cancha.service';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
 import {Router} from '@angular/router';


@Component({
    selector: 'app-cancha-list',
    templateUrl: './cancha-list.component.html',
    styleUrls: ['./cancha-list.component.css']
})

export class CanchaListComponent implements OnInit {

    /**
    * The list of books to display
    */
    @Input() canchas: Cancha[];

    /**
    * The component's constructor
    */
    constructor(private canchaService: CanchaService, private route: ActivatedRoute, private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService) {}

    allcanchas: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getCanchas(): void {
        this.canchaService.getCanchas()
            .subscribe(canchas => {
                this.canchas = canchas;
            });
            
            
            
    }

 deleteCancha(campeonatoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a cancha',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this cancha?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.canchaService.deleteCancha(campeonatoId).subscribe(() => {
                            this.toastrService.error("The cancha was successfully deleted", "Cancha deleted");
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
    /**
    * The method which initializes the component
    */
    ngOnInit() {
       this.getCanchas();
    }
}
