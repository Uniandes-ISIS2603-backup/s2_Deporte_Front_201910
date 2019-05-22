import { Component, OnInit } from '@angular/core';

import { Propietario } from '../propietario';
import { PropietarioService } from '../propietario.service';

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
        private propietarioService: PropietarioService,
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
}