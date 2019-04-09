/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { CampeonatoService } from '../campeonato.service';

import { Campeonato } from '../campeonato';

@Component({
    selector: 'app-campeonato-create',
    templateUrl: './campeonato-create.component.html',
    styleUrls: ['./campeonato-create.component.css']
})
export class CampeonatoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param campeonatoService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private campeonatoService: CampeonatoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new editorial
    */
    campeonato: Campeonato;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new editorial
    */
    createCampeonato(): void {
        this.campeonatoService.createCampeonato(this.campeonato)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The Campeonato was created", "Campeonato creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.campeonato = new Campeonato();
    }
}

