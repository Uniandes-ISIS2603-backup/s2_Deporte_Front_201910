import {Component, OnInit, ViewContainerRef,Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Propietario } from '../propietario';
import { PropietarioService } from '../propietario.service';
 import {Router} from '@angular/router';


@Component({
    selector: 'app-propietario',
    templateUrl: './propietario-list.component.html',
    styleUrls: ['./propietario-list.component.css']
})
export class PropietarioListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param editorialService The author's services provider
    */
    constructor(
        private propietarioService: PropietarioService,private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService
    ) { }

    /**
    * The list of editorials which belong to the BookStore
    */
    propietarios: Propietario[];
    
        showCreate: boolean;


    /**
    * Asks the service to update the list of editorials
    */
   getPropietarios(): void {
        this.propietarioService.getPropietarios()
            .subscribe(propietarios => {
                this.propietarios = propietarios;
            });
    }

 showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }
    /**
    * This will initialize the component by retrieving the list of editorials from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getPropietarios();
    }
     deletePropietario(postId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a propietario',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this propietario?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.propietarioService.deletePropietario(postId).subscribe(() => {
                            this.toastrService.error("The propietario was successfully deleted", "Propietario deleted");
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