/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {Component, OnInit} from '@angular/core';
 import {Router} from '@angular/router';
import {Campeonato} from '../campeonato';
import {CampeonatoService} from '../campeonato.service';


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
    constructor(private campeonatoService: CampeonatoService, private router: Router) {}

    /**
     * The list of editorials wahich belong to the BookStore
     */
    campeonatos: Campeonato[];
    
    showCreate: boolean;

    /**
     * Asks the service to update the list of editorials
     */
    getCampeonatos(): void {
        this.campeonatoService.getCampeonatos()
            .subscribe(campeonatos => this.campeonatos = campeonatos);
    }
    
    showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCampeonatos();
        this.showCreate = false;
    }
}


