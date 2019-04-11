import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {CampeonatoService} from '../campeonato.service';
import {CampeonatoDetail} from '../campeonato-detail';


@Component({
    selector: 'app-campeonato-edit',
    templateUrl: './campeonato-edit.component.html',
    styleUrls: ['./campeonato-edit.component.css']
})
export class CampeonatoEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param campeonatoService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private campeonatoService: CampeonatoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() campeonato_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new editorial
    */
    @Output() update = new EventEmitter();

    /**
    * The editorial to edit
    */
    campeonato: CampeonatoDetail;

    /**
    * Retrieves the information of the editorial
    */
    getCampeonato(): void {
        this.campeonatoService.getCampeonatoDetail(this.campeonato_id)
            .subscribe(campeonato => {
                this.campeonato = campeonato;
            });
    }

    /**
    * Updates the editorial's information
    */
    editCampeonato(): void {
        this.campeonatoService.updateCampeonato(this.campeonato)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The campeonato's information was updated", "Campeonato edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.campeonato = new CampeonatoDetail();
        this.getCampeonato();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}