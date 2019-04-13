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
    * @param campeonatoService The campeonatos' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private campeonatoService: CampeonatoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new campeonato
    */
    campeonato: Campeonato;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an campeonato
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new campeonato
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new campeonato
    */
   createCampeonato(): Campeonato {
    this.campeonatoService.createCampeonato(this.campeonato)
        .subscribe((campeonato) => {
            this.campeonato = campeonato;
            this.create.emit();
            this.toastrService.success("The campeonato was created", "Campeonato creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.campeonato;
}
    

    /**
    * Informs the parent component that the user no longer wants to create an campeonato
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

