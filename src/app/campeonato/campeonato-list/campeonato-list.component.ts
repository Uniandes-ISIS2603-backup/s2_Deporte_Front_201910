/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {Component, OnInit, ViewContainerRef} from '@angular/core';
 import {Router} from '@angular/router';
import {Campeonato} from '../campeonato';
import {CampeonatoService} from '../campeonato.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'app-campeonato',
    templateUrl: './campeonato-list.component.html',
    styleUrls: ['./campeonato-list.component.css']
})
export class CampeonatoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private campeonatoService: CampeonatoService, private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService
) {}

    /**
     * The list of editorials wahich belong to the BookStore
     */
    campeonatos: Campeonato[];
    
    showCreate: boolean;
    
    showEdit: boolean;
    
    campeonato_edit_id: number;

    /**
     * Asks the service to update the list of editorials
     */
    getCampeonatos(): void {
        this.campeonatoService.getCampeonatos()
            .subscribe(campeonatos => this.campeonatos = campeonatos);
    }
    
     showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }
     showHideEdit(editorial_id: number): void {
         if (!this.showEdit || (this.showEdit && editorial_id != this.campeonato_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.campeonato_edit_id = editorial_id;
        }
        else {
            this.showEdit = false;
        }
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
     ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
         this.getCampeonatos();
    }    
    updateEditorial(): void {
        this.showEdit = false;
    }

    deleteEditorial(campeonatoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a campeonato',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this campeonato?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.campeonatoService.deleteCampeonato(campeonatoId).subscribe(() => {
                            this.toastrService.error("The campeonato was successfully deleted", "Campeonato deleted");
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
}


