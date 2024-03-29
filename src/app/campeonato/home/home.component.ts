/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
import {CampeonatoDetail} from '../campeonato-detail';


/**
 * The component for the list of campeonatos in the BookStore
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

    /**
     * Constructor for the component
     * @param campeonatoService The author's services provider
     */
    constructor(private campeonatoService: CampeonatoService, private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService
) {}

    /**
     * The list of campeonatos wahich belong to the BookStore
     */
    campeonatos: Campeonato[];
    
    showCreate: boolean;
    
    showEdit: boolean;
    
    campeonato_edit_id: number;

    selectedCampeonato: Campeonato;

    /**
    * Shows the campeonato
    */
   onSelected(campeonato_id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    
    this.campeonato_edit_id = campeonato_id;
    this.selectedCampeonato = new CampeonatoDetail();
    //this.getCampeonatoDetail();
}


    /**
     * Asks the service to update the list of camponatos
     */
    getCampeonatos(): void {
        this.campeonatoService.getCampeonatos()
            .subscribe(campeonatos => this.campeonatos = campeonatos);
    }
    
     showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }
     showHideEdit(): void {
         this.showEdit = !this.showEdit!
    }

    /**
     * This will initialize the component by retrieving the list of campeonatos from the service
     * This method will be called when the component is created
     */
     ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
         this.getCampeonatos();
    }    
    
    //Muestra el componente de actualizar
    updateCampeonato(): void {
        this.showEdit = false;
    }

    deleteCampeonato(campeonatoId): void {
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





